/**Faça um programa que receba dois números, calcule e mostre a divisão do primeiro número pelo
segundo. Sabe-se que o segundo número não pode ser zero, portanto, não é necessário se preocupar
com validações.  */

import scanner from "readline-sync";

let num1 = scanner.questionInt("Digite o primeiro numero: ");
let num2 = scanner.questionInt("Digite o segundo numero: ");

let divisao = num1 / num2;

console.log(num1 + " / " + num2 + " = " + divisao.toFixed(2));
