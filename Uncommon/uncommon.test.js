const uncommon = require('./uncommon')

test('uncommon function is defined', () => {
  expect(typeof uncommon).toEqual('function');
});

test('"this apple is sweet" and "this apple is sour" will output ["sweet", "sour"]', () => {
  const result = uncommon("this apple is sweet", "this apple is sour");
  expect(result).toContain("sweet")
})

test('"this apple is sweet" and "this apple is sour" will output ["sweet", "sour"]', () => {
  const result = uncommon("this apple is sweet", "this apple is sour");
  expect(result).toContain("sour")
})

test('"apple apple" and "banana" will output ["banana"]', () => {
  expect(uncommon("apple apple", "banana")).toEqual(["banana"])
})
