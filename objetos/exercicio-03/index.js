/** Capitulo 12 - objetos: Exercicio 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import Compra from "./classes/compra.js";
import gerenciador from "./util/gerenciador.js";

let produtos = gerenciador.retornarProdutos();
console.log(produtos);

let clientes = gerenciador.retornarClientes();
console.log(clientes);

const compra = new Compra(produtos[2], clientes[2], 5);
compra.calcularTotalCompra();
compra.toString();

// clientes[2].calcularDescontoAdicional(compra.totalCompra);
// compra.toString();