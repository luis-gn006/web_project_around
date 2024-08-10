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
} from "./constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import {
  profileFormPopup,
  profileInfo,
  profileFormValidation,
  elementFormPopup,
  imageFormValidation,
  imagePopup,
} from "../pages/index.js";

//Función editar profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
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
        const card = new Card(item, ".element__template", {
          handleCardClick: () => {
            imagePopup.open(item.link, item.name);
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

editButton.addEventListener("click", function () {
  profileFormPopup.open();
  profileInfo.setUserInfo();
  profileFormValidation.resetValidation();
});
addButton.addEventListener("click", function () {
  elementFormPopup.open();
  imageFormValidation.resetValidation();
});

export { elementsArea };
