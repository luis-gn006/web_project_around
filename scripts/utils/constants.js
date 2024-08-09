const editButton = document.querySelector(".profile__button-edit");
const addButton = document.querySelector(".profile__button-add");
const popupProfile = document.querySelector(".popup-profile");
const popupElements = document.querySelector(".popup-elements");
const popupImage = document.querySelector(".popup-image-fullscreen");
const inputTitle = popupElements.querySelector(".popup__form-title");
const inputLink = popupElements.querySelector(".popup__form-link");
const elementForm = popupElements.querySelector(".popup__form-image");
const elementsArea = document.querySelector(".elements");
const profileForm = popupProfile.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameForm = document.querySelector(".popup__form-name");
const jobForm = document.querySelector(".popup__form-job");

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
};
