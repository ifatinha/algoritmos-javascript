import { produtos, relatorioProdutos } from "../relatorioProdutos.js";

describe("Função relatorioProdutos", () => {
  test("deve retornar corretamente a quantidade de produtos com preço < 100 e > 100", () => {
    expect(relatorioProdutos(produtos)).toEqual({
      qtdProdutosPrecosMaior100: 20,
      qtdProdutosPrecosMenor100: 10,
    });
  });

  test("deve lançar erro para array vazio ou inválido", () => {
    expect(() => relatorioProdutos([])).toThrow(
      "O parâmetro deve ser uma lista não vazia"
    );

    expect(() => relatorioProdutos("[]")).toThrow(
      "O parâmetro deve ser uma lista não vazia"
    );
  });

  test("deve lançar erro para produtos com dados inválidos", () => {
    const listaComIdInvalido = [
      { id: 1, nome: "X", preco: 10 },
      { id: "2", nome: "Y", preco: 20 },
    ];

    expect(() => relatorioProdutos(listaComIdInvalido)).toThrow(
      "Existe produto com id inválido"
    );

    const listaComNomeInvalido = [
      { id: 1, nome: "", preco: 10 },
      { id: 2, nome: "Y", preco: 20 },
    ];

    expect(() => relatorioProdutos(listaComNomeInvalido)).toThrow(
      "Existe produto com nome inválido"
    );

    const listaComPrecoInvalido = [
      { id: 1, nome: "X", preco: 10 },
      { id: 2, nome: "Y", preco: "20" },
    ];

    expect(() => relatorioProdutos(listaComPrecoInvalido)).toThrow(
      "Existe produto com preço inválido"
    );
  });
});
