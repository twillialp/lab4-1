
//Task 3: Render the List in the Browser
//Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
//Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
//Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

//Task 1:

let shoppingList = [];

function addItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    console.log(`${item} added to the shopping list.`);
  } else {
    console.log(`${item} is already in the shopping list.`);
  }
}

//Task 2
function filterItems(query) {
  return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  console.log(shoppingList);
}   

//Task 3:

