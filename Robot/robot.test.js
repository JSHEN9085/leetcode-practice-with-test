const RobotMove = require('./robot');

test('RobotMove function is defined', () => {
  expect(typeof RobotMove).toEqual('function');
});

test('for moves UDLR is true', () => {
  expect(RobotMove('UDLR')).toBe(true)
})

test('for moves UUURRL is false', () => {
  expect(RobotMove('UUURRL')).toBe(false)
})
