/* Faça um algoritmo para mostrar o resultado da divisão de dois números. */
import scanner from "readline-sync"

let numero1 = scanner.question("Digite um número: ");
let numero2 = scanner.question("Digite outro número: ");



if (numero2 == 0) {
    console.log("Erro! Divisão por 0");
} else {
    let divisao = numero1 / numero2;
    console.log(numero1 + " / " + numero2 + " = " + divisao);
}