import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.setEventListeners();
  }
  open(handleDeleteSubmit) {
    super.open();
    this._handleDeleteSubmit = handleDeleteSubmit;
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
        this._handleDeleteSubmit();
      });
  }
}
