import {
  criarMapaPoltronas,
  validarMapaPoltronas,
  ehOnibusLotado,
  venderPoltrona,
  obterMapaOcupacao,
} from "../poltronasOnibus.js";

describe("Módulo poltronasOnibus", () => {
  test("deve criar mapa padrão com 24 poltronas vazias", () => {
    const mapa = criarMapaPoltronas();
    expect(mapa.janela.length).toBe(24);
    expect(mapa.corredor.length).toBe(24);
  });

  test("deve lançar erro ao criar mapa com quantidade inválida", () => {
    expect(() => criarMapaPoltronas("45")).toThrow(
      "O parâmentro 'quantidade' deve ser um inteiro válido"
    );
    expect(() => criarMapaPoltronas([])).toThrow(
      "O parâmentro 'quantidade' deve ser um inteiro válido"
    );
    expect(() => criarMapaPoltronas(-1)).toThrow(
      "O parâmentro 'quantidade' deve ser um inteiro válido"
    );
  });

  test("deve lançar erro para estruturas incorretas na criação do mapa", () => {
    expect(() => validarMapaPoltronas(null)).toThrow(
      "Mapa de poltronas inválido"
    );

    expect(() => validarMapaPoltronas({})).toThrow(
      "Mapa de poltronas deve conter arrays de 'janela' e 'corredor' do mesmo tamanho"
    );

    expect(() =>
      validarMapaPoltronas({ janela: [0], corredor: [0, 1] })
    ).toThrow(
      "Mapa de poltronas deve conter arrays de 'janela' e 'corredor' do mesmo tamanho"
    );
  });

  test("deve realizar a venda de poltrona e não altera mapa original (imutabilidade)", () => {
    const mapa = criarMapaPoltronas(6);
    const res = venderPoltrona(mapa, "janela", 2);
    expect(res.success).toBe(true);
    expect(res.message).toBe("Poltrona Reservada!");

    expect(mapa.janela[2]).toBe(0);
    expect(res.mapa.janela[2]).toBe(1);
  });

  test("deve lançar erro para venda de poltrona reservada", () => {
    const mapa = criarMapaPoltronas(6);
    const res = venderPoltrona(mapa, "corredor", 3);
    expect(res.success).toBe(true);
    expect(res.message).toBe("Poltrona Reservada!");

    const res2 = venderPoltrona(res.mapa, "corredor", 3);
    expect(res2.success).toBe(false);
    expect(res2.message).toBe("Poltrona Ocupada!");
  });

  test("deve lançar erro para parâmetros inválidos", () => {
    const mapa = criarMapaPoltronas(6);

    expect(() => venderPoltrona(mapa, "meio", 2)).toThrow(
      "O parâmetro 'lado' deve ser 'janela' ou 'corredor'"
    );

    expect(() => venderPoltrona(mapa, "janela", 200)).toThrow(
      "O parâmetro 'indice' deve ser um inteiro dentro do intervalo válido"
    );
  });

  test("deve lançar erro quando todas as poltronas estiverem ocupadas", () => {
    const mapa = criarMapaPoltronas(2);
    expect(ehOnibusLotado(mapa)).toBe(false);

    let res = venderPoltrona(mapa, "janela", 0);
    res = venderPoltrona(res.mapa, "corredor", 0);
    res = venderPoltrona(res.mapa, "janela", 1);
    res = venderPoltrona(res.mapa, "corredor", 1);

    expect(ehOnibusLotado(res.mapa)).toBe(true);
  });

  test("deve obter cópia do mapa", () => {
    const mapa = criarMapaPoltronas(4);
    const res = venderPoltrona(mapa, "janela", 2);
    const copia = obterMapaOcupacao(res.mapa);
    expect(copia).toEqual(res.mapa);
  });
});
