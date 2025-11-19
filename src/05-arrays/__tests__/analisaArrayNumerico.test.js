import { analisaArrayNumerico } from "../analisaArrayNumerico.js";

describe("Função analisaArrayNumerico", () => {
  test("deve analisar uma lista de números e retornar o maior/menor e seus índices", () => {
    expect(analisaArrayNumerico([9, 56, 2, 100, 0, -56])).toEqual({
      maiorNumero: 100,
      idxMaiorNumero: 3,
      menorNumero: -56,
      idxMenorNumero: 5,
    });
  });

  test("deve retornar os índices da primeira ocorrência em caso de empates", () => {
    expect(analisaArrayNumerico([9, -20, 6, 3, -20, 9])).toEqual({
      maiorNumero: 9,
      idxMaiorNumero: 0,
      menorNumero: -20,
      idxMenorNumero: 1,
    });
  });

  test("deve funcionar com único elemento (índices = 0)", () => {
    expect(analisaArrayNumerico([5])).toEqual({
      maiorNumero: 5,
      idxMaiorNumero: 0,
      menorNumero: 5,
      idxMenorNumero: 0,
    });
  });

  test("deve funcionar com números decimais", () => {
    expect(analisaArrayNumerico([3.5, -1.5, 8.3, -2.5])).toEqual({
      maiorNumero: 8.3,
      idxMaiorNumero: 2,
      menorNumero: -2.5,
      idxMenorNumero: 3,
    });
  });

  test("deve lançar erro para arrays vazios ou não-arrays", () => {
    expect(() => analisaArrayNumerico([])).toThrow(
      "O parâmetro deve ser uma lista não vazia"
    );

    expect(() => analisaArrayNumerico("")).toThrow(
      "O parâmetro deve ser uma lista não vazia"
    );

    expect(() => analisaArrayNumerico({})).toThrow(
      "O parâmetro deve ser uma lista não vazia"
    );
  });

  test("deve lançar erro para elementos inválidos", () => {
    expect(() => analisaArrayNumerico(["d", NaN, 45, -30])).toThrow(
      "Os elementos da lista devem ser números válidos"
    );
  });
});
