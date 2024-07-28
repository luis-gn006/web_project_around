import { Card } from "./Card.js";
import { profileFormValidation, imageFormValidation } from "../index.js";
//Funciones de mostrar , ocultar y toggle popup
function showPopup(form) {
  form.classList.add("popup__opened");
}
function hidePopup(form) {
  form.classList.remove("popup__opened");
}
function togglePopup(form) {
  form.classList.toggle("popup__opened");
}

//Llamar información del perfil
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameForm = document.querySelector(".popup__form-name");
const jobForm = document.querySelector(".popup__form-job");
function callProfileInfo() {
  nameForm.value = profileName.textContent;
  jobForm.value = profileJob.textContent;
}

//Visulación profile popup
const popupProfile = document.querySelector(".popup-profile");
const editButton = document.querySelector(".profile__button-edit");
const closeButtonProfile = popupProfile.querySelector(".popup__close-button");
editButton.addEventListener("click", function () {
  showPopup(popupProfile);
  callProfileInfo();
});
closeButtonProfile.addEventListener("click", function () {
  hidePopup(popupProfile);
});

//Visulación elements popup
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

//Función editar profile
const profileForm = popupProfile.querySelector(".popup__form");
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  togglePopup(popupProfile);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

//Función agregar imagen
const elementsArea = document.querySelector(".elements");
const elementForm = popupElements.querySelector(".popup__form-image");
const inputTitle = popupElements.querySelector(".popup__form-title");
const inputLink = popupElements.querySelector(".popup__form-link");
elementForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {
    link: inputLink.value,
    name: inputTitle.value,
  };
  let newCard = new Card(data, ".element__template");
  const newCardElement = newCard.generateCard();
  togglePopup(popupElements);
  elementForm.reset();
  elementsArea.prepend(newCardElement);
});

//Función boton cerrar popup image
const closeButtonImage = document.querySelector(".popup__button-image");
const popupImage = document.querySelector(".popup-image-fullscreen");
closeButtonImage.addEventListener("click", function () {
  hidePopup(popupImage);
});

//Función cerrar todos los popups
function removeAllPopups() {
  popupProfile.classList.remove("popup__opened");
  popupElements.classList.remove("popup__opened");
  popupImage.classList.remove("popup__opened");
  elementForm.reset();
}

//Función cerrar popup click fuera del contenedor
document.querySelectorAll(".popup").forEach((form) => {
  form.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
      removeAllPopups();
    }
  });
});

//Función cerrar popup al presionar escape
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    removeAllPopups();
  }
});

export { togglePopup, elementsArea };
