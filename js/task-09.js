function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  changeColorBtn: document.querySelector(".change-color"),
  textColorEl: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn() {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.textColorEl.textContent = color;
}
