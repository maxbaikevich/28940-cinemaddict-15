
import {getRandomInteger} from '../utils';
import {emotion, humanFirstName, humanLastName, comment} from '../const';
import dayjs from 'dayjs';

const generateDate = () => dayjs().add(getRandomInteger(-200, 0), 'day').format();
const generaterandome = (data) => {
  const randomIndex = getRandomInteger(0, data.length - 1);
  return data[randomIndex];
};
export const generateComment = (id) => ({
  id: id,
  text:generaterandome(comment),
  emoji:generaterandome(emotion),
  name: `${generaterandome(humanFirstName)} ${generaterandome(humanLastName)}`,
  date: generateDate(),
});
