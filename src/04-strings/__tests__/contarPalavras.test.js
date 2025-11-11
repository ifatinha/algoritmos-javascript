import { contarPalavras } from "../contarPalavras.js";

describe("Função contar palavras", () => {
  test("deve contar palavras corretamente de uma frase", () => {
    expect(contarPalavras("Aprender JavaScript é divertido")).toBe(4);
  });

  test("deve lidar com múltiplos espaços entre palavras", () => {
    expect(contarPalavras("Aprender    Javascript   é   divertido")).toBe(4);
  });

  test("deve ignorar espaços em branco no início e no fim da string", () => {
    expect(contarPalavras("    Aprender Javascript é divertido   ")).toBe(4);
  });

  test("deve retornar 1 se houver apenas uma palavra", () => {
    expect(contarPalavras("JavaScript")).toBe(1);
  });

  test("deve lançar erro para parâmetros inválidos", () => {
    expect(() => contarPalavras("")).toThrow(
      "O parâmetro deve ser uma string válida"
    );

    expect(() => contarPalavras(1345)).toThrow(
      "O parâmetro deve ser uma string válida"
    );

    expect(() => contarPalavras(null)).toThrow(
      "O parâmetro deve ser uma string válida"
    );
  });
});
