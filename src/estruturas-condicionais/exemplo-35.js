/** Exercicio Proposto 12, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let salarioBrudo = scanner.questionFloat(
  "Informe o salario atual do funcionario: "
);
let salarioReceber = 0.0;
let gratificacao = 0.0;

if (salarioBrudo <= 1212) {
  gratificacao = 100;
} else if (salarioBrudo > 1212 && salarioBrudo < 2000) {
  gratificacao = 75;
} else if (salarioBrudo >= 2000 && salarioBrudo <= 3500) {
  gratificacao = 50;
} else {
  gratificacao = 35;
}

salarioReceber = salarioBrudo + gratificacao;

console.log("Sálario Atual".padEnd(50, ".") + ": R$" + salarioBrudo.toFixed(2));
console.log("Gratificacao".padEnd(50, ".") + ": R$" + gratificacao.toFixed(2));
console.log(
  "Novo Sálario".padEnd(50, ".") + ": R$" + salarioReceber.toFixed(2)
);
