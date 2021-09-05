import {createElement} from '../utils';
const listTitle = () => (
  `
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  `
);
export default class ListTitle {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return listTitle();
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
