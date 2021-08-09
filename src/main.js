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

const renderСomponents = (container, template, where) => {
  container.insertAdjacentHTML(where, template);
};
const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
renderСomponents(headerElement, userStatusTemplate(), 'beforeend');
renderСomponents(mainElement, menuTemplate(), 'beforeend');
renderСomponents(mainElement, sortTemplate(), 'beforeend');
renderСomponents(mainElement, filmsSection(), 'beforeend');
const filmsElement = mainElement.querySelector('.films');
renderСomponents(filmsElement, filmListTemplate(), 'beforeend');
const filmsListContainer = filmsElement.querySelector('.films-list__container');
for(let i = 0; i < 5; i++) {
  renderСomponents(filmsListContainer, cardFilmTemplate(), 'beforeend');
}

renderСomponents(filmsElement, btnShowMoreTemplate(), 'beforeend');
renderСomponents(filmsElement, filmListExtraRated(), 'beforeend');
renderСomponents(filmsElement, filmListExtraCommented(), 'beforeend');
const filmListExtraRatedBlock = filmsElement.querySelectorAll('.films-list--extra');
for(const element of filmListExtraRatedBlock) {
  const extraContainer = element.querySelector('.films-list__container');
  for(let i = 0; i < 2; i++) {
    renderСomponents(extraContainer, cardFilmTemplate(), 'beforeend');
  }
}
const footer = document.querySelector('.footer');
const fotterStatistic = footer.querySelector('.footer__statistics');
renderСomponents(fotterStatistic, amountFilmsTempla(), 'beforeend');
const bodyPage = document.querySelector('body');
renderСomponents(bodyPage, popUpTemplate(), 'beforeend');
const filmDetails = document.querySelector('.film-details');
const filmDetailsBottomContainer = filmDetails.querySelector('.film-details__bottom-container');
renderСomponents(filmDetailsBottomContainer, CommentListTimplate(), 'beforeend');
const comment = filmDetailsBottomContainer.querySelector('.film-details__comments-list');
renderСomponents(comment, commentTemplate(), 'beforeend');
const createComment = filmDetailsBottomContainer.querySelector('.film-details__comments-wrap');
renderСomponents(createComment, createnewCommentTemplate(), 'beforeend');


