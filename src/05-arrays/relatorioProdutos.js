/**
 * @category Array
 * @file produtos.js
 *
 * Conjunto de produtos de exemplo e utilitários relacionados.
 */

export const produtos = [
  { id: 1, nome: "Notebook", preco: 3499.9 },
  { id: 2, nome: "Mouse Gamer", preco: 149.9 },
  { id: 3, nome: "Teclado Mecânico", preco: 289.9 },
  { id: 4, nome: 'Monitor 27"', preco: 1299.9 },
  { id: 5, nome: "Headset Bluetooth", preco: 199.99 },
  { id: 6, nome: "Cadeira Gamer", preco: 899.0 },
  { id: 7, nome: "Impressora Wi-Fi", preco: 499.9 },
  { id: 8, nome: "Smartphone", preco: 2299.0 },
  { id: 9, nome: "Tablet", preco: 999.9 },
  { id: 10, nome: "Pendrive 64GB", preco: 39.9 },
  { id: 11, nome: "HD Externo 1TB", preco: 299.9 },
  { id: 12, nome: "SSD 480GB", preco: 229.9 },
  { id: 13, nome: "Webcam Full HD", preco: 189.99 },
  { id: 14, nome: "Caixa de Som Bluetooth", preco: 159.9 },
  { id: 15, nome: "Carregador Portátil (Powerbank)", preco: 119.9 },
  { id: 16, nome: "Roteador Dual Band", preco: 179.9 },
  { id: 17, nome: "Hub USB", preco: 79.9 },
  { id: 18, nome: "Cabo HDMI 2.0", preco: 29.9 },
  { id: 19, nome: "Suporte para Monitor", preco: 89.9 },
  { id: 20, nome: "Luminária de Mesa LED", preco: 69.9 },
  { id: 21, nome: "Teclado Sem Fio", preco: 129.9 },
  { id: 22, nome: "Mouse Sem Fio", preco: 79.9 },
  { id: 23, nome: "Fone Intra-auricular Bluetooth", preco: 159.9 },
  { id: 24, nome: "Microfone Condensador USB", preco: 249.9 },
  { id: 25, nome: "Ring Light com Tripé", preco: 89.9 },
  { id: 26, nome: "Smartwatch", preco: 349.9 },
  { id: 27, nome: "Carregador Turbo 20W", preco: 69.9 },
  { id: 28, nome: "Ventoinha RGB para PC", preco: 49.9 },
  { id: 29, nome: "Placa de Vídeo GT 1030", preco: 799.9 },
  { id: 30, nome: "Micro SD 128GB", preco: 59.9 },
];

/**
 * @category Array
 * @function relatorioProdutos
 * @description
 * Gera um relatório simples sobre uma lista de produtos: quantos possuem preço
 * menor que 100 e quantos possuem preço maior ou igual a 100. Retorna também
 * a lista dos produtos com preço menor que 100 para uso posterior.
 *
 * @param {Array<Object>} produtos Lista de produtos no formato { id, nome, preco }.
 *
 * @throws {Error} Caso `produtos` não seja um array não vazio.
 * @throws {Error} Caso algum elemento não seja um objeto produto válido com os campos esperados.
 *
 * @returns {Object} Objeto com:
 *  - {number} qtdProdutosPrecosMaior100  Quantidade de produtos com preço >= 100.
 *  - {number} qtdProdutosPrecosMenor100  Quantidade de produtos com preço < 100.
 *  - {Array<Object>} produtosPrecosMenor100 Lista dos produtos com preço < 100.
 *
 * @example
 * relatorioProdutos(produtos);
 * // retorno:
 * // { qtdProdutosPrecosMaior100: 20, qtdProdutosPrecosMenor100: 10, produtosPrecosMenor100: [...] }
 */

export function relatorioProdutos(produtos) {
  if (!Array.isArray(produtos) || produtos.length === 0) {
    throw new Error("O parâmetro deve ser uma lista não vazia");
  }

  produtos.forEach((produto) => {
    if (typeof produto !== "object" || produto === null) {
      throw new Error("Os elementos devem ser objetos válidos");
    }

    const { id, nome, preco } = produto;

    if (typeof id !== "number" || Number.isNaN(id) || !Number.isInteger(id)) {
      throw new Error("Existe produto com id inválido");
    }

    if (typeof nome !== "string" || nome.trim().length === 0) {
      throw new Error("Existe produto com nome inválido");
    }

    if (typeof preco !== "number" || Number.isNaN(preco)) {
      throw new Error("Existe produto com preço inválido");
    }
  });

  const produtosPrecosMenor100 = produtos.filter((p) => p.preco < 100);
  const qtdProdutosPrecosMenor100 = produtosPrecosMenor100.length;
  const qtdProdutosPrecosMaior100 = produtos.length - qtdProdutosPrecosMenor100;

  return {
    qtdProdutosPrecosMaior100,
    qtdProdutosPrecosMenor100,
  };
}