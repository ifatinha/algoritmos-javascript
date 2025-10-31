/** Exercicio Proposto 14, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let salario = scanner.questionFloat("Salario Funcionario: ");
let aumento = 0.0;
let novoSalario = 0.0;

if (salario <= 300) {
  aumento = (salario * 50) / 100;
} else if (salario > 300 && salario <= 500) {
  aumento = (salario * 40) / 100;
} else if (salario > 500 && salario <= 700) {
  aumento = (salario * 30) / 100;
} else if (salario > 700 && salario <= 800) {
  aumento = (salario * 20) / 100;
} else if (salario > 800 && salario <= 1000) {
  aumento = (salario * 10) / 100;
} else {
  aumento = (salario * 5) / 100;
}

novoSalario = salario + aumento;

console.log("Sálario Bruto".padEnd(50, ".") + ": R$ " + salario.toFixed(2));
console.log("Valor Aumento".padEnd(50, ".") + ": R$ " + aumento.toFixed(2));
console.log(
  "Sálario Receber".padEnd(50, ".") + ": R$ " + novoSalario.toFixed(2)
);
