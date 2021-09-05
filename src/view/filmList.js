import {createElement} from '../utils';
export const filmListTemplate = () => (
  `<section class="films-list">
    <div class="films-list__container"></div>
  </section>`
);

export default class FilmList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return filmListTemplate();
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
