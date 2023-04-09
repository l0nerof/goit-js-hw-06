const decrementBtn = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", (event) => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
