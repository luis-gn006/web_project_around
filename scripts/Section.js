import { Card } from "./Card.js";
export class Section {
  constructor({ items, renderer }, containerSelector) {
    this.renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  renderer() {
    this.renderedItems.forEach((item) => {
      const card = new Card(item, ".element__template");
      const cardElement = card.generateCard();
      this.addItem(cardElement);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
