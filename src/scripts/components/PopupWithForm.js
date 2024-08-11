import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  close() {
    const form = this.popupSelector.querySelector(".popup__form");
    super.close();
    form.reset();
  }
  _getInputValues() {
    const inputValues = {};
    const form = this.popupSelector.querySelector(".popup__form");
    Array.from(form.querySelectorAll(".popup__form-input")).forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
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
