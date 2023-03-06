function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("[type='number']"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxesMarkup(amount) {
  refs.boxesContainer.innerHTML = "";
  let createBoxesStr = "";
  for (let i = 1; i <= amount; i += 1) {
    console.log(amount);
    createBoxesStr += "<div></div>";
  }
  return createBoxesStr;
}

function createBoxes() {
  if (Number(refs.input.value) > 0 && Number(refs.input.value) < 101) {
    refs.boxesContainer.insertAdjacentHTML(
      "afterbegin",
      createBoxesMarkup(Number(refs.input.value))
    );

    const boxes = [...refs.boxesContainer.children];

    let initialWidth = 30;
    let initialHeight = 30;

    for (let i = 0; i < boxes.length; i += 1) {
      boxes[i].style.width = `${initialWidth}px`;
      boxes[i].style.height = `${initialHeight}px`;
      boxes[i].style.backgroundColor = `${getRandomHexColor()}`;

      initialWidth += 10;
      initialHeight += 10;
    }
  } else {
    alert("Enter value between 1 and 100");
  }
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  refs.input.value = "";
}
