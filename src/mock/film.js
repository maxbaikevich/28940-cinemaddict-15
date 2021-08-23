import {getRandomInteger, randomNumberFloat} from '../utils';
import {posters, title, description, genre, country, humanFirstName, humanLastName} from '../const';
import dayjs from 'dayjs';
const AMOUNT_COMMENTS = 4;
const COMMENTS_COUNT_ID_RONDOM_MIN = 500;
const COMMENTS_COUNT_ID_RONDOM_MAX = 1000;
const generaterandome = (data) => {
  const randomIndex = getRandomInteger(0, data.length - 1);
  return data[randomIndex];
};
const commentsGenerateId = () => {
  const res = [];
  const commentsIdCount = getRandomInteger(0,AMOUNT_COMMENTS);
  for(let i = 0; i < commentsIdCount; i++) {
    res.push(getRandomInteger(COMMENTS_COUNT_ID_RONDOM_MIN, COMMENTS_COUNT_ID_RONDOM_MAX));
  }
  return res;
};
const generateDescription = () => {
  const res = [];
  const descriptionText = description.split('.');
  const randomIndex = getRandomInteger(1, 5);
  for(let i = 0 ; i <= randomIndex; i++) {
    res.push(descriptionText[i]);
  }
  return res.join('.');
};
const generateGenre = () => {
  const res = [];
  let current = '';
  const random = getRandomInteger(0, 3);
  for(let i  = 0; i <= random; i++){
    current = genre[i];
    if (!res.includes(current)) {
      res.push(current);
    }
  }
  return res;
};
const generateHuman = () => {
  const res = [];
  const random = getRandomInteger(3, 8);
  for(let i = 0; i <= random; i++) {
    res.push(`${humanFirstName[i]} ${humanLastName[i]}`);
  }
  return res;
};
const getRandomDuration = () => `${getRandomInteger(1, 2)}h ${getRandomInteger(0, 59)}m`;
const generateDate = () => dayjs().add(getRandomInteger(-360, 0), 'day').format();
export const generateFilm = () => {
  const isWatched = Boolean(getRandomInteger(0, 1));
  const watchingDate = (isWatched)? generateDate() : '';
  return{
    poster:generaterandome(posters),
    title: generaterandome(title),
    rating: randomNumberFloat(0, 10, 1),
    genre:  generateGenre(),
    description: generateDescription(),
    duration: getRandomDuration(),
    comments:commentsGenerateId(),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatched,
    watchingDate,
    isFavorites: Boolean(getRandomInteger(0, 1)),
    originalTitle: generaterandome(title),
    producer:`${generaterandome(humanFirstName)} ${generaterandome(humanLastName)}`,
    screenwriters:generateHuman(),
    cast: generateHuman(),
    release: dayjs().add(getRandomInteger(-50, 0), 'year').format(),
    country:generaterandome(country),
    ageRating:getRandomInteger(0, 18),
  };
};
