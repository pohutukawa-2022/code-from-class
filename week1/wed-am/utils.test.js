const utils = require('./utils');

test('calculate total should return the correct sum', () => {
  // ARRANGE
  const invoices = [
    { item: 'apple', amount: 2 },
    { item: 'banana', amount: 2 },
  ];

  //ACT
  const sum = utils.calculateTotal(invoices);

  // ASSERT
  expect(sum).toBe(4);
});

test('given 7 it should return $7.00', () => {
  // ARRANGE
  const amount = 7;

  // ACT
  const formattedAmount = utils.formatAmount(amount);

  // ASSERT
  expect(formattedAmount).toBe('$7.00');
});
