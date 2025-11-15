import {
  seedFlights,
  buscaVooPorNumero,
  buscaVoosPorDestino,
  buscaVoosPorOrigem,
  formataDetalhesVoo,
  reservarAssentos,
} from "../voos.js";

describe("Módulo voos", () => {
  test("deve encontrar um voo pelo número", () => {
    const voo = buscaVooPorNumero(seedFlights, 1002);
    expect(voo).toEqual({
      numero: 1002,
      origem: "Goiania",
      destino: "São Luís",
      lugares: 30,
    });
  });

  test("deve retornar null se voo não for encontrado", () => {
    expect(buscaVooPorNumero(seedFlights, 5555)).toBeNull();
  });

  test("deve lançar erro para array inválido ou vazio", () => {
    expect(() => buscaVooPorNumero({}, 1002)).toThrow(
      "O parâmetro 'voos' deve ser um array não vazio"
    );

    expect(() => buscaVooPorNumero([], 1002)).toThrow(
      "O parâmetro 'voos' deve ser um array não vazio"
    );
  });

  test("deve lançar erro para número do voo inválido", () => {
    expect(() => buscaVooPorNumero(seedFlights, "1001")).toThrow(
      "O parâmetro 'numero' deve ser um inteiro válido"
    );

    expect(() => buscaVooPorNumero(seedFlights, NaN)).toThrow(
      "O parâmetro 'numero' deve ser um inteiro válido"
    );
  });

  test("deve encontra voo por origem (case-insensitive)", () => {
    const voo = buscaVoosPorOrigem(seedFlights, "Natal");
    expect(voo).toEqual([
      { numero: 1012, origem: "Natal", destino: "Porto Alegre", lugares: 22 },
      { numero: 1035, origem: "Natal", destino: "Porto Alegre", lugares: 33 },
    ]);
  });

  test("deve retornar uma lista vazia se o voo não for encontrado", () => {
    expect(buscaVoosPorOrigem(seedFlights, "Serra Grande")).toEqual([]);
  });

  test("deve lançar erro para parâmetros inválidos", () => {
    expect(() => buscaVoosPorOrigem({}, "Natal")).toThrow(
      "O parâmetro 'voos' deve ser um array não vazio"
    );

    expect(() => buscaVoosPorOrigem(seedFlights, 123)).toThrow(
      "O parâmetro 'origemTerm' deve ser uma string válida"
    );
  });

  test("deve encontra voo por destino (case-insensitive)", () => {
    const voo = buscaVoosPorDestino(seedFlights, "Natal");
    expect(voo).toEqual([
      { numero: 1021, origem: "Fortaleza", destino: "Natal", lugares: 27 },
      { numero: 1030, origem: "João Pessoa", destino: "Natal", lugares: 21 },
    ]);
  });

  test("deve retornar uma lista vazia se o voo não for encontrado", () => {
    expect(buscaVoosPorDestino(seedFlights, "Serra Grande")).toEqual([]);
  });

  test("deve lançar erro para parâmetros inválidos", () => {
    expect(() => buscaVoosPorDestino({}, "Natal")).toThrow(
      "O parâmetro 'voos' deve ser um array não vazio"
    );

    expect(() => buscaVoosPorDestino(seedFlights, 123)).toThrow(
      "O parâmetro 'origemTerm' deve ser uma string válida"
    );
  });

  test("deve formatar detalhes de voo corretamente", () => {
    const voo = {
      numero: 1034,
      origem: "Fortaleza",
      destino: "São Paulo",
      lugares: 78,
    };

    const texto = formataDetalhesVoo(voo);
    expect(texto).toEqual([
      "Numero........................1034",
      "Origem........................Fortaleza",
      "Destino.......................São Paulo",
      "Assentos disponiveis..........78",
    ]);
  });

  test("deve lançar falha ao reservar assento quando voo inexiste", () => {
    const response = reservarAssentos(seedFlights, 3333, 15);
    expect(response.success).toBe(false);
  });

  test("deve lançar falha ao reservar quantidade maior do que disponíveis", () => {
    const response = reservarAssentos(seedFlights, 1001, 9999);
    expect(response.success).toBe(false);
  });

  test("deve lançar falha ao reservar assento quando voo lotado", () => {
    const modified = seedFlights.map((voo) => ({ ...voo }));
    const idx = modified.findIndex((voo) => voo.numero === 1001);
    modified[idx].lugares = 0;

    const response = reservarAssentos(modified, 1001, 2);
    expect(response.success).toBe(false);
  });

  test("deve reservar assento, reduzir quantidade disponível e devolve novo array imutável", () => {
    const response = reservarAssentos(seedFlights, 1001, 5);
    expect(response.success).toBe(true);
    expect(response.message).toBe("Assentos reservados com sucesso!");

    const originalVoo = seedFlights.find((voo) => voo.numero === 1001);
    expect(originalVoo.lugares).toBe(45);

    const novoVoo = response.voos.find((voo) => voo.numero === 1001);
    expect(novoVoo.lugares).toBe(40);
  });

  test("deve lançar erro para parâmetros inválidos", () => {
    expect(() => reservarAssentos({}, 1001, 5)).toThrow(
      "O parâmetro 'voos' deve ser um array não vazio"
    );

    expect(() => reservarAssentos(seedFlights, "1001", 5)).toThrow(
      "O parâmetro 'numero' deve ser um inteiro válido"
    );

    expect(() => reservarAssentos(seedFlights, 1001, "5")).toThrow(
      "O parâmetro 'quantidade' deve ser um inteiro válido"
    );
  });
});
