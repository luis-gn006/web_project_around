import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";

const initialCards = [
  {
    name: "Disney , USA",
    link: "https://images.unsplash.com/photo-1605443791607-80a259dd3c3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Eiffel , Francia",
    link: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fuente de Trevi , Italia",
    link: "https://images.unsplash.com/photo-1596627116790-af6f46dddbda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Puebla , México",
    link: "https://images.unsplash.com/photo-1666918057592-b9b9c98fb952?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lazio , Roma",
    link: "https://images.unsplash.com/photo-1614119189147-c55075cba781?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yucatán , México",
    link: "https://plus.unsplash.com/premium_photo-1676517308970-99f81614f4f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/* Funcion de popups abrir, cerrar y toggle popup*/

function showPopup(form) {
  form.classList.add("popup__opened");
}
function hidePopup(form) {
  form.classList.remove("popup__opened");
}
function togglePopup(form) {
  form.classList.toggle("popup__opened");
}

/* Visulacion popup profile*/
const popupProfile = document.querySelector(".popup-profile");
const editButton = document.querySelector(".profile__button-edit");
const closeButtonProfile = popupProfile.querySelector(".popup__close-button");
editButton.addEventListener("click", function () {
  showPopup(popupProfile);
});
closeButtonProfile.addEventListener("click", function () {
  hidePopup(popupProfile);
});

/* Visulacion popup elements*/
const popupElements = document.querySelector(".popup-elements");
const addButton = document.querySelector(".profile__button-add");
const closeButtonElements = popupElements.querySelector(".popup__close-button");
addButton.addEventListener("click", function () {
  showPopup(popupElements);
});
closeButtonElements.addEventListener("click", function () {
  hidePopup(popupElements);
  elementForm.reset();
});

/* Llamar info del perfil*/
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameForm = document.querySelector(".popup__form-name");
const jobForm = document.querySelector(".popup__form-job");
function callProfileInfo() {
  nameForm.value = profileName.textContent;
  jobForm.value = profileJob.textContent;
}

editButton.addEventListener("click", callProfileInfo);

/* funcion editar profile*/
const profileForm = popupProfile.querySelector(".popup__form");
const savePopupButton = popupProfile.querySelector(".popup__form-button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  resetForm(evt.target, formConfig);
  togglePopup(popupProfile);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

//Funcion cargar imagenes de inicio

const elementsArea = document.querySelector(".elements");
const templateNode = document.querySelector(".element__template");

// clase Card

// cargar imagenes de inicio
initialCards.forEach((item) => {
  const card = new Card(item, ".element__template");
  const cardElement = card.generateCard();

  elementsArea.append(cardElement);
});

/*funcion agregar imagen*/
const elements = document.querySelector(".popup-elements");
const elementForm = elements.querySelector(".popup__form-image");
const createPopupButton = elements.querySelector(".popup__form-button");
const inputTitle = elements.querySelector(".popup__form-title");
const inputLink = elements.querySelector(".popup__form-link");

elementForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {
    link: inputLink.value,
    name: inputTitle.value,
  };
  let newCard = new Card(data, ".element__template");
  const newCardElement = newCard.generateCard();
  //let newNode = createCard(titleValue, linkValue);
  togglePopup(popupElements);
  elementForm.reset();
  elementsArea.prepend(newCardElement);
  //elementsArea.prepend(newNode);
});

/* funcion boton cerrar popup image*/
const closeButtonImage = document.querySelector(".popup__button-image");
const popupImage = document.querySelector(".popup-image-fullscreen");
closeButtonImage.addEventListener("click", function () {
  hidePopup(popupImage);
});

/* funcion cerrar todos los popups*/
function removeAllPopups() {
  popupProfile.classList.remove("popup__opened");
  popupElements.classList.remove("popup__opened");
  popupImage.classList.remove("popup__opened");
  elementForm.reset();
}
/* funcion cerrar popup click fuera del contenedor*/

document.querySelectorAll(".popup").forEach((form) => {
  form.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
      removeAllPopups();
    }
  });
});

/* funcion cerrar popup al presinar escape*/

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    removeAllPopups();
  }
});

const formConfig = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  activeButtonClass: "popup__form-button",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__input-error_active",
  fieldsetSelector: ".popup__form-set",
};

const formSelectorProfile = document.querySelector(".popup__form-profile");

const profileFormValidation = new FormValidator(
  formConfig,
  formSelectorProfile
);
profileFormValidation.enableValidation();

const formSelectorImage = document.querySelector(".popup__form-image");

const imageFormValidation = new FormValidator(formConfig, formSelectorImage);
imageFormValidation.enableValidation();
