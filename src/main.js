// import {userStatusTemplate} from './view/userStatus';
import UserStatusView from './view/userStatus';
import CardFilmView from './view/filmCard';
import MenuView from './view/menu';
import SortView  from './view/sort';
import FilmListView from './view/filmList';
import FilmsBoardView from './view/films';
import popUpView from './view/popUp';
import btnShowMoreView from './view/showMore';
import filmListExtraView from './view/film-list-extra-rated';
import filmListExtraCommentedView from './view/film-list-extra-commented';
import amountFilmsView from './view/amount-films';
import CommentListView from './view/comment-list';
import CommentView from './view/comment';
import CreatenewCommentView from './view/create-new-comment';
import {generateFilm} from './mock/film';
import {generateComment} from './mock/comment';
import {renderElement, RenderPosition} from './utils';
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
const renderCardFilm = (filmListElement, data) => {
  const filmCardComponent  = new CardFilmView(data);
  const popUpComponent = new popUpView(data);
  const commentListComponent = new CommentListView(data.comments.length);
  const bodyPage = document.querySelector('body');
  const  renderPopUp = (dataComent) => {
    bodyPage.appendChild(popUpComponent.getElement());
    bodyPage.classList.add('hide-overflow');
    const filmDetails = document.querySelector('.film-details');
    const filmDetailsBottomContainer = filmDetails.querySelector('.film-details__bottom-container');
    renderElement(filmDetailsBottomContainer, commentListComponent.getElement(), RenderPosition.BEFOREEND);
    const comment = filmDetailsBottomContainer.querySelector('.film-details__comments-list');
    for(let i = 0; i < dataComent.comments.length; i++) {
      renderElement(comment, new CommentView(dataComent.comments[i], dataComments).getElement(), RenderPosition.BEFOREEND);
    }
    const createComment = filmDetailsBottomContainer.querySelector('.film-details__comments-wrap');
    renderElement(createComment, new CreatenewCommentView().getElement(), RenderPosition.BEFOREEND);
  };
  filmCardComponent.getElement().querySelector('.film-card__poster').addEventListener('click', ()=> {
    renderPopUp(data);
  });
  filmCardComponent.getElement().querySelector('.film-card__title').addEventListener('click', ()=> {
    renderPopUp(data);
  });
  filmCardComponent.getElement().querySelector( '.film-card__comments').addEventListener('click', ()=> {
    renderPopUp(data);
  });
  popUpComponent.getElement().querySelector('.film-details__close-btn').addEventListener('click', ()=> {
    document.querySelector('.film-details__bottom-container').removeChild(commentListComponent.getElement());
    commentListComponent.removeElement();
    bodyPage.removeChild(popUpComponent.getElement());
    bodyPage.classList.remove('hide-overflow');
  });
  renderElement(filmListElement, filmCardComponent.getElement(), RenderPosition.BEFOREEND);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
renderElement(headerElement, new UserStatusView().getElement(), RenderPosition.BEFOREEND);
renderElement(mainElement, new MenuView(dataFilms).getElement(), RenderPosition.BEFOREEND);
renderElement(mainElement, new SortView().getElement(), RenderPosition.BEFOREEND);
const filmsBoardComponent = new FilmsBoardView();
renderElement(mainElement, filmsBoardComponent.getElement(), RenderPosition.BEFOREEND);
// const filmsElement = mainElement.querySelector('.films');
const filmListComponent = new FilmListView();
renderElement(filmsBoardComponent.getElement(), filmListComponent.getElement(), RenderPosition.BEFOREEND);
const filmsListContainer = document.querySelector('.films-list__container');
for(let i = 0; i < Math.min(dataFilms.length, FILM_COUNT_PER_STEP); i++) {
  renderCardFilm(filmsListContainer, dataFilms[i]);
}
if(dataFilms.length > FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FILM_COUNT_PER_STEP;
  const btnShowMoreComponent = new btnShowMoreView();
  renderElement(filmsBoardComponent.getElement(), btnShowMoreComponent.getElement(), RenderPosition.BEFOREEND);
  btnShowMoreComponent.getElement().addEventListener('click', (evt)=> {
    evt.preventDefault();
    dataFilms
      .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film)=>renderCardFilm(filmsListContainer, film));
    renderedFilmCount+= FILM_COUNT_PER_STEP;
    if(renderedFilmCount >= dataFilms.length) {
      btnShowMoreComponent.getElement().remove();
      btnShowMoreComponent.removeElement();
    }
  });
}
renderElement(filmsBoardComponent.getElement(), new filmListExtraView().getElement(), RenderPosition.BEFOREEND);
renderElement(filmsBoardComponent.getElement(), new filmListExtraCommentedView().getElement(), RenderPosition.BEFOREEND);
const filmListExtraRatedBlock = document.querySelectorAll('.films-list--extra');
for(const element of filmListExtraRatedBlock) {
  const extraContainer = element.querySelector('.films-list__container');
  for(let i = 0; i < 2; i++) {
    renderCardFilm(extraContainer, dataFilms[i]);
  }
}
const footer = document.querySelector('.footer');
const fotterStatistic = footer.querySelector('.footer__statistics');
renderElement(fotterStatistic, new amountFilmsView(dataFilms.length).getElement(),  RenderPosition.BEFOREEND);
