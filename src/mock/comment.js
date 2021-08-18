
import {getRandomInteger} from '../utils'
import {emotion, humanFirstName, humanLastName, comment} from '../const'
import dayjs from 'dayjs';

const generateDate = () => dayjs().add(getRandomInteger(-200, 0), 'day').format();
const generaterandome = (data) => {
    const randomIndex = getRandomInteger(0, data.length - 1);
    return data[randomIndex];
  }

export const generateComment = () => {
    
  return{
    id: 1,
    text:generaterandome(comment),
    emoji:generaterandome(emotion),
    name: `${generaterandome(humanFirstName)} ${generaterandome(humanLastName)}`,
    date: generateDate(),
  }
}
// Текст комментария;
// Эмоция;
// Автор комментария;
// Дата комментария;
// Кнопка удаления.
console.log(generateComment())