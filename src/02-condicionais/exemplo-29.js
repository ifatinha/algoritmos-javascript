/** Exercicio Proposto 06, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let num1 = scanner.questionInt("Primeiro numero: ");
let num2 = scanner.questionInt("Segundo numero: ");

console.log("Escolha uma das opções abaixo");
console.log("1 - O primeiro número elevado ao segundo");
console.log("2 - Raiz quadrada de ambos os números");
console.log("3 - Raiz cubica de ambos os números");
let opcao = scanner.questionInt("Opcao: ");

switch (opcao) {
  case 1:
    let resultado = Math.pow(num1, num2);
    console.log(num1 + "^" + num2 + " = " + resultado);
    break;

  case 2:
    let raizNum1 = Math.sqrt(num1);
    let raizNum2 = Math.sqrt(num2);
    console.log("Raiz quadrada de " + num1 + " = " + raizNum1.toFixed(2));
    console.log("Raiz quadrada de " + num2 + " = " + raizNum2.toFixed(2));
    break;

  case 3:
    let raizCubica1 = Math.cbrt(num1);
    let raizCubica2 = Math.cbrt(num2);
    console.log("Raiz cúbica de " + num1 + " = " + raizCubica1.toFixed(2));
    console.log("Raiz cúbica de " + num2 + " = " + raizCubica2.toFixed(2));
    break;

  default:
    console.log("Opção inválida!");
    break;
}
