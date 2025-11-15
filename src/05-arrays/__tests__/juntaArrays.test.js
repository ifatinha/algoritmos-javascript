import { juntaArrays } from "../juntaArrays.js";

describe("Função juntaArrays", () => {
  test("deve concatenar dois arrays quando interleave=false (padrão)", () => {
    expect(juntaArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("deve intercalar dois arrays quando interleave=true", () => {
    expect(juntaArrays([1, 2, 3], [4, 5, 6], { interleave: true })).toEqual([
      1, 4, 2, 5, 3, 6,
    ]);
  });

  test("deve funcionar quando o segundo array é maior (interleave)", () => {
    expect(juntaArrays([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("deve funcionar quando o primeiro array é maior (interleave)", () => {
    expect(juntaArrays([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("deve manter a ordem ao concaternar array com elementos negativos e 0", () => {
    expect(juntaArrays([-1, 2, -3], [-4, 5, 6])).toEqual([-1, 2, -3, -4, 5, 6]);
  });

  test("deve lançar erros para entradas inválidas", () => {
    expect(() => juntaArrays([], [1])).toThrow(
      "O parâmetro 'arr1' deve ser um array não vazio."
    );

    expect(() => juntaArrays([1], [])).toThrow(
      "O parâmetro 'arr2' deve ser um array não vazio."
    );

    expect(() => juntaArrays(["1"], [2])).toThrow(
      "O parâmetro 'arr1' deve conter apenas números válidos."
    );

    expect(() => juntaArrays([1], ["@"])).toThrow(
      "O parâmetro 'arr2' deve conter apenas números válidos."
    );
  });
});
