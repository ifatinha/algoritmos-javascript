/** Exercicio Proposto 07, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

let salario = scanner.questionFloat("Informe o salario do funcionario: ");
let aumento = 0.0;

if (salario <= 1212) {
    aumento = (salario * 30) / 100;
}

let novoSalario = aumento + salario;

console.log("Sálario Base".padEnd(50, ".") + ": R$" + salario.toFixed(2));
console.log("Valor Aumento".padEnd(50, ".") + ": R$" + aumento.toFixed(2));
console.log("Sálario Atualizado".padEnd(50, ".") + ": R$" + novoSalario.toFixed(2));