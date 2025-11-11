import { contarLetrasRepetidas } from "../contarLetrasRepetidas.js";

describe("Função contarLetrasRepetidas", () => {
  test("deve retornar letras repetidas e quantidades (case-insensitive por padrão)", () => {
    expect(contarLetrasRepetidas("banana")).toEqual([
      { letra: "a", quantidade: 3 },
      { letra: "n", quantidade: 2 },
    ]);
  });

  test("deve ignorar espaços e contar pontuação/símbolos", () => {
    expect(contarLetrasRepetidas("!!! hello !!!")).toEqual([
      { letra: "!", quantidade: 6 },
      { letra: "l", quantidade: 2 },
    ]);
  });

  test("deve respeitar caseSensitive quando option 'true'", () => {
    expect(contarLetrasRepetidas("AaAaA", { caseSensitive: true })).toEqual([
      { letra: "A", quantidade: 3 },
      { letra: "a", quantidade: 2 },
    ]);
  });

  test("deve retornar um array vazio quando não há caracteres repetidos", () => {
    expect(contarLetrasRepetidas("abc")).toEqual([]);
  });

  test("deve lançar erro para entrada inválida ou vazia", () => {
    expect(() => contarLetrasRepetidas("")).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => contarLetrasRepetidas(123)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => contarLetrasRepetidas(null)).toThrow(
      "A entrada deve ser uma string válida"
    );
  });
});
