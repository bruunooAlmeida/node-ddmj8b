const variacoes = require('./index');

test('Variações', () => {
  expect(variacoes(4, [1, 2])).toBe(3);
  expect(variacoes(10, [5, 2, 3])).toBe(4);
  expect(variacoes(11, [5, 7])).toBe(0);
});
