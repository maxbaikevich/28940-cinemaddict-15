import {getRandomInteger, randomNumberFloat} from '../utils'
import {generateComment} from './comment'
import {posters, title, description, genre, country, humanFirstName, humanLastName} from '../const'
import dayjs from 'dayjs';
const AMOUNT_COMMENTS = 4

const generaterandome = (data) => {
  const randomIndex = getRandomInteger(0, data.length - 1);
  return data[randomIndex];
}


const generateDescription = () => {
  let res = [];
  const descriptionText = description.split('.')
  const randomIndex = getRandomInteger(1, 5);
  for(let i = 0 ; i <= randomIndex; i++) {
    res.push(descriptionText[i])
  }
  return res.join('.')
}

const generateComments = () => {
    const commentsCount = getRandomInteger(0,AMOUNT_COMMENTS);
    const comments = new Array(commentsCount).fill().map(generateComment);
    let idCounter = 1;
    comments.forEach((comment) => comment.id=`${idCounter++}`);
    return comments;
  };
const generateGenre = () => {
  let res = [];
  let current = '';
  const random = getRandomInteger(0, 3);
  for(let i  = 0; i <= random; i++){
    current = genre[i]
    if (!res.includes(current)) {
      res.push(current);
    }
  }
  return res
}
const generateHuman = () => {
    let res = []
   const random = getRandomInteger(3, 8)
   console.log(random)
   for(let i = 0; i <= random; i++) {
        res.push(`${humanFirstName[i]} ${humanLastName[i]}`)
   }
   return res
}


const getRandomDuration = () => `${getRandomInteger(1, 2)}h ${getRandomInteger(0, 59)}m`;
const generateDate = () => dayjs().add(getRandomInteger(-360, 0), 'day').format();
console.log(generateDate())

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
    comments:generateComments(),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatched,
    watchingDate,
    isFavorites: Boolean(getRandomInteger(0, 1)),
    original_title: generaterandome(title),
    producer:`${generaterandome(humanFirstName)} ${generaterandome(humanLastName)}`,
    screenwriters:generateHuman(),
    cast: generateHuman(),
    release: dayjs().add(getRandomInteger(-50, 0), 'year').format(),
    country:generaterandome(country),
    age_rating:getRandomInteger(0, 18),
  }
}

