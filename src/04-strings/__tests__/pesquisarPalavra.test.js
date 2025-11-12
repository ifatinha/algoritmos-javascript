import { pesquisarPalavra } from "../pesquisarPalavra.js";

describe("Função pesquisarPalavra", () => {
  test("deve contar corretamente a ocorrência de uma palavra (case-insensitive por padrão", () => {
    expect(pesquisarPalavra("A casa é bonita. A CASA é azul", "casa")).toBe(2);
  });

  test("deve retornar zero se a palavra não existir no texto", () => {
    expect(pesquisarPalavra("O sol está brilhando", "lua")).toBe(0);
  });

  test("deve ser sensivel a maiúsculas e minúsculas se caseSensitive=true", () => {
    expect(
      pesquisarPalavra("Banana, banana, BANANA", "banana", {
        caseSensitive: true,
      })
    ).toBe(1);
  });

  test("deve tratar caracteres especias corretamente", () => {
    expect(pesquisarPalavra("C++ é diferente C", "C++")).toBe(1);
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => pesquisarPalavra("", "casa")).toThrow(
      "A entrada deve ser strings válidas."
    );

    expect(() => pesquisarPalavra("123", "")).toThrow(
      "A entrada deve ser strings válidas."
    );

    expect(() => pesquisarPalavra(123, "casa")).toThrow(
      "A entrada deve ser strings válidas."
    );
  });
});
