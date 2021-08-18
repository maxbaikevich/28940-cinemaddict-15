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
  }
export {getRandomInteger,randomNumberFloat}