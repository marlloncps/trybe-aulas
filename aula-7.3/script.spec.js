const sum = require("./script");

test("Soma de dois valores", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Arredondamento", () => {
  expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});
