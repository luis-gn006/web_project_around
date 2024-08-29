import "./pages/index.css";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import { elementsArea, renderLoading } from "./scripts/utils.js";
import Section from "./scripts/components/Section.js";
import {
  popupImage,
  popupElements,
  popupProfile,
  popupAvatar,
  profileJob,
  profileName,
  formConfig,
  popupDelete,
  avatarImage,
} from "./scripts/utils/constants.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupWithConfirmation from "./scripts/components/PopupWithConfirmation.js";
import Api from "./scripts/components/Api.js";
import UserInfo from "./scripts/components/UserInfo.js";

//Instancia Popup With Image
export const imagePopup = new PopupWithImage(popupImage);
//Cargar imagenes default
export const apiTriple = new Api(
  "https://around.nomoreparties.co/v1/web_es_10",
  "541d0e53-114b-4fb1-9af0-b09c04c191b9"
);

apiTriple.getUserInfo().then((user) => {
  renderLoading(true);
  apiTriple.getInitialCards().then((cards) => {
    console.log(cards);
    const defaultCardList = new Section(
      {
        items: cards,
        renderer: (item) => {
          console.log(item.owner._id);
          const card = new Card(item, ".element__template", user, {
            handleCardClick: () => {
              imagePopup.open(item.link, item.name);
            },
            handleButtonTrash: user._id == item.owner._id,
            handlePopupDelete: (cardId, callback) => {
              console.log(cardId);
              deleteFormPopup.open(() => {
                deleteButton.textContent = "Borrando...";
                apiTriple.deleteCard(cardId).then(() => {
                  callback();
                  deleteButton.textContent = "¿Estás seguro/a?";
                  deleteFormPopup.close();
                });
              });
            },
            handleCardLike: (cardId) => {
              return apiTriple.putLike(cardId);
            },
            handleCardDislike: (cardId) => {
              return apiTriple.deleteLike(cardId);
            },
          });
          const cardElement = card.generateCard();
          defaultCardList.addItem(cardElement);
        },
      },
      elementsArea
    );
    defaultCardList.renderer();
    renderLoading(false);
  });
});

//cargar info profile
profileName.textContent = "Cargando...";
profileJob.textContent = "Cargando...";
apiTriple.getUserInfo().then((user) => {
  console.log(user);
  const profileInfo = new UserInfo({
    userName: user.name,
    userJob: user.about,
  });
  //cargar avatr profile
  avatarImage.src = user.avatar;

  profileInfo.setUserInfoProfile(profileName, profileJob);
});

//Instancias Popups
export const profileFormPopup = new PopupWithForm(popupProfile);
export const avatarFormPopup = new PopupWithForm(popupAvatar);
export const elementFormPopup = new PopupWithForm(popupElements);
export const deleteFormPopup = new PopupWithConfirmation(popupDelete);

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
const formSelectorAvatar = document.querySelector(".popup__form-avatar");
export const avatarFormValidation = new FormValidator(
  formConfig,
  formSelectorAvatar
);
avatarFormValidation.enableValidation();
