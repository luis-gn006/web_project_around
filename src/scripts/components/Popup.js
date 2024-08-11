export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this._popupCloseButton = this.popupSelector.querySelector(
      ".popup__close-button"
    );
    this._handleEscClose = this._handleEscClose.bind(this);
    this.setEventListeners();
  }
  open() {
    this.popupSelector.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this.popupSelector.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this.popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
