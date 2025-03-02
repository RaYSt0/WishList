function back() {
    window.location = 'index.html';
}

function createListItem(item) {
    const newLi = document.createElement("li");
    const newDiv = document.createElement("div");
    newDiv.classList.add("list_item");

    const newInput = createInputElement("item_input", "text", item.text);
    const newValueInput = createInputElement("item_value_input", "text", item.value);
    const newQuantityInput = createInputElement("item_quantity_input", "text", item.quantity);
    const newStoreInput = createInputElement("item_store_input", "text", item.store);

    newDiv.append(newInput, newValueInput, newQuantityInput, newStoreInput);

    const deleteButton = createDeleteButton(newLi, item);
    newDiv.appendChild(deleteButton);

    newLi.appendChild(newDiv);
    return newLi;
}

function createInputElement(className, type, value) {
    const input = document.createElement("input");
    input.classList.add(className);
    input.type = type;
    input.value = value;
    return input;
}

function createDeleteButton(listItem, item) {
    const button = document.createElement("button");
    button.classList.add("delete_button");
    button.textContent = "Удалить";
    button.onclick = function() {
        const list = JSON.parse(localStorage.getItem("list")) || [];
        const index = list.findIndex(i =>
            i.text === item.text &&
            i.value === item.value &&
            i.quantity === item.quantity &&
            i.store === item.store
        );

        if (index !== -1) {
            list.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(list));
        }

        listItem.parentNode.removeChild(listItem);
    };
    return button;
}

function addItem() {
    const newText = document.getElementById("newItem").value;
    const newItem = {
        text: newText,
        value: '0₽',
        quantity: '1',
        store: 'Магазин'
    };

    const list = JSON.parse(localStorage.getItem("list")) || [];
    list.push(newItem);
    localStorage.setItem("list", JSON.stringify(list));

    const newLi = createListItem(newItem);
    document.getElementById("myList").appendChild(newLi);

    document.getElementById("newItem").value = "";
}

function loadList() {
    const list = JSON.parse(localStorage.getItem("list")) || [];
    const myListElement = document.getElementById("myList");
    myListElement.innerHTML = "";

    list.forEach(item => {
        const newLi = createListItem(item);
        myListElement.appendChild(newLi);
    });
}

loadList();
