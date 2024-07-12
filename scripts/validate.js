/*function validar formulario profile*/
const formProfile = document.querySelector(".popup__form-profile");
const formInput = formProfile.querySelector(".popup__form-input");
const formError = formProfile.querySelector(`.${formInput.id}-error`);
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(inputElement);
  inputElement.nextElementSibling.classList.add("popup__form-input_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.nextElementSibling.classList.remove("popup__form-input_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".popup__form-input")
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(".popup__form-profile")
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
