import {userStatusTemplate} from './view/userStatus';
import {cardFilmTemplate} from './view/filmCard';
import {menuTemplate} from './view/menu';
import { sortTemplate } from './view/sort';
import {filmListTemplate} from './view/filmList';
import {filmsSection} from './view/films';
import {popUpTemplate} from './view/popUp';
import {btnShowMoreTemplate} from './view/showMore';
import {filmListExtraRated} from './view/film-list-extra-rated';
import {filmListExtraCommented} from './view/film-list-extra-commented';
import {amountFilmsTempla} from './view/amount-films';
import {CommentListTimplate} from './view/comment-list';
import {commentTemplate} from './view/comment';
import {createnewCommentTemplate} from './view/create-new-comment';
import {generateFilm} from './mock/film';
import {generateComment} from './mock/comment';
const DATA_FILM_COUNTER = 20;
const FILM_COUNT_PER_STEP = 5;
const dataFilms = new Array(DATA_FILM_COUNTER).fill().map(generateFilm);
const dateGenerationComment = () => {
  const arr = [];
  dataFilms.forEach((el)=> {
    el.comments.forEach((id)=> {
      arr.push(generateComment(id));
    });
  });
  return arr;
};
const dataComments = dateGenerationComment();
const renderСomponents = (container, template, where) => {
  container.insertAdjacentHTML(where, template);
};
const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
renderСomponents(headerElement, userStatusTemplate(dataFilms), 'beforeend');
renderСomponents(mainElement, menuTemplate(dataFilms), 'beforeend');
renderСomponents(mainElement, sortTemplate(), 'beforeend');
renderСomponents(mainElement, filmsSection(), 'beforeend');
const filmsElement = mainElement.querySelector('.films');
renderСomponents(filmsElement, filmListTemplate(), 'beforeend');
const filmsListContainer = filmsElement.querySelector('.films-list__container');
for(let i = 0; i < Math.min(dataFilms.length, FILM_COUNT_PER_STEP); i++) {
  renderСomponents(filmsListContainer, cardFilmTemplate(dataFilms[i]), 'beforeend');
}
if(dataFilms.length > FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FILM_COUNT_PER_STEP;
  renderСomponents(filmsElement, btnShowMoreTemplate(), 'beforeend');
  const btnShow = filmsElement.querySelector('.films-list__show-more');
  btnShow.addEventListener('click', (evt)=> {
    evt.preventDefault();
    dataFilms
      .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film)=>renderСomponents(filmsListContainer,  cardFilmTemplate(film), 'beforeend'));
    renderedFilmCount+= FILM_COUNT_PER_STEP;
    if(renderedFilmCount >= dataFilms.length) {
      btnShow.remove();
    }
  });
}
renderСomponents(filmsElement, filmListExtraRated(), 'beforeend');
renderСomponents(filmsElement, filmListExtraCommented(), 'beforeend');
const filmListExtraRatedBlock = filmsElement.querySelectorAll('.films-list--extra');
for(const element of filmListExtraRatedBlock) {
  const extraContainer = element.querySelector('.films-list__container');
  for(let i = 0; i < 2; i++) {
    renderСomponents(extraContainer, cardFilmTemplate(dataFilms[i]), 'beforeend');
  }
}
const footer = document.querySelector('.footer');
const fotterStatistic = footer.querySelector('.footer__statistics');
renderСomponents(fotterStatistic, amountFilmsTempla(dataFilms.length), 'beforeend');
const bodyPage = document.querySelector('body');
renderСomponents(bodyPage, popUpTemplate(dataFilms[0]), 'beforeend');
const filmDetails = document.querySelector('.film-details');
const filmDetailsBottomContainer = filmDetails.querySelector('.film-details__bottom-container');
renderСomponents(filmDetailsBottomContainer, CommentListTimplate(dataFilms[0].comments.length), 'beforeend');
const comment = filmDetailsBottomContainer.querySelector('.film-details__comments-list');
for(let i = 0; i < dataFilms[0].comments.length; i++) {
  renderСomponents(comment, commentTemplate(dataFilms[0].comments[i], dataComments), 'beforeend');
}

const createComment = filmDetailsBottomContainer.querySelector('.film-details__comments-wrap');
renderСomponents(createComment, createnewCommentTemplate(), 'beforeend');
