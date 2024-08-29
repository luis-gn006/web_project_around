import {
  profileName,
  profileJob,
  nameForm,
  jobForm,
  profileForm,
  elementsArea,
  elementForm,
  inputTitle,
  inputLink,
  addButton,
  editButton,
  avatarEditButton,
  avatarForm,
  avatarLink,
  avatarImage,
  createButton,
  deleteButton,
  profileButton,
  avatarButton,
  apiTriple,
  profileFormPopup,
  profileFormValidation,
  imagePopup,
  deleteFormPopup,
  avatarFormPopup,
  elementFormPopup,
  imageFormValidation,
  avatarFormValidation,
  spinner,
} from "./utils/constants.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import UserInfo from "./components/UserInfo.js";

//Función editar perfil
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //Flag guardando perfil
  profileButton.textContent = "Guardando...";
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  apiTriple.patchUserInfo(nameForm.value, jobForm.value).finally(() => {
    profileButton.textContent = "Guardar";
    profileFormPopup.close();
  });
});

//Función agregar tarjeta
elementForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //Flag creando tarjeta
  createButton.textContent = "Creando...";
  apiTriple
    .postNewCard(inputTitle.value, inputLink.value)
    .then((cards) => {
      apiTriple.getUserInfo().then((user) => {
        const newCardElement = new Section(
          {
            items: [cards],
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
              newCardElement.addItemPrep(cardElement);
            },
          },
          elementsArea
        );
        newCardElement.renderer();
      });
    })
    .finally(() => {
      createButton.textContent = "Crear";
      elementFormPopup.close();
    });
  elementForm.reset();
});

//Función actualizar información del perfil
editButton.addEventListener("click", function () {
  profileFormPopup.open();
  apiTriple.getUserInfo().then((user) => {
    const profileInfo = new UserInfo({
      userName: user.name,
      userJob: user.about,
    });
    profileInfo.setUserInfoForm(nameForm, jobForm);
  });
  profileFormValidation.resetValidation();
});
addButton.addEventListener("click", function () {
  elementFormPopup.open();
  imageFormValidation.resetValidation();
});
avatarEditButton.addEventListener("click", function () {
  avatarFormPopup.open();
  avatarFormValidation.resetValidation();
});

//Función remplazar imagen de avatar
avatarForm.addEventListener("submit", function (event) {
  event.preventDefault();
  avatarButton.textContent = "Guardando...";
  apiTriple.patchUserAvatar(avatarLink.value).finally(() => {
    avatarButton.textContent = "Guardar";
    avatarFormPopup.close();
  });
  avatarImage.src = avatarLink.value;
});

//Función activar spinner
function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add("spinner__visible");
  } else {
    spinner.classList.remove("spinner__visible");
  }
}

export { elementsArea, renderLoading };
