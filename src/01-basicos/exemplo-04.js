/** Faça um algoritmo para calcular o novo salário de um funcionário. Sabe-se que os funcionários
 * que recebem atualmente salário de até R$ 500 terão aumento de 20%; os demais terão aumento de 10%.
 */

import scanner from "readline-sync";

let salarioAtual = scanner.question("Digite o salario atual do funcionario: ");
salarioAtual = parseFloat(salarioAtual);

let novoSalario = 0.0;
let aumento = 0.0;

if (salarioAtual <= 500) {
  aumento = (salarioAtual * 20) / 100;
} else {
  aumento = (salarioAtual * 10) / 100;
}

novoSalario = salarioAtual + aumento;

console.log("Sálario atual ".padEnd(30, ".") + ": " + salarioAtual + ",00R$");
console.log("Valor do Aumento ".padEnd(30, ".") + ": " + aumento + ",00R$");
console.log(
  "Sálario com aumento ".padEnd(30, ".") + ": " + novoSalario + ",00R$"
);
