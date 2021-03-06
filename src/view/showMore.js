import {createElement} from '../utils';
const btnShowMoreTemplate = () => (
  '<button class="films-list__show-more">Show more</button>'
);
export default class btnShowMore {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return btnShowMoreTemplate();
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
