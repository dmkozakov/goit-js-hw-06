const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (!refs.email.value || !refs.password.value) {
    return alert("All fields must be filled");
  }

  const formEl = event.currentTarget;

  const mail = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  formEl.reset();
}
