/** Faça um programa que mostre o menu de opções a seguir, receba a opção do usuário e os 
 * dados necessários para executar cada operação. Menu de opções:
 * 1. Somar dois números.
 * 2. Raiz quadrada de um número. */

import scanner, { question } from 'readline-sync'

console.log("Bem-vindo, escolha uma das opções a seguir");
console.log("1 - Somar dos números");
console.log("2 - Raiz quadrada");
let opcao = scanner.questionInt("Opcao: ");

switch (opcao) {
    case 1:
        console.log("Informe os numeros que deseja somar.");
        let num1 = scanner.questionInt("Primeiro numero: ");
        let num2 = scanner.questionInt("Segundo numero: ");
        let soma = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + soma);
        break;
    case 2:
        console.log("Informe o numero para ver sua raiz quadrada");
        let numero = scanner.questionInt("Numero: ");
        console.log("A raiz quadrada de " + numero + " é " + Math.sqrt(numero));
        break;

    default:
        console.log("Opção inválida");
        break;
}