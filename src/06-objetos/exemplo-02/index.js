/** Capitulo 12 - objetos: Exemplo 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import functions from "./util/Gerenciador.js";

const types = functions.fillTheType();
const products = [];

for (let i = 0; i < 2; i++) {
  console.log("Informe os dados do produto " + (i + 1));
  const product = functions.registerProduct(types);
  products.push(product);
  console.clear();
}

products.forEach(function (product) {
  console.log(product.toString() + "\n");
});

console.log(
  "Média dos preços de todos os produtos: " +
    functions.averagePrice(products).toFixed(2)
);
console.log(
  "Quantidade de produtos com preço final > R$ 40.00: " +
    functions.quantityOfProducts(products).length
);
