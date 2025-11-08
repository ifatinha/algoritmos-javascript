import { analisarCidades } from "../analisarCidades.js";

describe("Função analisarCidades", () => {
  const mockData = [
    { nome: "A", veiculos: 3000, acidentes: 10 },
    { nome: "B", veiculos: 1000, acidentes: 3 },
    { nome: "C", veiculos: 5000, acidentes: 8 },
    { nome: "D", veiculos: 1500, acidentes: 1 },
    { nome: "E", veiculos: 2000, acidentes: 5 },
  ];

  test("deve analisar corretamente os dados das cidades", () => {
    const resultado = analisarCidades(mockData);

    expect(resultado.cidadeMaiorIndice).toEqual({
      nome: "A",
      acidentes: 10,
    });

    expect(resultado.cidadeMenorIndice).toEqual({
      nome: "D",
      acidentes: 1,
    });

    expect(resultado.mediaVeiculos).toBe(2500);
    expect(resultado.mediaAcidentesMenos2000).toBe(2);
  });

  test("deve lançar erro se a lista não tiver 5 cidades", () => {
    expect(() => analisarCidades([])).toThrow(
      "É obrigatório informar 5 cidades."
    );
  });

  test("deve lançar erro para dados inválidos", () => {
    const invalido = [...mockData];
    invalido[0] = { nome: "X", veiculos: -25, acidentes: "s" };
    expect(() => analisarCidades(invalido)).toThrow();
  });
});
