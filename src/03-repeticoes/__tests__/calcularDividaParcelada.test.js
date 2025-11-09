import { calcularDividaParcelada } from "../calcularDividaParcelada.js";

describe("Função calcularDividaParcelada", () => {
  test("deve retornar todas as opções de parcelamento corretamente", () => {
    const resultado = calcularDividaParcelada(1500);
    expect(resultado).toEqual([
      { parcela: 1, juros: 0, valorParcela: 1500, valorFinal: 1500 },
      { parcela: 4, juros: 75, valorParcela: 393.75, valorFinal: 1575 },
      { parcela: 7, juros: 150, valorParcela: 235.71, valorFinal: 1650 },
      { parcela: 10, juros: 225, valorParcela: 172.5, valorFinal: 1725 },
    ]);
  });

  test("deve lançar erro se o valor da dívida for inválido", () => {
    expect(() => calcularDividaParcelada(-2500)).toThrow(
      "O valor da dívida deve ser um número maior que zero."
    );

    expect(() => calcularDividaParcelada("adsd")).toThrow(
      "O valor da dívida deve ser um número maior que zero."
    );
  });
});
