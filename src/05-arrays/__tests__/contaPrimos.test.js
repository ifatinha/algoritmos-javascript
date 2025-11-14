import { contaPrimos } from "../contaPrimos.js";

describe("Função contaPrimos", () => {
  test("deve identificar primos básicos e ignorar não-primos", () => {
    expect(contaPrimos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual([2, 3, 5, 7]);
    expect(contaPrimos(15, 27, 12, 33, 97, 11)).toEqual([11, 97]);
    expect(contaPrimos(89, 11, 997, 17, 2, 10)).toEqual([2, 11, 17, 89, 997]);
  });

  test("deve remover duplicatas mantendo a ordem de aparição", () => {
    expect(contaPrimos(21, 17, 5, 17, 8, 11, 7, 10, 7)).toEqual([5, 7, 11, 17]);
  });

  test("deve ignorar números menores que 2", () => {
    expect(contaPrimos(2, 8, 7, 9, 11, 1, -3)).toEqual([2, 7, 11]);
  });

  test("deve funcionar com números grandes (testa limite razoável)", () => {
    expect(contaPrimos(150, 97, 100, 103, 101)).toEqual([97, 101, 103]);
  });

  test("deve lançar erro para entrada não-array ou array vazio", () => {
    expect(() => contaPrimos()).toThrow(
      "A entrada deve ser um array válido e não vazio"
    );
  });

  test("deve lançar erro se algum elemento não for número", () => {
    expect(() => contaPrimos("", 84, null)).toThrow(
      "Os parâmetros devem ser números inteiros válidos"
    );

    expect(() => contaPrimos(NaN, 31, 199)).toThrow(
      "Os parâmetros devem ser números inteiros válidos"
    );

    expect(() => contaPrimos(2, 3.5, 5)).toThrow(
      "Os parâmetros devem ser números inteiros válidos"
    );

    expect(() => contaPrimos(1, "a", 44)).toThrow(
      "Os parâmetros devem ser números inteiros válidos"
    );
  });
});
