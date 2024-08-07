import {
  profileName,
  profileJob,
  nameForm,
  jobForm,
  popupProfile,
  editButton,
  closeButtonProfile,
  popupElements,
  addButton,
  closeButtonElements,
  profileForm,
  elementsArea,
  elementForm,
  inputTitle,
  inputLink,
  closeButtonImage,
  popupImage,
} from "./utils/constants.js";
import { imageFormValidation, profileFormValidation } from "./index.js";
import { Section } from "./Section.js";
//Funciones de mostrar , ocultar y toggle popup
function showPopup(form) {
  form.classList.add("popup__opened");
  imageFormValidation.resetValidation();
  profileFormValidation.resetValidation();
}
function hidePopup(form) {
  form.classList.remove("popup__opened");
}

//Llamar información del perfil
function callProfileInfo() {
  nameForm.value = profileName.textContent;
  jobForm.value = profileJob.textContent;
}
/*
//Visulación profile popup
editButton.addEventListener("click", function () {
  showPopup(popupProfile);
  callProfileInfo();
});
closeButtonProfile.addEventListener("click", function () {
  hidePopup(popupProfile);
});

//Visulación elements popup

addButton.addEventListener("click", function () {
  showPopup(popupElements);
});
closeButtonElements.addEventListener("click", function () {
  hidePopup(popupElements);
  elementForm.reset();
});
*/

//Función editar profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  hidePopup(popupProfile);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

//Función agregar imagen
elementForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = [
    {
      link: inputLink.value,
      name: inputTitle.value,
    },
  ];
  hidePopup(popupElements);
  elementForm.reset();
  const newCardElement = new Section(
    {
      items: data,
    },
    elementsArea
  );
  newCardElement.renderer();
});

//Función boton cerrar popup image
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

export { showPopup, elementsArea };
