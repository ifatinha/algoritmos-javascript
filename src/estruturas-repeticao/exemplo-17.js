/** Capitulo 05 - estruturas de repetição: Exemplo 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let salarioCarlos = scanner.questionFloat(
  "Digite o salario do funcionario Carlos: "
);
let salarioJoao = (salarioCarlos * 1) / 3;
let qtdMeses = 0;

while (salarioJoao < salarioCarlos) {
  salarioJoao = salarioJoao + (salarioJoao * 5) / 100;
  salarioCarlos = salarioCarlos + (salarioCarlos * 2) / 100;
  qtdMeses++;
  console.log(
    "Sálario de Carlos no " +
      qtdMeses +
      "º mes de aplicação".padEnd(50, ".") +
      ": R$" +
      salarioCarlos.toFixed(2)
  );
  console.log(
    "Sálario de João no " +
      qtdMeses +
      "º mes de aplicação".padEnd(50, ".") +
      ": R$" +
      salarioJoao.toFixed(2)
  );
}

console.log(
  "Serão necessários " +
    qtdMeses +
    " meses para o salário de João igualar ou ultrapassar o sálario de Carlos"
);
