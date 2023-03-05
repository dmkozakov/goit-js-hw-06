const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

function createList(arr) {
  return arr.map(el => {
    const listItem = document.createElement("li");
    listItem.textContent = el;
    listItem.classList.add("item");

    return listItem;
  });
}

const elements = createList(ingredients);

const list = document.querySelector("#ingredients");
list.append(...elements);
