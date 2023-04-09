const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  const fontSizeEl = event.currentTarget.value;
  spanEl.style.fontSize = `${fontSizeEl}px`;
});
