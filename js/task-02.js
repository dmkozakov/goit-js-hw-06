const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

function createListFromArray(arr, parentEl) {
  const elements = arr.map(el => {
    const listItem = document.createElement("li");
    listItem.textContent = el;
    listItem.classList.add("item");
    return listItem;
  });

  parentEl.append(...elements);
}

createListFromArray(ingredients, list);
