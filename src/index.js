import "./pages/index.css";
import Card from "./scripts/components/Card.js";
import { elementsArea, renderLoading } from "./scripts/utils.js";
import Section from "./scripts/components/Section.js";
import {
  profileJob,
  profileName,
  avatarImage,
  apiTriple,
  profileFormValidation,
  imageFormValidation,
  avatarFormValidation,
} from "./scripts/utils/constants.js";
import UserInfo from "./scripts/components/UserInfo.js";

//Función cargar imagenes de inicio
apiTriple.getUserInfo().then((user) => {
  //Flag cargar tarjetas
  renderLoading(true);
  apiTriple.getInitialCards().then((cards) => {
    const defaultCardList = new Section(
      {
        items: cards,
        renderer: (item) => {
          const card = new Card(item, ".element__template", user, {
            handleCardClick: () => {
              imagePopup.open(item.link, item.name);
            },
            handleButtonTrash: user._id == item.owner._id,
            handlePopupDelete: (cardId, callback) => {
              deleteFormPopup.open(() => {
                //Flag borrar tarjeta
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

//Función cargar información de usuario
//Flag cargar información
profileName.textContent = "Cargando...";
profileJob.textContent = "Cargando...";
apiTriple.getUserInfo().then((user) => {
  const profileInfo = new UserInfo({
    userName: user.name,
    userJob: user.about,
  });
  //Cargar avatar
  avatarImage.src = user.avatar;
  profileInfo.setUserInfoProfile(profileName, profileJob);
});

//Activar validaciones de formularios
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();
avatarFormValidation.enableValidation();
