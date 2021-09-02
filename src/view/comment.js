import {createElement} from '../utils';
import dayjs from 'dayjs';
export const commentTemplate = (comment, dataComments) => {
  const {date,emoji, name, text} =  dataComments.find((item) => item.id === comment);
  const commentDay = () => {
    const comDay = dayjs(date).format('YYYY/M/D h:mm');
    if(date === new Date) {
      return 'today';
    }
    return comDay;
  };
  return`<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">
    </span>
    <div>
      <p class="film-details__comment-text">${text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${name}</span>
        <span class="film-details__comment-day">${commentDay()}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
};
export default class Comment{
  constructor(comment, dataComments) {
    this._element = null;
    this._comment = comment;
    this._dataComments = dataComments;
  }

  getTemplate() {
    return commentTemplate(this._comment, this._dataComments);
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
