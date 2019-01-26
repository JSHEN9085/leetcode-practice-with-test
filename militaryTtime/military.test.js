const mulitaryTime = require('./military')

test('mulitaryTime functino is defined', () => {
  expect(typeof mulitaryTime).toEqual('function');
});

test('"9:00 PM" will be 2100', () => {
  expect(mulitaryTime('9:00 PM')).toEqual('2100');
});

test('"9:00 AM" will be 0900', () => {
  expect(mulitaryTime('9:00 AM')).toEqual('0900');
});
