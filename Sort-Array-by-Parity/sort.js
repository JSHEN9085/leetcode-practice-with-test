//Given an array A of non-negative integers, return an array consisting
//of the even elements of A, followed by all the odd elements of A
//Input : [1,2,4,3];
//output : [2,4,1,3];
//the order of even and odd number doesn't matter;

function sortArraybyParity(array) {
  let newArray = [];
  for (const num of array) {
    if (num % 2 === 0) {
      newArray.unshift(num);
    } else {
      newArray.push(num);
    }
  }
  return newArray;
}

module.exports = sortArraybyParity;
