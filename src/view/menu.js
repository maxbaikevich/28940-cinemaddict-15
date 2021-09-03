import {createElement} from '../utils';
const menuTemplate = (data) => {
  const excretion = (mod) => {
    let count = 0;
    data.forEach((el) => {
      if(el[mod]) {
        count ++;
      }
    });
    return count;
  };
  const history = () => {
    const res = [];
    data.forEach((el) => {
      if(el.watchingDate) {
        res.push(el.watchingDate);
      }
    });
    return res.length;
  };
  return`<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${excretion('isWatchlist')}</span></a>
      <a href="#history" class="main-navigation__item main-navigation__item--active">History <span class="main-navigation__item-count">${history(data)}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${excretion('isFavorites')}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

export default class Menu {
  constructor(menu) {
    this._menu = menu;
    this._element = null;
  }

  getTemplate() {
    return menuTemplate(this._menu);
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
