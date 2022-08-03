// A function that calculates and returns the sum of all amounts
// eg [{ item: 'apple', amount: 5}, { item: 'banana', amount: 2}] should return 7
function calculateTotal(invoices) {
  return invoices
    .map((invoice) => invoice.amount)
    .reduce((sum, amount) => sum + amount, 0);
}

// A function that takes an amount and concatenates '$' and formats the number with 2 decimal places
// eg given 7 it should return '$7.00'
function formatAmount(amount) {
  return `$${amount.toFixed(2)}`;
}

module.exports = {
  calculateTotal,
  formatAmount,
};
