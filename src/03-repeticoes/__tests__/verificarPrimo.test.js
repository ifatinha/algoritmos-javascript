import { verificarPrimo } from "../verificarPrimo.js";

describe("Função verificarPrimo", () => {
  test("deve retornar 'Primo' para número primo", () => {
    expect(verificarPrimo(3)).toBe("Primo");
    expect(verificarPrimo(7)).toBe("Primo");
    expect(verificarPrimo(11)).toBe("Primo");
    expect(verificarPrimo(13)).toBe("Primo");
  });

  test("deve retornar 'Não primo' para número não primo", () => {
    expect(verificarPrimo(4)).toBe("Não primo");
    expect(verificarPrimo(6)).toBe("Não primo");
    expect(verificarPrimo(10)).toBe("Não primo");
  });

  test("deve lançar error para número inválido", () => {
    expect(() => verificarPrimo("2")).toThrow(
      "O parâmetro deve ser um número inteiro válido."
    );
    expect(() => verificarPrimo(NaN)).toThrow(
      "O parâmetro deve ser um número inteiro válido."
    );
  });
});
