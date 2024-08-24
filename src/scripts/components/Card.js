export default class Card {
  constructor(
    data,
    cardSelector,
    { handleCardClick },
    { handleButtonTrash },
    { handlePopupDelete }
  ) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes.length;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleButtonTrash = handleButtonTrash;
    this._handlePopupDelete = handlePopupDelete;
  }
  //Copiar template
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  //Generar Tarjeta
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__name").textContent = this._name;
    if (this._likes == "0") {
      this._element.querySelector(".element__likes").textContent = "";
    } else {
      this._element.querySelector(".element__likes").textContent = this._likes;
    }
    this._element.querySelector(
      ".element__image"
    ).alt = `imagen de ${this._name} `;
    //Like button
    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__button-like-active");
      });
    //Trash button
    this.handlePopupDelete();
    if (this._handleButtonTrash) {
    } else {
      this._element
        .querySelector(".element__button-trash")
        .classList.add("element__button-trash-hide");
    }
    //Abrir popup image
    this.handleCardClick();
    this.handlePopupDelete();
    return this._element;
  }
  handleCardClick() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", this._handleCardClick);
  }
  handlePopupDelete() {
    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", this._handlePopupDelete);
  }
}
