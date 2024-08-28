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
} from "./utils/constants.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import {
  profileFormPopup,
  //profileInfo,
  profileFormValidation,
  elementFormPopup,
  imageFormValidation,
  imagePopup,
  apiTriple,
  deleteFormPopup,
  avatarFormPopup,
} from "../index.js";
import UserInfo from "./components/UserInfo.js";

//Función editar profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  apiTriple.patchUserInfo(nameForm.value, jobForm.value);
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
  elementForm.reset();
  const newCardElement = new Section(
    {
      items: data,
      renderer: (item) => {
        console.log(item);
        apiTriple.postNewCard(item.name, item.link);
        const card = new Card(
          item,
          [],
          ".element__template",
          {
            handleCardClick: () => {
              imagePopup.open(item.link, item.name);
            },
          },
          { handleButtonTrash: true },
          {
            handlePopupDelete: (cardId, callback) => {
              deleteFormPopup.open(() => {
                apiTriple.deleteCard(cardId).then(() => {
                  callback();
                });
              });
            },
          }
        );
        const cardElement = card.generateCard();
        newCardElement.addItemPrep(cardElement);
      },
    },
    elementsArea
  );
  newCardElement.renderer();
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
})

export { elementsArea };
