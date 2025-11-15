import { separaPositivosENegativos } from "../separaPositivosENegativos.js";

describe("Função separaPositivosENegativos", () => {
  test("deve separar corretamente números positivos e negativos", () => {
    expect(
      separaPositivosENegativos([1, 2, 3, 4, 5, -6, -5, -10, -25])
    ).toEqual({
      positivos: [1, 2, 3, 4, 5],
      negativos: [-6, -5, -10, -25],
    });
  });

  test("deve lançar erro para array vazio ou inválido", () => {
    expect(() => separaPositivosENegativos([])).toThrow(
      "A entrada deve ser um array não vazio"
    );

    expect(() => separaPositivosENegativos("texto")).toThrow(
      "A entrada deve ser um array não vazio"
    );

    expect(() => separaPositivosENegativos()).toThrow(
      "A entrada deve ser um array não vazio"
    );
  });

  test("deve lançar erro para array com valores inválidos", () => {
    expect(() => separaPositivosENegativos([NaN, null, 1, 3, -56])).toThrow(
      "Os elementos do array devem ser números válidos"
    );

    expect(() => separaPositivosENegativos([NaN, null, "1", 3, -56])).toThrow(
      "Os elementos do array devem ser números válidos"
    );
  });
});
