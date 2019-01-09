const functions = require('./functions')

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//if want to result as Object or Array should use toEqual
test('User should be an object', () => {
  expect(functions.createUser()).toEqual({firstName: 'Jun' , lastName: 'Shen'});
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600)
})

test('There is no I in Team', () => {
  expect('teami').not.toMatch(/I/);
})

test('Admin should be in usernames', () => {
  usernames = ['join', 'karen', 'admin'];
  expect(usernames).toContain('admin')
})

test('user fetched name should be leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Leanne Graham')
  })
})
