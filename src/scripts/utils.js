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
} from "./utils/constants.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import {
  profileFormPopup,
  profileFormValidation,
  elementFormPopup,
  imageFormValidation,
  imagePopup,
  apiTriple,
  deleteFormPopup,
  avatarFormPopup,
  avatarFormValidation,
} from "../index.js";
import UserInfo from "./components/UserInfo.js";

//Función editar profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileButton.textContent = "Guardando...";
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  apiTriple.patchUserInfo(nameForm.value, jobForm.value).finally(() => {
    profileButton.textContent = "Guardar";
    profileFormPopup.close();
  });
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

//Función agregar imagen

elementForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createButton.textContent = "Creando...";
  apiTriple
    .postNewCard(inputTitle.value, inputLink.value)
    .then((cards) => {
      apiTriple.getUserInfo().then((user) => {
        const newCardElement = new Section(
          {
            items: [cards],
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

editButton.addEventListener("click", function () {
  profileFormPopup.open();
  //Cargar info popupprofile
  apiTriple.getUserInfo().then((user) => {
    console.log(user);
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

//funcion remplazar imagen avatar
avatarForm.addEventListener("submit", function (event) {
  event.preventDefault();
  avatarButton.textContent = "Guardando...";
  apiTriple.patchUserAvatar(avatarLink.value).finally(() => {
    avatarButton.textContent = "Guardar";
    avatarFormPopup.close();
  });
  avatarImage.src = avatarLink.value;
});

// funcion loader
const elementsSection = document.querySelector(".elements");
const spinner = document.querySelector(".spinner");
function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add("spinner__visible");
  } else {
    spinner.classList.remove("spinner__visible");
  }
}

export { elementsArea, renderLoading };
