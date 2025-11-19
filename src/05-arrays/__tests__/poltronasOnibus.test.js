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
  });
});
