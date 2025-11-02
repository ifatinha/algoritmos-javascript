import { parOuImpar } from "../parOuImpar.js";

describe("Função parOuImpar", () => {
  test("deve retornar 'par' para números pares", () => {
    expect(parOuImpar(2)).toBe("par");
    expect(parOuImpar(12)).toBe("par");
    expect(parOuImpar(40)).toBe("par");
    expect(parOuImpar(100)).toBe("par");
  });

  test("deve retornar 'impar' para números impares", () => {
    expect(parOuImpar(15)).toBe("impar");
    expect(parOuImpar(17)).toBe("impar");
    expect(parOuImpar(31)).toBe("impar");
    expect(parOuImpar(99)).toBe("impar");
  });

  test("deve lançar erro para valores não inteiros", () => {
    expect(() => parOuImpar(2.5)).toThrow(
      "O valor deve ser um número inteiro válido"
    );
    expect(() => parOuImpar(7.8)).toThrow(
      "O valor deve ser um número inteiro válido"
    );
    expect(() => parOuImpar(20.9)).toThrow(
      "O valor deve ser um número inteiro válido"
    );
  });

  test("deve lançar erro para valores não numéricos", () => {
    expect(() => parOuImpar("2.5")).toThrow(
      "O valor deve ser um número inteiro válido"
    );
    expect(() => parOuImpar("d")).toThrow(
      "O valor deve ser um número inteiro válido"
    );
    expect(() => parOuImpar(NaN)).toThrow(
      "O valor deve ser um número inteiro válido"
    );
  });
});
