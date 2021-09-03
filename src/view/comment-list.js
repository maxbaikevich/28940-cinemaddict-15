import {createElement} from '../utils';
export const CommentListTimplate = (data) => (
  `<section class="film-details__comments-wrap">
    <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${data}</span></h3>
    <ul class="film-details__comments-list">
    </ul>
  </section>`
);
export default class CommentList {
  constructor(commentCount) {
    this._element = null;
    this._commentCount = commentCount;
  }

  getTemplate() {
    return CommentListTimplate(this._commentCount);
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
