import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this.popupSelector.querySelector(".popup__image");
    this._popupTitle = this.popupSelector.querySelector(".popup__title-image");
  }
  open(link, name) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = `imagen de ${name} `;
    this._popupTitle.textContent = name;
  }
}
