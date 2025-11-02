import { calcularMediaEConceito } from "../calcularMediaEConceito.js";

describe("Função calcularMediaEConceito", () => {
  test("deve calcular a média e o conceito corretamente para notas válidas", () => {
    expect(calcularMediaEConceito(10, 10, 10)).toEqual({
      media: 10.0,
      conceito: "A",
    });

    expect(calcularMediaEConceito(8, 7, 7)).toEqual({
      media: 7.2,
      conceito: "B",
    });

    expect(calcularMediaEConceito(6, 6, 6)).toEqual({
      media: 6.0,
      conceito: "C",
    });

    expect(calcularMediaEConceito(5, 5, 5)).toEqual({
      media: 5.0,
      conceito: "D",
    });

    expect(calcularMediaEConceito(3, 4, 2)).toEqual({
      media: 2.8,
      conceito: "E",
    });
  });

  test("deve lançar erro para notas fora do intervalo 0-10", () => {
    expect(() => calcularMediaEConceito(-1, 5, 6)).toThrow(
      "As notas devem estar entre 0 e 10."
    );
  });

  test("deve lançar erro para notas não numéricas", () => {
    expect(() => calcularMediaEConceito("a", 8, 3)).toThrow(
      "Todas as notas devem ser números válidos."
    );

    expect(() => calcularMediaEConceito(9, NaN, 3)).toThrow(
      "Todas as notas devem ser números válidos."
    );
  });
});
