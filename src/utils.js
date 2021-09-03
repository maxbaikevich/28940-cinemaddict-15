// const renderСomponents = (container, template, where) => {
//   container.insertAdjacentHTML(where, template);
// };
export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};
export const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};
export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
export const createElement = (template) => {
  const newElement = document.createElement('div'); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstChild; // 3
};
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const randomNumberFloat = (min, max, quantity) =>{
  if(max < 0 || min >= max) {
    return;
  }
  if(min < 0) {
    min = 0;
  }
  const number = Math.random() * (max - min + 1) + min;
  return number.toFixed(quantity);
};
export {getRandomInteger,randomNumberFloat};
