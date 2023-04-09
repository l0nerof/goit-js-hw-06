const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const invalidLength = event.currentTarget.value.length;
  const validLength = Number(inputEl.getAttribute("data-length"));

  if (invalidLength > validLength) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});
