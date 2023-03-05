const listItemEl = document.querySelectorAll(".item");

function getCategoriesInfo(arr) {
  console.log(`Number of categories: ${arr.length}`);

  listItemEl.forEach(el => {
    const categoryTitle = el.querySelector("h2");
    const listOfElements = el.querySelectorAll(".item li");

    console.log(`Category: ${categoryTitle.textContent}\nElements: ${listOfElements.length}`);
  });
}
getCategoriesInfo(listItemEl);
