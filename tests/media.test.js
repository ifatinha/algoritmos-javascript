import { calcularMedia } from "../src/01-basicos/media.js";

describe("Função calcularMedia", () => {
  test("deve calcular a média corretamente e retornar status Aprovado", () => {
    const resultado = calcularMedia(8, 7, 6);
    expect(resultado.media).toBeCloseTo(7);
    expect(resultado.status).toBe("Aprovado!");
  });

  test("deve calcular a média corretamente e retornar status Reprovado", () => {
    const resultado = calcularMedia(4, 5, 6);
    expect(resultado.media).toBeCloseTo(5);
    expect(resultado.status).toBe("Reprovado!");
  });

  test("deve lançar erro se algum parâmetro não for número", () => {
    expect(() => calcularMedia("8", 7, 6)).toThrow(
      "Os parâmetros devem ser números."
    );
  });
});
