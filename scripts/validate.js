/*function validar formularios*/
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  formConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.nextElementSibling.classList.add(formConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formConfig.errorClass);
};

const hideInputError = (formElement, inputElement, formConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.nextElementSibling.classList.remove(formConfig.inputErrorClass);
  errorElement.classList.remove(formConfig.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, formConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formConfig
    );
  } else {
    hideInputError(formElement, inputElement, formConfig);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, formConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(formConfig.inactiveButtonClass);
    buttonElement.classList.remove(formConfig.activeButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(formConfig.inactiveButtonClass);
    buttonElement.classList.add(formConfig.activeButtonClass);
  }
};

const setEventListeners = (formElement, formConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(formConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    formConfig.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, formConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, formConfig);
      toggleButtonState(inputList, buttonElement, formConfig);
    });
  });
};

const enableValidation = (formConfig) => {
  const formList = Array.from(
    document.querySelectorAll(formConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(formConfig.fieldsetSelector)
    );

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset, formConfig);
    });
  });
};

//funcion resetear formularios

const resetForm = (formElement, formConfig) => {
  formElement.reset();
  const submitButton = formElement.querySelector(
    formConfig.submitButtonSelector
  );
  const inputList = Array.from(
    formElement.querySelectorAll(formConfig.inputSelector)
  );
  toggleButtonState(inputList, submitButton, formConfig);
};

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  activeButtonClass: "popup__form-button",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__input-error_active",
  fieldsetSelector: ".popup__form-set",
};

enableValidation(formConfig);

// clase formValidation
