// remover esta funcion con import
function togglePopup(form) {
  form.classList.toggle("popup__opened");
}

class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__name").textContent = this._name;
    this._element.querySelector(
      ".element__image"
    ).alt = `imagen de ${this._name} `;
    // like button
    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__button-like-active");
      });
    // trash button
    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", function (evt) {
        evt.target.parentNode.parentNode.remove();
      });

    // abrir popup image
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        let popupImage = document.querySelector(".popup-image-fullscreen");
        togglePopup(popupImage);
        /*funcion llamar info al popup*/
        popupImage.querySelector(".popup__image").src = this._link;
        popupImage.querySelector(".popup__title-image").textContent =
          this._name;
        popupImage.querySelector(
          ".popup__image"
        ).alt = `imagen de ${this._name} `;
      });
    return this._element;
  }
}
