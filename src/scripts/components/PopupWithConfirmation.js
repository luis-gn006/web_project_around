import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }
  close() {
    const form = this.popupSelector.querySelector(".popup__form");
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    const form = this.popupSelector.querySelector(".popup__form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.close();
    });
  }
}