import { verificarTriangulo } from "../verificarTriangulo.js";

describe("Função verificarTriangulo", () => {
  test("deve identificar triângulo equilátero.", () => {
    expect(verificarTriangulo(3, 3, 3)).toBe("Equilátero");
  });

  test("deve identificar triângulo isósceles.", () => {
    expect(verificarTriangulo(2, 2, 3)).toBe("Isósceles");
  });

  test("deve identificar triângulo escaleno.", () => {
    expect(verificarTriangulo(5, 7, 10)).toBe("Escaleno");
  });

  test("deve lançar erro se os valores não formam triângulo", () => {
    expect(() => verificarTriangulo(1, 2, 10)).toThrow(
      "Os valores informados não forma triângulo!"
    );
  });

  test("deve lançar erro para parâmetros inválidos.", () => {
    expect(() => verificarTriangulo("1", 2, 4)).toThrow(
      "Os parâmetros devem ser números válidos."
    );

    expect(() => verificarTriangulo(2, NaN, 4)).toThrow(
      "Os parâmetros devem ser números válidos."
    );

    expect(() => verificarTriangulo(3, 3, 0)).toThrow(
      "Os parâmetros devem ser números válidos."
    );
  });
});
