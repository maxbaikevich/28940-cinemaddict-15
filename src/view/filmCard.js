import dayjs from 'dayjs';
export const cardFilmTemplate = (dataFilm) => {
  console.log('dataFilm',dataFilm)
  //eslint-disable-next-line
  const {genre, poster, comments, release, isWatchlist, isFavorites, isWatched, title, rating, duration} = dataFilm;
  const filmYearDate = dayjs(release).format('YYYY')
  const stateBtn = (state) => {
    return state ? 'film-card__controls-item--active' : ''
  }
  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${filmYearDate}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genre[0]}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${stateBtn(isWatchlist)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${stateBtn(isWatched)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${stateBtn(isFavorites)}" type="button">Mark as favorite</button>
    </div>
  </article>
  `
}