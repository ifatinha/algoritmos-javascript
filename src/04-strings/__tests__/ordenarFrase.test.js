import { ordenarFrase } from "../ordenarFrase.js";

describe("Função ordenarFrase", () => {
  test("deve retornar palavras ordenadas (case-insensitive por padrão", () => {
    expect(ordenarFrase("Que a força esteja com você")).toBe(
      "a, com, esteja, força, Que, você"
    );
  });

  test("deve tratar múltiplos espaços", () => {
    expect(ordenarFrase("goiaba   abacaxi    damasco  ")).toBe(
      "abacaxi, damasco, goiaba"
    );
  });

  test("deve respeitar case-sensitive quando option true", () => {
    expect(
      ordenarFrase("Que a força Esteja com Você", { caseSensitive: true })
    ).toBe("a, com, Esteja, força, Que, Você");
  });

  test("deve ordenar sem diferenciar maiúsculas/minúsculas por padrão", () => {
    expect(ordenarFrase("C A B b a")).toBe("A, a, B, b, C");
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => ordenarFrase("")).toThrow(
      "A entrada deve ser uma string válida"
    );
    expect(() => ordenarFrase(123)).toThrow(
      "A entrada deve ser uma string válida"
    );
    expect(() => ordenarFrase(NaN)).toThrow(
      "A entrada deve ser uma string válida"
    );
  });
});
