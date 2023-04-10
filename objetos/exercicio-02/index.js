/** Capitulo 12 - objetos: Exercicio 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */
import Pessoa from "./classes/pessoa.js";

const p1 = new Pessoa("John Doe", 28);
console.log("Idade em 2050: " + p1.calcularIdadeFuturo());
console.log("Sua idade em meses: "+p1.calcularIdadeMeses("1994-06-14"));