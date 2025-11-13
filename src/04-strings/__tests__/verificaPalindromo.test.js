import { verificaPalindromo } from "../verificaPalindromo.js";

describe("função verificaPalindromo", () => {
  test("deve retornar true se uma palavra é palindromo", () => {
    expect(verificaPalindromo("ana")).toBe(true);
    expect(verificaPalindromo("osso")).toBe(true);
    expect(verificaPalindromo("ovo")).toBe(true);
    expect(verificaPalindromo("radar")).toBe(true);
  });

  test("deve retornar true para palavras com acentuação que são palindromos", () => {
    expect(verificaPalindromo("Ótto")).toBe(true);
  });

  test("deve retornar false se uma palavra não for palindromo", () => {
    expect(verificaPalindromo("roma")).toBe(false);
    expect(verificaPalindromo("sol")).toBe(false);
    expect(verificaPalindromo("casa")).toBe(false);
    expect(verificaPalindromo("lua")).toBe(false);
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => verificaPalindromo("")).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => verificaPalindromo(13453)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => verificaPalindromo(null)).toThrow(
      "A entrada deve ser uma string válida"
    );
  });
});
