const sortArraybyParity = require('./sort')

test('sortArraybyParity functino is defined', () => {
  expect(typeof sortArraybyParity).toEqual('function');
});

test('Sort all even number followed by odd number', () => {
  const newArray = sortArraybyParity([1, 2, 3, 4])
  const indexOfOne = newArray.indexOf(1);
  const indexOfTwo = newArray.indexOf(2);
  const indexOfThree = newArray.indexOf(3);
  const indexOfFour = newArray.indexOf(4);
  expect(indexOfTwo).toBeLessThan(indexOfOne);
  expect(indexOfFour).toBeLessThan(indexOfOne);
  expect(indexOfTwo).toBeLessThan(indexOfThree);
  expect(indexOfFour).toBeLessThan(indexOfThree);
})
