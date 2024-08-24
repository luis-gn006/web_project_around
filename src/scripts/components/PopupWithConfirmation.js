import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this.setEventListeners();
  }
  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this.popupSelector
      .querySelector(".popup__form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        this._handleSubmit();
        this.close();
      });
  }
}
