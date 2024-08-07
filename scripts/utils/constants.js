const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameForm = document.querySelector(".popup__form-name");
const jobForm = document.querySelector(".popup__form-job");

const popupProfile = document.querySelector(".popup-profile");
const editButton = document.querySelector(".profile__button-edit");
const closeButtonProfile = popupProfile.querySelector(".popup__close-button");

const popupElements = document.querySelector(".popup-elements");
const addButton = document.querySelector(".profile__button-add");
const closeButtonElements = popupElements.querySelector(".popup__close-button");

const profileForm = popupProfile.querySelector(".popup__form");

const elementsArea = document.querySelector(".elements");
const elementForm = popupElements.querySelector(".popup__form-image");
const inputTitle = popupElements.querySelector(".popup__form-title");
const inputLink = popupElements.querySelector(".popup__form-link");

const closeButtonImage = document.querySelector(".popup__close-image");
const popupImage = document.querySelector(".popup-image-fullscreen");

export {
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
};
