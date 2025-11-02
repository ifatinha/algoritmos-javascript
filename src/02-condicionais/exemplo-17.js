/**17. Faça um programa para resolver equações do 2o grau. */

import scanner from "readline-sync";

console.log("Informe os dados da equação de 2º grau");

let a = scanner.questionFloat("Valor de A: ");
let b = scanner.questionFloat("Valor de B: ");
let c = scanner.questionFloat("Valor de C: ");

if (a < 0) {
  console.log("Erro! Estes valores não forma uma equação do segundo grau.");
} else {
  let delta = Math.pow(b, 2) - 4 * a * c;
  console.log("Valor de Delta: " + delta);

  if (delta > 0) {
    console.log("Delta maior que 0, logo existem duas raizes reais.");
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log("X1 = " + x1);
    console.log("X2 = " + x2);
  } else if (delta == 0) {
    console.log("Delta igual a 0, logo existe uma raiz real.");
    let x = (-b + Math.sqrt(delta)) / (2 * a);
  } else {
    console.log("Delta negativo, logo não existe raiz real!");
  }
}
