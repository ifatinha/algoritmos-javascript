import { contabilizarVotos } from "../contabilizarVotos.js";

describe("Função contabilizarVotos", () => {
  const mockdata = [1, 1, 2, 3, 4, 5, 4, 5, 2, 3, 4, 5, 1, 2, 3, 2, 5, 1, 1, 6];

  test("deve calcular corretamente votos", () => {
    const resultado = contabilizarVotos(mockdata);
    expect(resultado).toEqual({
      apuracao: {
        candidatoA: 5,
        candidatoB: 4,
        candidatoC: 3,
        candidatoD: 3,
        nulos: 4,
        brancos: 1,
      },
      totalVotos: 20,
    });
  });

  test("deve lançar erro se voto inválido for passado", () => {
    expect(() => contabilizarVotos([1, 2, 0])).toThrow(
      "Voto inválido detectado."
    );

    expect(() => contabilizarVotos([1, "s", 2])).toThrow(
      "Voto inválido detectado."
    );
  });

  test("deve lançar erro se não for array", () => {
    expect(() => contabilizarVotos([])).toThrow(
      "A entrada deve ser um array de votos com ao menos 1 voto."
    );

    expect(() => contabilizarVotos({})).toThrow(
      "A entrada deve ser um array de votos com ao menos 1 voto."
    );
  });
});
