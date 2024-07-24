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

/* Funcion de popups abrir, cerrar y toggle popup*/

function showPopup(form) {
  form.classList.add("popup__opened");
}
function hidePopup(form) {
  form.classList.remove("popup__opened");
}
function togglePopup(form) {
  form.classList.toggle("popup__opened");
}

/* Visulacion popup profile*/
let popupProfile = document.querySelector(".popup-profile");
let editButton = document.querySelector(".profile__button-edit");
let closeButtonProfile = popupProfile.querySelector(".popup__close-button");
editButton.addEventListener("click", function () {
  showPopup(popupProfile);
});
closeButtonProfile.addEventListener("click", function () {
  hidePopup(popupProfile);
});

/* Visulacion popup elements*/
let popupElements = document.querySelector(".popup-elements");
let addButton = document.querySelector(".profile__button-add");
let closeButtonElements = popupElements.querySelector(".popup__close-button");
addButton.addEventListener("click", function () {
  showPopup(popupElements);
});
closeButtonElements.addEventListener("click", function () {
  hidePopup(popupElements);
  elementForm.reset();
});

/* Llamar info del perfil*/
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let nameForm = document.querySelector(".popup__form-name");
let jobForm = document.querySelector(".popup__form-job");
function callProfileInfo() {
  nameForm.value = profileName.textContent;
  jobForm.value = profileJob.textContent;
}

editButton.addEventListener("click", callProfileInfo);

/* funcion editar profile*/
let profileForm = popupProfile.querySelector(".popup__form");
let savePopupButton = popupProfile.querySelector(".popup__form-button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  togglePopup(popupProfile);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

/* Funcion cargar imagenes de inicio*/
let elementsArea = document.querySelector(".elements");
let templateNode = document.querySelector(".element__template");

initialCards.forEach(function (item) {
  let newNode = createCard(item.name, item.link);
  elementsArea.append(newNode);
});

/*funcion agregar imagen*/
let elements = document.querySelector(".popup-elements");
let elementForm = elements.querySelector(".popup__form-image");
let createPopupButton = elements.querySelector(".popup__form-button");
let inputTitle = elements.querySelector(".popup__form-title");
let inputLink = elements.querySelector(".popup__form-link");

elementForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let titleValue = inputTitle.value;
  let linkValue = inputLink.value;
  let newNode = createCard(titleValue, linkValue);
  togglePopup(popupElements);
  elementForm.reset();
  elementsArea.prepend(newNode);
});

/*funcion crear tarjeta*/
function createCard(name, link) {
  let newNode = templateNode.content.querySelector(".element").cloneNode(true);
  newNode.querySelector(".element__image").src = link;
  newNode.querySelector(".element__image").alt = `imagen de ${name} `;
  newNode.querySelector(".element__name").textContent = name;
  newNode
    .querySelector(".element__button-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__button-like-active");
    });
  /*funcion borrar tarjeta*/
  newNode
    .querySelector(".element__button-trash")
    .addEventListener("click", function (evt) {
      newNode.remove();
    });
  /*funcion abrir popup image*/
  newNode.querySelector(".element__image").addEventListener("click", () => {
    let popupImage = document.querySelector(".popup-image-fullscreen");
    togglePopup(popupImage);
    /*funcion llamar info al popup*/
    popupImage.querySelector(".popup__image").src = link;
    popupImage.querySelector(".popup__image").alt = `imagen de ${name} `;
    popupImage.querySelector(".popup__title-image").textContent = name;
  });

  return newNode;
}

/* funcion boton cerrar popup image*/
let closeButtonImage = document.querySelector(".popup__button-image");
let popupImage = document.querySelector(".popup-image-fullscreen");
closeButtonImage.addEventListener("click", function () {
  hidePopup(popupImage);
});

/* funcion cerrar todos los popups*/
function removeAllPopups() {
  popupProfile.classList.remove("popup__opened");
  popupElements.classList.remove("popup__opened");
  popupImage.classList.remove("popup__opened");
  elementForm.reset();
}
/* funcion cerrar popup click fuera del contenedor*/

document.querySelectorAll(".popup").forEach((form) => {
  form.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
      removeAllPopups();
    }
  });
});

/* funcion cerrar popup al presinar escape*/

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    removeAllPopups();
  }
});
