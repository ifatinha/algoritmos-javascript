import { tabuada } from "../tabuada.js";

describe("Função tabuada", () => {
  test("deve retornar a tabuada do número 5 corretamente", () => {
    expect(tabuada(5)).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  });

  test("deve retornar a tabuada do número 9 corretamente", () => {
    expect(tabuada(9)).toEqual([0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90]);
  });

  test("deve lançar erro para parâmetro inválido", () => {
    expect(() => tabuada("d")).toThrow(
      "O número deve ser inteiro e maior que zero."
    );
    expect(() => tabuada(-10)).toThrow(
      "O número deve ser inteiro e maior que zero."
    );
    expect(() => tabuada(NaN)).toThrow(
      "O número deve ser inteiro e maior que zero."
    );
    expect(() => tabuada(2.5)).toThrow(
      "O número deve ser inteiro e maior que zero."
    );
    expect(() => tabuada(0)).toThrow(
      "O número deve ser inteiro e maior que zero."
    );
  });
});
