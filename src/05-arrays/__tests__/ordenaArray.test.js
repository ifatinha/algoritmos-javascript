import { ordenaArray } from "../ordenaArray.js";

describe("Função ordenaArray", () => {
  test("deve ordenar corretamente os numeros em ordem crescente", () => {
    expect(ordenaArray([10, -20, 1, 25, -56, 3, -8, 11])).toEqual([
      -56, -20, -8, 1, 3, 10, 11, 25,
    ]);
  });

  test("deve não modificar o array original", () => {
    const arr = [10, -25, 5];
    const copia = [...arr];
    ordenaArray(arr);
    expect(arr).toEqual(copia);
  });

  test("deve lançar erro para array vazio", () => {
    expect(() => ordenaArray("")).toThrow(
      "A entrada deve ser um array não vazio"
    );
    expect(() => ordenaArray("a")).toThrow(
      "A entrada deve ser um array não vazio"
    );
    expect(() => ordenaArray([])).toThrow(
      "A entrada deve ser um array não vazio"
    );
  });

  test("deve lançar erro para array com valores inválidos", () => {
    expect(() => ordenaArray(["", 5, -2])).toThrow(
      "O array deve conter números válidos"
    );

    expect(() => ordenaArray([1, -25, 3, NaN])).toThrow(
      "O array deve conter números válidos"
    );

    expect(() => ordenaArray([1, -25, 3, null])).toThrow(
      "O array deve conter números válidos"
    );
  });
});
