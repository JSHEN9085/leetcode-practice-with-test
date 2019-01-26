// Reverse an array without using the reverse method, without
// using a second array, and without duplicating any of the values.
// input: ['a', 'b', 'c', 'd', 'e'];
// output: ['e', 'd', 'c', 'b', 'a']

function reverseArray(arr) {
  for(let i = 0, j = arr.length-1; i < j; i++, j--){
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
  }
  return arr
}

module.exports = reverseArray
