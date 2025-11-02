import { multiplicar } from "../multiplicacao.js";

describe("Função multiplicar", () => {
  test("Deve retornar o produto correto de dois números", () => {
    expect(multiplicar(5, 3)).toBe(15);
  });

  test("Deve retornar 0 se um dos números for 0", () => {
    expect(multiplicar(0, 10)).toBe(0);
  });

  test("Deve lançar erro se os parâmetros não forem números", () => {
    expect(() => multiplicar("a", 3)).toThrow(
      "Os parâmetros devem ser números."
    );
  });
});
