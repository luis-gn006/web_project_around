export default class Card {
  constructor(
    data,
    cardSelector,
    user,
    {
      handleCardClick,
      handleButtonTrash,
      handlePopupDelete,
      handleCardLike,
      handleCardDislike,
    }
  ) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes.length;
    this._user = user;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleButtonTrash = handleButtonTrash;
    this._handlePopupDelete = handlePopupDelete;
    this._handleCardLike = handleCardLike;
    this._handleCardDislike = handleCardDislike;
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

    if (this._data.likes.some((like) => like._id === this._user._id)) {
      this._element
        .querySelector(".element__button-like")
        .classList.add("element__button-like-active");
    } else {
      this._element
        .querySelector(".element__button-like")
        .classList.remove("element__button-like-active");
    }

    if (this._data.likes.length == 0) {
      this._element.querySelector(".element__likes").textContent = [];
      this._element
        .querySelector(".element__button-like")
        .classList.remove("element__button-like-active");
    } else {
      this._element.querySelector(".element__likes").textContent =
        this._data.likes.length;
    }

    this._element.querySelector(
      ".element__image"
    ).alt = `imagen de ${this._name} `;
    //Like button
    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", (evt) => {
        this.handleCardLike(evt);
      });
    //Trash button
    this.handlePopupDelete();
    if (this._handleButtonTrash) {
    } else {
      this._element
        .querySelector(".element__button-trash")
        .classList.add("element__button-trash-hide");
    }
    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", (evt) => {
        this._handlePopupDelete(this._id, () => {
          this._element.remove();
        });
      });
    //Abrir popup image
    this.handleCardClick();
    this.handlePopupDelete();
    return this._element;
  }
  handleCardClick(evt) {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", this._handleCardClick);
  }
  handlePopupDelete(evt) {
    this._element.remove();
  }
  handleCardLike(evt) {
    if (this._data.likes.some((like) => like._id === this._user._id)) {
      this._handleCardDislike(this._id).then((card) => {
        this._data = card;
        evt.target.classList.remove("element__button-like-active");
        if (this._data.likes.length == 0) {
          this._element.querySelector(".element__likes").textContent = [];
        } else {
          this._element.querySelector(".element__likes").textContent =
            this._data.likes.length;
        }
      });
    } else {
      this._handleCardLike(this._id).then((card) => {
        this._data = card;
        evt.target.classList.add("element__button-like-active");
        this._element.querySelector(".element__likes").textContent =
          this._data.likes.length;
      });
    }
  }
}
