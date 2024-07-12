/*function validar formulario profile*/
const formProfile = document.querySelector(".popup__form-profile");
const formInput = formProfile.querySelector(".popup__form-name");
const formError = formProfile.querySelector(`.${formInput.id}-error`);

const showError = (input, errorMessage) => {
  let divLine = formProfile.querySelector(".popup__line");
  divLine.classList.add("popup__form-input_error");
  formError.textContent = errorMessage;
  formError.classList.add("popup__input-error_active");
};

const hideError = (input) => {
  let divLine = formProfile.querySelector(".popup__line");
  divLine.classList.remove("popup__form-input_error");
  formError.classList.remove("popup__input-error_active");
  formError.textContent = "";
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("input", function () {
  checkInputValidity();
});
