const editButton = document.querySelector(".profile__button-edit");
const addButton = document.querySelector(".profile__button-add");
const popupProfile = document.querySelector(".popup-profile");
const popupElements = document.querySelector(".popup-elements");
const popupImage = document.querySelector(".popup-image-fullscreen");
const popupDelete = document.querySelector(".popup-delete-card");
const inputTitle = popupElements.querySelector(".popup__form-title");
const inputLink = popupElements.querySelector(".popup__form-link");
const elementForm = popupElements.querySelector(".popup__form-image");
const elementsArea = document.querySelector(".elements");
const profileForm = popupProfile.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameForm = document.querySelector(".popup__form-name");
const jobForm = document.querySelector(".popup__form-job");

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
const formConfig = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  activeButtonClass: "popup__form-button_active",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__input-error_active",
  fieldsetSelector: ".popup__form-set",
};

export {
  profileName,
  profileJob,
  nameForm,
  jobForm,
  popupProfile,
  editButton,
  popupElements,
  addButton,
  profileForm,
  elementsArea,
  elementForm,
  inputTitle,
  inputLink,
  popupImage,
  initialCards,
  formConfig,
  popupDelete
};
