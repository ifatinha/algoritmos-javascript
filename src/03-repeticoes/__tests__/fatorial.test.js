import { fatorial } from "../fatorial.js";

describe("Função fatorial", () => {
  test("deve calcular o fatorial de um número inteiro válido corretamente.", () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(4)).toBe(24);
    expect(fatorial(5)).toBe(120);
    expect(fatorial(6)).toBe(720);
  });

  test("deve lançar erro se o parâmetro for inválido.", () => {
    expect(() => fatorial("f")).toThrow(
      "O parâmetro deve ser um número válido e maior que zero."
    );
    expect(() => fatorial(NaN)).toThrow(
      "O parâmetro deve ser um número válido e maior que zero."
    );
    expect(() => fatorial(-4)).toThrow(
      "O parâmetro deve ser um número válido e maior que zero."
    );
    expect(() => fatorial(2.5)).toThrow(
      "O parâmetro deve ser um número válido e maior que zero."
    );
  });
});
