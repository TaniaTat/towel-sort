
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (!matrix) return resultArr;
  matrix.forEach(makeNewArray);
  return resultArr;
  function makeNewArray(arrValue, i) {
      if (i % 2 > 0) arrValue.reverse();
      arrValue.forEach((value) => {resultArr.push(value)});
  }
}
