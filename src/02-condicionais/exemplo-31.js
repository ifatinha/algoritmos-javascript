/** Exercicio Proposto 08, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let salario = scanner.questionFloat("Salario do Funcionario: ");
let aumento = 0.0;

if (salario <= 1200) {
  aumento = (salario * 35) / 100;
} else {
  aumento = (salario * 15) / 100;
}

let novoSalario = salario + aumento;

console.log("Sálario Bruto".padEnd(50, ".") + ": R$" + salario.toFixed(2));
console.log("Valor Aumento".padEnd(50, ".") + ": R$" + aumento.toFixed(2));
console.log(
  "Sálario Com Aumento".padEnd(50, ".") + ": R$" + novoSalario.toFixed(2)
);
