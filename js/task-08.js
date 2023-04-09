const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email: mail,
    password: password,
  };

  if (!mail || !password) {
    alert("Please fill in all fields");
    return;
  }

  console.log(formData);
  form.reset();
});
