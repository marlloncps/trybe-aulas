const { sum, summationOf } = require("./script");

describe("Teste relativos a funcao sum", () => {
  test("Soma de dois valores", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("Arredondamento", () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });
});
// TDD
describe("Teste relativos a funcao summationOf", () => {
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
  test("Verificar se a função summationOf retorna Precisa de um valor para continuar a função para o parametro vazio.", () => {
    expect(() => {summationOf('')}).toThrow('Precisa de um valor para continuar a função');
  });
});
