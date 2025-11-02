/** Faça um programa que receba três números e mostre-os em ordem crescente. Suponha que o usuário
digitará três números diferentes. */

import scanner from "readline-sync";

let num1 = scanner.questionInt("Digite o primeiro numero: ");
let num2 = scanner.questionInt("Digite o segundo numero: ");
let num3 = scanner.questionInt("Digite o terceiro numero: ");

if (num1 < num2 && num2 < num3) {
  console.log(
    "A ordem crescente dos números é: " + num1 + ", " + num2 + ", " + num3
  );
} else if (num1 < num3 && num3 < num2) {
  console.log(
    "A ordem crescente dos números é: " + num1 + ", " + num3 + ", " + num2
  );
} else if (num2 < num1 && num1 < num3) {
  console.log(
    "A ordem crescente dos números é: " + num2 + ", " + num1 + ", " + num3
  );
} else if (num2 < num3 && num3 < num1) {
  console.log(
    "A ordem crescente dos números é: " + num2 + ", " + num3 + ", " + num1
  );
} else if (num3 < num1 && num1 < num2) {
  console.log(
    "A ordem crescente dos números é: " + num3 + ", " + num1 + ", " + num2
  );
} else if (num3 < num2 && num2 < num1) {
  console.log(
    "A ordem crescente dos números é: " + num3 + ", " + num2 + ", " + num1
  );
}
