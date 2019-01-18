// We are given two sentences A and B.  (A sentence is a string of space
// separated words.  Each word consists only of lowercase letters.)
//
// A word is uncommon if it appears exactly once in one of the sentences,
// and does not appear in the other sentence.
//
// Return a list of all uncommon words.
//
// You may return the list in any order.

function uncommon(A, B) {
  let unique = [];
  const totalString = A + ' ' + B;
  const combined = totalString.split(' ').sort();

  for (let i = 0; i < combined.length; i++){
    if (combined[i] !== combined[i - 1] && combined[i] !== combined[i + 1]){
      unique.push(combined[i]);
    }
  }
  return unique;
}

module.exports = uncommon;
