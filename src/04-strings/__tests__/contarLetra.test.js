import { contarLetra } from "../contarLetra.js";

describe("Função contarLetra", () => {
  test("deve contar ocorrências simples (case-insensitive por padrão)", () => {
    expect(contarLetra("Hello world", "o")).toBe(2);
  });

  test("deve retornar zero quando não há ocorrências", () => {
    expect(contarLetra("Hoje é sexta", "u")).toBe(0);
  });

  test("deve respeitar case-sensitive quando solicitado", () => {
    expect(contarLetra("A casa é Azul", "A", { caseSensitive: true })).toBe(2);
    expect(contarLetra("A casa é Azul", "a", { caseSensitive: false })).toBe(4);
  });

  test("deve funcionar com substrings maiores que 1 caractere", () => {
    expect(contarLetra("abababa", "ab")).toBe(3);
    expect(contarLetra("aaaaa", "aa")).toBe(2);
  });

  test("deve tratar corretamente caracteres especiais (escapa regex)", () => {
    expect(contarLetra("C++ é diferente de C.", "C++")).toBe(1);
  });

  test("deve lançar erro para parâmetros inválidos", () => {
    expect(() => contarLetra("", "a")).toThrow(
      "A entrada 'texto' deve ser uma string válida."
    );
    expect(() => contarLetra(1234, "a")).toThrow(
      "A entrada 'texto' deve ser uma string válida."
    );
    expect(() => contarLetra("texto", "")).toThrow(
      "A entrada 'letra' deve ser uma string válida."
    );
    expect(() => contarLetra("texto", 132)).toThrow(
      "A entrada 'letra' deve ser uma string válida."
    );
  });
});
