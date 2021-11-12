const sum = (a, b) => a + b;

module.exports = { sum, summationOf };

function summationOf(value) {
  let total = 0;
  for (let i = 1; i <= value; i++) {
    total = total + i;
  }
  return total;
}
