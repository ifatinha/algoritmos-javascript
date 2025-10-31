/** Capitulo 12 - objetos: Exemplo 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import { fillTheType, registerProduct } from "./util/Gerenciador.js";

const types = fillTheType();
const product1 = registerProduct(types);
console.clear();
console.log(product1.toString());
