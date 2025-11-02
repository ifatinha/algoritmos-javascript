import { ordenarNumeros } from "../ordernarNumeros.js";

describe("Função ordenarNumeros", () => {
  test("deve ordenar um conjunto de números positivos", () => {
    expect(ordenarNumeros(9, 2, 30, 4)).toEqual([2, 4, 9, 30]);
    expect(ordenarNumeros(15, 30, 2, 48, 0)).toEqual([0, 2, 15, 30, 48]);
    expect(ordenarNumeros(90, 5, 152, 25)).toEqual([5, 25, 90, 152]);
    expect(ordenarNumeros(9, 5, 6, 3, 10, 1, 0, 7, 8, 2, 4)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  test("deve ordenar um conjunto de números negativos e positivos", () => {
    expect(ordenarNumeros(-9, 2, -30, 4)).toEqual([-30, -9, 2, 4]);
    expect(ordenarNumeros(15, -30, 2, -48, 0)).toEqual([-48, -30, 0, 2, 15]);
    expect(ordenarNumeros(-90, 5, -152, 25)).toEqual([-152, -90, 5, 25]);
    expect(ordenarNumeros(9, -5, 6, -3, 10, 1, 0, -7, 8, 2, 4)).toEqual([
      -7, -5, -3, 0, 1, 2, 4, 6, 8, 9, 10,
    ]);
  });

  test("deve lançar erro para valores não numéricos", () => {
    expect(() => ordenarNumeros("5", 2, "a")).toThrow(
      "Todos os valores devem ser números válidos."
    );

    expect(() => ordenarNumeros(3, 9, 10, NaN, 45)).toThrow(
      "Todos os valores devem ser números válidos."
    );
  });

  test("deve lançar erro para números repetidos", () => {
    expect(() => ordenarNumeros(2, 3, 8, 2)).toThrow(
      "Os números não podem ser repetidos."
    );

    expect(() => ordenarNumeros(10, 1, 55, 45, 2, 2, 8, 2)).toThrow(
      "Os números não podem ser repetidos."
    );
  });
});
