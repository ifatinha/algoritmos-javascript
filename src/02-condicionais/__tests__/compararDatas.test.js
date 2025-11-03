import { compararDatas } from "../compararDatas.js";

describe("Função compararDatas", () => {
  test("deve retornar a primeira data corretamente", () => {
    const data1 = new Date(2025, 0, 10);
    const data2 = new Date(2023, 5, 14);
    const resultado = compararDatas(data1, data2);
    expect(resultado).toEqual(data1);
  });

  test("deve retornar a segunda data corretamente", () => {
    const data1 = new Date(1994, 5, 14);
    const data2 = new Date(2025, 3, 11);
    const resultado = compararDatas(data1, data2);
    expect(resultado).toEqual(data2);
  });

  test("deve lançar erro se algum parâmetro não for uma instância de Date", () => {
    expect(() => compararDatas("2025-01-10", new Date())).toThrow(
      "Ambos os parâmetros devem ser instâncias de Date"
    );

    expect(() => compararDatas(new Date(), 256)).toThrow(
      "Ambos os parâmetros devem ser instâncias de Date"
    );
  });
});
