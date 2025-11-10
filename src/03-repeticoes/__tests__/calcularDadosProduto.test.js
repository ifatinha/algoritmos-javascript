import { calcularDadosProduto } from "../calcularDadosProduto.js";

describe("Função calcularDadosProduto", () => {
  test("deve calcular dados corretamente para carga perigosa do EUA", () => {
    expect(
      calcularDadosProduto({
        preco: 20,
        pais: 1,
        meioTransporte: "A",
        cargaPerigosa: "S",
      })
    ).toEqual({
      preco: 20,
      pais: 1,
      meioTransporte: "A",
      cargaPerigosa: "S",
      imposto: 1,
      valorTransporte: 50,
      valorSeguro: 4,
      precoFinal: 75,
    });
  });

  test("deve calcular dados corretamente para país 2 via aérea", () => {
    expect(
      calcularDadosProduto({
        preco: 20,
        pais: 2,
        meioTransporte: "A",
        cargaPerigosa: "N",
      })
    ).toEqual({
      preco: 20,
      pais: 2,
      meioTransporte: "A",
      cargaPerigosa: "N",
      imposto: 1,
      valorTransporte: 21,
      valorSeguro: 10,
      precoFinal: 52,
    });
  });

  test("deve lançar erro para preço inválido", () => {
    expect(() =>
      calcularDadosProduto({
        preco: "20",
        pais: 2,
        meioTransporte: "A",
        cargaPerigosa: "N",
      })
    ).toThrow("Preço deve ser um número maior que zero");
  });

  test("deve lançar erro para código do país inválido", () => {
    expect(() =>
      calcularDadosProduto({
        preco: 20,
        pais: 5,
        meioTransporte: "A",
        cargaPerigosa: "N",
      })
    ).toThrow("Código do país inválido");
  });

  test("deve lançar erro para meio de transporte inválido", () => {
    expect(() =>
      calcularDadosProduto({
        preco: 20,
        pais: 2,
        meioTransporte: "1",
        cargaPerigosa: "N",
      })
    ).toThrow("Transporte inválido");
  });

  test("deve lançar erro à carga perigosa inválida", () => {
    expect(() =>
      calcularDadosProduto({
        preco: 20,
        pais: 2,
        meioTransporte: "T",
        cargaPerigosa: "ew",
      })
    ).toThrow("Tipo de carga inválida");
  });
});
