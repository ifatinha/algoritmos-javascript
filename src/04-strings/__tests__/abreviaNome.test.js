import { abreviaNome } from "../abreviaNome.js";

describe("Função abreviaNome", () => {
  test("deve retornar iniciais em maiúsculas para nome válido", () => {
    expect(abreviaNome("Fatima Ferreira de Sousa")).toBe("FFDS");
    expect(abreviaNome("Ethan Desmond Duncan Shepherd")).toBe("EDDS");
  });

  test("deve ignorar múltiplos espaços e retornar inicias corretas", () => {
    expect(abreviaNome("  Rachel    Duncan    ")).toBe("RD");
  });

  test("deve lidar com nomes já em caixa alta ou minúsculas", () => {
    expect(abreviaNome("Ethan desmond duncan shepherd")).toBe("EDDS");
  });

  test("deve lançar erro para nome sem sobrenome", () => {
    expect(() => abreviaNome("Ethan")).toThrow(
      "A entrada deve conter pelo menos dois nomes"
    );
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => abreviaNome("")).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => abreviaNome(12345)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => abreviaNome(NaN)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => abreviaNome(null)).toThrow(
      "A entrada deve ser uma string válida"
    );
  });
});
