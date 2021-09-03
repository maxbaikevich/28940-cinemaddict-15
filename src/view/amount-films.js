import {createElement} from '../utils';
export const amountFilmsTemplate = (data) => (
  `<p>${data} movies inside</p>`
);
export default class amountFilms {
  constructor(amountFilmsLength) {
    this._element = null;
    this._amountFilmsLength = amountFilmsLength;
  }

  getTemplate() {
    return amountFilmsTemplate(this._amountFilmsLength);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
