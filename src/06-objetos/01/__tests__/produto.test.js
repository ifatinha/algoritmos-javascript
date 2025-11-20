import { Produto } from "../classes/Produto.js";
import { Tipo } from "../classes/Tipo.js";

describe("Classe Produto", () => {
  test("deve criar um objeto produto corretamente", () => {
    const tipo = new Tipo({ code: 1, percentual: 10 });
    const produto = new Produto({
      description: "Camiseta",
      type: tipo,
      price: 50,
    });

    expect(produto.description).toBe("Camiseta");
    expect(produto.type).toEqual({ code: 1, percentual: 10 });
    expect(produto.price).toBe(50);
    expect(produto.tax).toBe(5);
    expect(produto.finalPrice).toBe(55);
  });

  test("deve calcular preço e recalcular taxa e preço final", () => {
    const type = new Tipo({ code: 1, percentual: 5 });
    const produto = new Produto({
      description: "Teclado sem fio",
      type: type,
      price: 100,
    });
    expect(produto.tax).toBe(5);

    produto.price = 120;
    expect(produto.tax).toBe(6);
    expect(produto.finalPrice).toBe(126);
  });

  test("deve retornar valores corretos para toString() e toJSON()", () => {
    const type = new Tipo({ code: 1, percentual: 15 });
    const produto = new Produto({
      description: "Mouse sem fio",
      type,
      price: 50,
    });

    const s = produto.toString();
    expect(s).toContain("Dados do produto");

    const json = produto.toJson();
    expect(json).toEqual({
      description: "Mouse sem fio",
      type: { code: 1, percentual: 15 },
      price: 50,
      tax: 7.5,
      finalPreco: 57.5,
    });
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => new Produto({ description: 123 })).toThrow(
      "O campo 'description' deve ser uma string."
    );

    expect(
      () =>
        new Produto({
          description: "Mouse",
          type: new Tipo({ code: "1", percentual: 5 }),
          price: 10,
        })
    ).toThrow("O campo 'code' deve ser um número inteiro");

    expect(
      () =>
        new Produto({
          description: "Mouse",
          type: new Tipo({ code: 1, percentual: -20 }),
          price: 10,
        })
    ).toThrow("O campo 'percentual' deve ser um número válido >= 0");

    expect(
      () =>
        new Produto({
          description: "Mouse",
          type: new Tipo({ code: 1, percentual: 20 }),
          price: -10,
        })
    ).toThrow("O campo 'price' deve ser um número válido >= 0");
  });
});
