import {createElement} from '../utils';
import dayjs from 'dayjs';
export const popUpTemplate = (data) => {
  const {genre, ageRating, originalTitle, cast, producer,description, screenwriters, country, poster,  release, isWatchlist, isFavorites, isWatched, title, rating, duration} = data;
  const releaseDate = dayjs(release).format('d MMMM YYYY');
  const compoundText = (arr) => (
    arr.join(', ')
  );
  const rendorGenres = (genresData) => {
    const res = [];
    for(let i = 0; i < genresData.length; i++) {
      res.push(`<span class="film-details__genre">${genresData[i]}</span>`);
    }
    return res.join(' ');
  };
  const stateBtn = (state) => (
    state ? 'film-details__control-button--active' : ''
  );
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">

          <p class="film-details__age">${ageRating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${producer}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${compoundText(screenwriters)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${compoundText(cast)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${releaseDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                ${rendorGenres(genre)}
            </tr>
          </table>

          <p class="film-details__film-description">
          ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
      <button type="button" class="film-details__control-button film-details__control-button--watchlist ${stateBtn(isWatchlist)}" id="watchlist" name="watchlist">Add to watchlist</button>
      <button type="button" class="film-details__control-button film-details__control-button--watched ${stateBtn(isWatched)}"  id="watched" name="watched">Already watched</button>
      <button type="button" class="film-details__control-button film-details__control-button--favorite ${stateBtn(isFavorites)}"  id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>
    <div class="film-details__bottom-container"></div>
  </form>
</section>`;
};
export default class popUp {
  constructor(dataFilm) {
    this._element = null;
    this._dataFilm = dataFilm;
  }

  getTemplate() {
    return popUpTemplate( this._dataFilm);
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
