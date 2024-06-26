let popupProfile = document.querySelector(".popup__profile");
let editButton = document.querySelector(".profile__button-edit");
let popupElements = document.querySelector(".popup__elements");
let addButton = document.querySelector(".profile__button-add");
let closeButtonProfile = popupProfile.querySelector(".popup__close-button");
let closeButtonElements = popupElements.querySelector(".popup__close-button");

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let nameForm = document.querySelector(".popup__form-name");
let jobForm = document.querySelector(".popup__form-job");

let elementsArea = document.querySelector(".elements");
let templateNode = document.querySelector(".element__template");

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

/* Funcion visulacion popup profile*/
function editButtonClick() {
  popupProfile.classList.toggle("popup__opened");
}
editButton.addEventListener("click", editButtonClick);
closeButtonProfile.addEventListener("click", editButtonClick);

/* Funcion visulacion popup elements*/
function addButtonClick() {
  popupElements.classList.toggle("popup__opened");
}
addButton.addEventListener("click", addButtonClick);
closeButtonElements.addEventListener("click", addButtonClick);

/* Llamar info del perfil*/
function callProfileInfo() {
  nameForm.value = profileName.textContent;
  jobForm.value = profileJob.textContent;
}

editButton.addEventListener("click", callProfileInfo);

let elementForm = document.querySelector(".popup__form");
let savePopupButton = document.querySelector(".popup__form-button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  popupProfile.classList.toggle("popup__opened");
}

savePopupButton.addEventListener("click", handleProfileFormSubmit);

/* Funcion cargar imagenes de inicio*/
initialCards.forEach(function (item) {
  const newNode = templateNode.content
    .querySelector(".element")
    .cloneNode(true);
  newNode.querySelector(".element__image").src = item.link;
  newNode.querySelector(".element__image").alt = `imagen de ${item.name} `;
  newNode.querySelector(".element__name").textContent = item.name;
  elementsArea.append(newNode);
});
