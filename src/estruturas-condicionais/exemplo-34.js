/** Exercicio Proposto 11, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let salarioAtual = scanner.questionFloat(
  "Informe o salario atual do funcionario: "
);
let novoSalario = 0.0;
let aumento = 0.0;

if (salarioAtual <= 1212) {
  aumento = (salarioAtual * 15) / 100;
} else if (salarioAtual > 1212 && salarioAtual < 2000) {
  aumento = (salarioAtual * 10) / 100;
} else if (salarioAtual >= 2000 && salarioAtual <= 3500) {
  aumento = (salarioAtual * 5) / 100;
} else {
  aumento = 0.0;
}

novoSalario = salarioAtual + aumento;

console.log("Sálario Atual".padEnd(50, ".") + ": R$" + salarioAtual.toFixed(2));
console.log("Aumento".padEnd(50, ".") + ": R$" + aumento.toFixed(2));
console.log("Novo Sálario".padEnd(50, ".") + ": R$" + novoSalario.toFixed(2));
