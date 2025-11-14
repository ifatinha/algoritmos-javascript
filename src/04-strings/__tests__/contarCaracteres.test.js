import { contarCaracteres } from "../contarCaracteres.js";

describe("Função contarCaracteres", () => {
  test("deve retornar a quantidade de caracteres corretamente", () => {
    expect(contarCaracteres("Abc 123")).toEqual({
      letras: 3,
      numeros: 3,
      espacos: 1,
    });
  });

  test("deve retornar zero nos respectivos campos para texto sem letras, números e espaços", () => {
    expect(contarCaracteres("!!!@@@@")).toEqual({
      letras: 0,
      numeros: 0,
      espacos: 0,
    });
  });

  test("deve retornar zero nos respectivos campos para texto sem letras, números e espaços", () => {
    expect(contarCaracteres("   comer   rezar  amar")).toEqual({
      letras: 14,
      numeros: 0,
      espacos: 8,
    });
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => contarCaracteres("")).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => contarCaracteres(null)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => contarCaracteres(123)).toThrow(
      "A entrada deve ser uma string válida"
    );
  });
});
