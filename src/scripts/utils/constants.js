import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";

const editButton = document.querySelector(".profile__button-edit");
const avatarEditButton = document.querySelector(".profile__avatar-edit");
const addButton = document.querySelector(".profile__button-add");
const popupProfile = document.querySelector(".popup-profile");
const popupAvatar = document.querySelector(".popup-profile-avatar");
const popupElements = document.querySelector(".popup-elements");
const popupImage = document.querySelector(".popup-image-fullscreen");
const popupDelete = document.querySelector(".popup-delete-card");
const inputTitle = popupElements.querySelector(".popup__form-title");
const inputLink = popupElements.querySelector(".popup__form-link");
const elementForm = popupElements.querySelector(".popup__form-image");
const avatarForm = document.querySelector(".popup__form-avatar");
const avatarLink = document.querySelector(".popup__profile-avatar");
const elementsArea = document.querySelector(".elements");
const profileForm = popupProfile.querySelector(".popup__form-profile");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameForm = document.querySelector(".popup__form-name");
const jobForm = document.querySelector(".popup__form-job");
const avatarImage = document.querySelector(".profile__avatar");
const createButton = document.querySelector(".popup__create-button");
const deleteButton = document.querySelector(".popup__delete-button");
const avatarButton = document.querySelector(".popup__save-button-avatar");
const profileButton = document.querySelector(".popup__save-button-profile");
const spinners = document.querySelectorAll(".spinner");

const formConfig = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  activeButtonClass: "popup__form-button_active",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__input-error_active",
  fieldsetSelector: ".popup__form-set",
};

//Instancias Popups
const imagePopup = new PopupWithImage(popupImage);
const profileFormPopup = new PopupWithForm(popupProfile);
const avatarFormPopup = new PopupWithForm(popupAvatar);
const elementFormPopup = new PopupWithForm(popupElements);
const deleteFormPopup = new PopupWithConfirmation(popupDelete);

//instancia Api
const apiTriple = new Api(
  "https://around.nomoreparties.co/v1/web_es_10",
  "541d0e53-114b-4fb1-9af0-b09c04c191b9"
);
//Instancias FormValidator
const profileFormValidation = new FormValidator(formConfig, profileForm);
const imageFormValidation = new FormValidator(formConfig, elementForm);
const avatarFormValidation = new FormValidator(formConfig, avatarForm);

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

export {
  profileName,
  profileJob,
  nameForm,
  jobForm,
  popupProfile,
  popupAvatar,
  editButton,
  avatarEditButton,
  popupElements,
  addButton,
  profileForm,
  elementsArea,
  elementForm,
  avatarForm,
  avatarLink,
  avatarImage,
  inputTitle,
  inputLink,
  popupImage,
  initialCards,
  formConfig,
  popupDelete,
  createButton,
  deleteButton,
  avatarButton,
  profileButton,
  imagePopup,
  profileFormPopup,
  avatarFormPopup,
  elementFormPopup,
  deleteFormPopup,
  apiTriple,
  profileFormValidation,
  imageFormValidation,
  avatarFormValidation,
  spinners,
};
