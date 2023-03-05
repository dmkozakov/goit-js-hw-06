let counterValue = 0;

let counterValueEl = document.querySelector("#value");

function decreaseValue() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function increaseValue() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener("click", decreaseValue);

const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", increaseValue);