import { decomporNumeroReal } from "../decomporNumeroReal.js";

describe("Função decomporNumeroReal", () => {
  test("deve decompor corretamente um número real positivo", () => {
    const resultado = decomporNumeroReal(7.85);
    expect(resultado.parteInteira).toBe(7);
    expect(resultado.parteFracionaria).toBeCloseTo(0.85);
    expect(resultado.numeroArredondado).toBe(8);
    expect(resultado.arredondadoParaCima).toBe(8);
    expect(resultado.arredondadoParaBaixo).toBe(7);
  });

  test("deve decompor corretamente um número real negativo", () => {
    const resultado = decomporNumeroReal(-3.14);
    expect(resultado.parteInteira).toBe(-3);
    expect(resultado.parteFracionaria).toBeCloseTo(-0.14);
    expect(resultado.numeroArredondado).toBe(-3);
    expect(resultado.arredondadoParaCima).toBe(-3);
    expect(resultado.arredondadoParaBaixo).toBe(-4);
  });

  test("deve lançar erro para valores não numéricos", () => {
    expect(() => decomporNumeroReal("-89")).toThrow(
      "O valor deve ser um número real válido."
    );
  });
});
