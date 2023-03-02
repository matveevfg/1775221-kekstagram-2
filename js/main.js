function maxComLength(comment, maxLength) {
  if (comment.length <= maxLength){
    return true;
  }
  return false;
}

function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

maxComLength('sadasdasd', 15);
getRandom(1, 9);
