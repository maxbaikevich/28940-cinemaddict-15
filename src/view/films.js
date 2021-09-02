import {createElement} from '../utils';
const filmsSection = () => (
  `<section class="films"></section>
  `
);
export default class FilmsBoard {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return filmsSection();
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
