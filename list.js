function addItem() {
    var newText = document.getElementById("newItem").value;

    var newLi = document.createElement("li");

    var newDiv = document.createElement("div");
    newDiv.classList.add("list_item");

    var newInput = document.createElement("input");
    newInput.classList.add("item_input");
    newInput.type = "text";
    newInput.value = newText;
    newDiv.appendChild(newInput);

    var newValueInput = document.createElement("input");
    newValueInput.classList.add("item_value_input");
    newValueInput.type = "text";
    newValueInput.value = '0₽';
    newDiv.appendChild(newValueInput);

    var newQuantityInput = document.createElement("input");
    newQuantityInput.classList.add("item_quantity_input");
    newQuantityInput.type = "text";
    newQuantityInput.value = '0';
    newDiv.appendChild(newQuantityInput);

    var newStoreInput = document.createElement("input");
    newStoreInput.classList.add("item_store_input");
    newStoreInput.type = "text";
    newStoreInput.value = 'Магазин';
    newDiv.appendChild(newStoreInput);

    newLi.appendChild(newDiv);

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button");
    deleteButton.textContent = "Удалить";
    deleteButton.onclick = function() {
        // Get the current list from localStorage
        var list = JSON.parse(localStorage.getItem("list")) || [];

        // Find the index of the item to be deleted
        var index = list.findIndex(function(item) {
            return item.text === newInput.value &&
                   item.value === newValueInput.value &&
                   item.quantity === newQuantityInput.value &&
                   item.store === newStoreInput.value;
        });

        // Remove the item from the list
        if (index !== -1) {
            list.splice(index, 1);
        }

        // Save the list in localStorage
        localStorage.setItem("list", JSON.stringify(list));

        newLi.parentNode.removeChild(newLi);
    };
    newDiv.appendChild(deleteButton);

    // Get the current list from localStorage
    var list = JSON.parse(localStorage.getItem("list")) || [];

    // Add the new item to the list
    list.push({
        text: newInput.value,
        value: newValueInput.value,
        quantity: newQuantityInput.value,
        store: newStoreInput.value
    });

    // Save the list in localStorage
    localStorage.setItem("list", JSON.stringify(list));

    document.getElementById("myList").appendChild(newLi);

    document.getElementById("newItem").value = "";
}

function loadList() {
    // Get the current list from localStorage or create an empty array if it doesn't exist
    var list = JSON.parse(localStorage.getItem("list")) || [];

    // Clear the current list HTML
    document.getElementById("myList").innerHTML = "";

    // Iterate through the list items and add them to the HTML
    list.forEach(function(item) {
        var newLi = document.createElement("li");

        var newDiv = document.createElement("div");
        newDiv.classList.add("list_item");

        var newInput = document.createElement("input");
        newInput.classList.add("item_input");
        newInput.type = "text";
        newInput.value = item.text;
        newDiv.appendChild(newInput);

        var newValueInput = document.createElement("input");
        newValueInput.classList.add("item_value_input");
        newValueInput.type = "text";
        newValueInput.value = item.value;
        newDiv.appendChild(newValueInput);

        var newQuantityInput = document.createElement("input");
        newQuantityInput.classList.add("item_quantity_input");
        newQuantityInput.type = "text";
        newQuantityInput.value = item.quantity;
        newDiv.appendChild(newQuantityInput);

        var newStoreInput = document.createElement("input");
        newStoreInput.classList.add("item_store_input");
        newStoreInput.type = "text";
        newStoreInput.value = item.store;
        newDiv.appendChild(newStoreInput);

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete_button");
        deleteButton.textContent = "Удалить";
        deleteButton.onclick = function() {
            // Get the current list from localStorage
            var list = JSON.parse(localStorage.getItem("list")) || [];

            // Find the index of the item to be deleted
            var index = list.findIndex(function(item) {
                return item.text === newInput.value &&
                       item.value === newValueInput.value &&
                       item.quantity === newQuantityInput.value &&
                       item.store === newStoreInput.value;
            });

            // Remove the item from the list
            if (index !== -1) {
                list.splice(index, 1);
            }

            // Save the list in localStorage
            localStorage.setItem("list", JSON.stringify(list));

            newLi.parentNode.removeChild(newLi);
        };
        newDiv.appendChild(deleteButton);

        newLi.appendChild(newDiv);

        document.getElementById("myList").appendChild(newLi);
    });
}

loadList();
