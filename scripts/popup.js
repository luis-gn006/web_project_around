let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__button-edit");
let closeButton = document.querySelector(".popup__close-button");

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let nameForm = document.querySelector(".popup__form-name");
let jobForm = document.querySelector(".popup__form-job");

/* Funcion visulacion popup */
function editButtonClick() {
  popup.classList.toggle("popup__opened");
}
editButton.addEventListener("click", editButtonClick);
closeButton.addEventListener("click", editButtonClick);

/* Llamar info del perfil*/
function callProfileInfo() {
  nameForm.value = profileName.textContent;
  jobForm.value = profileJob.textContent;
}

editButton.addEventListener("click", callProfileInfo);

// Busquemos el formulario en el DOM
let ElementForm = document.querySelector(".popup__form");
let savePopupButton = document.querySelector(".popup__form-button");
// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador
  // entregue el formulario en su forma predeterminada.
  evt.preventDefault();
  // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
  // Lo explicaremos todo con más detalle después.

  // Busquemos los campos del formulario en el DOM

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente

  // Selecciona los elementos donde se introducirán los valores de los campos

  profileName.textContent = nameForm.value;
  profileJob.textContent = jobForm.value;
  // propiedad del método querySelector()
}

savePopupButton.addEventListener("click", handleProfileFormSubmit);
// se observará el evento de entrega
ElementForm.addEventListener("submit", handleProfileFormSubmit);
