import "./pages/index.css";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import { elementsArea } from "./scripts/utils.js";
import Section from "./scripts/components/Section.js";
import {
  popupImage,
  popupElements,
  popupProfile,
  profileJob,
  profileName,
  nameForm,
  jobForm,
  initialCards,
  formConfig,
} from "./scripts/utils/constants.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";

//Instancia Popup With Image
export const imagePopup = new PopupWithImage(popupImage);
//Cargar imagenes default
const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".element__template", {
        handleCardClick: () => {
          imagePopup.open(item.link, item.name);
        },
      });
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  elementsArea
);
defaultCardList.renderer();

//Popups instancias
export const profileFormPopup = new PopupWithForm(popupProfile);
export const elementFormPopup = new PopupWithForm(popupElements);
//Cargar info popupprofile
export const profileInfo = new UserInfo(
  {
    userName: profileName,
    userJob: profileJob,
  },
  nameForm,
  jobForm
);

//Instancias FormValidator
const formSelectorProfile = document.querySelector(".popup__form-profile");
export const profileFormValidation = new FormValidator(
  formConfig,
  formSelectorProfile
);
profileFormValidation.enableValidation();
const formSelectorImage = document.querySelector(".popup__form-image");
export const imageFormValidation = new FormValidator(
  formConfig,
  formSelectorImage
);
imageFormValidation.enableValidation();
