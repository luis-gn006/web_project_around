/*function validar formularios*/
const popupForm = document.querySelector(".popup__form");
const formInput = popupForm.querySelector(".popup__form-input");
const formError = popupForm.querySelector(`.${formInput.id}-error`);
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
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
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });

  formList.forEach((formElement) => {
    formElement.addEventListener("input", (evt) => {
      const isValidProfile =
        nameProfile.value.length > 1 && jobProfile.value.length > 1;
      setSubmitButtonState(isValidProfile, saveButton);
      const isValidImage =
        titleImage.value.length > 1 && linkImage.value.includes("http");
      setSubmitButtonState(isValidImage, createButton);
    });

    setEventListeners(formElement);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__input-error_active",
});

/*funcion enable/disable form profile button*/

const nameProfile = popupForm.elements.name;
const jobProfile = popupForm.elements.job;
const saveButton = document.querySelector(".popup__save-button");
const popupFormImage = document.querySelector(".popup__form-image");
const titleImage = popupFormImage.elements.title;
const linkImage = popupFormImage.elements.link;
const createButton = document.querySelector(".popup__create-button");

function setSubmitButtonState(isFormValid, buttonSelected) {
  if (isFormValid) {
    buttonSelected.removeAttribute("disabled");
    buttonSelected.classList.remove("popup__form-button_disabled");
  } else {
    buttonSelected.setAttribute("disabled", true);
    buttonSelected.classList.add("popup__form-button_disabled");
  }
}
