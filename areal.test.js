const { areal } = require('./arealAvKvadrat');

test('beregner arealet av kvadratet korrekt', () => {
  expect(areal(6)).toBe(36);
});
