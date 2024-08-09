export default class Card {
  constructor(data, cardSelector, { handleCardClick }) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", function (evt) {
        evt.target.parentNode.parentNode.remove();
      });
    //Abrir popup image
    this.handleCardClick();
    return this._element;
  }
  handleCardClick() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", this._handleCardClick);
  }
}
