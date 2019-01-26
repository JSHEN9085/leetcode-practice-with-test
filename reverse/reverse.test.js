const reverseArray = require('./reverse');

test('function reverse is defined', () => {
  expect(typeof reverseArray).toEqual('function')
})

test('["a", "b", "c"] is reversed', () => {
  expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"])
})

test('[1, 2, 3, 4] is reversed', () => {
  expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1])
})
