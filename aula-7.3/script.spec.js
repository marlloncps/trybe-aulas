const { sum, summationOf } = require("./script");

test("Soma de dois valores", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Arredondamento", () => {
  expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});

// TDD

test("Verificar se a função summationOf existe.", () => {
  expect(typeof summationOf).toBe("function");
});

test("Verificar se a função summationOf retorna 1 para o parametro 1.", () => {
  expect(summationOf(1)).toBe(1);
});

test("Verificar se a função summationOf retorna 6 para o parametro 3.", () => {
  expect(summationOf(3)).toBe(6);
});

test("Verificar se a função summationOf retorna 15 para o parametro 5.", () => {
  expect(summationOf(5)).toBe(15);
});
