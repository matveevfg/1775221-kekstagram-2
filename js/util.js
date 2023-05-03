import {nameArr, commentMessage, commentDescription, createComment, photoDescription} from './data.js';

function getCommSize (comm, maxSize) {
  if (comm <= maxSize) {
    return true;
  }
  return false;
}

function getRandom (min, max) {
  return Math.random()*(max-min)+min;
}

function getRandomUniq(min, max){
  const numReserve = [];
  while (numReserve.length < max) {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    let found = false;
    for (let i = 0; i < numReserve.length; i++) {
      if (numReserve[i] === randomNumber){
        found = true;
        break;
      }
    }
    if (!found) { numReserve[numReserve.length]=randomNumber; }
  }
}

function getStringFromArr (Arr) {
  const i = getRandom(0,Arr.length);
  return(Arr[i]);
}

function getNewPhoto (size) {
  return Array.from({lenght: size,photoDescription});
}

export {getCommSize};
export {getRandom};
export {getRandomUniq};
export {getStringFromArr};
export {getNewPhoto};
