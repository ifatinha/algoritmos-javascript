/** Faça um programa que receba quatro valores: I, A, B e C. Desses valores, I é inteiro e positivo, 
 * A, B e C são reais. Escreva os números A, B e C obedecendo à tabela a seguir.
 * Suponha que o valor digitado para I seja sempre um valor válido, ou seja, 1, 2 ou 3, 
 * e que os números digitados sejam diferentes um do outro. */

import scanner from 'readline-sync'

let a = scanner.questionInt("Valor de A: ");
let b = scanner.questionInt("Valor de B: ");
let c = scanner.questionInt("Valor de C: ");

console.log("Escolha uma das opções abaixo");
console.log("1 - Ordem crescente dos números");
console.log("2 - Ordem decrescente dos números");
console.log("3 - O maior número no meio");
let opcao = scanner.questionInt("Opcao: ");

switch (opcao) {

    case 1:
        console.log("Ordem crescente dos numeros");

        if (a < b && a < c) {
            if (b < c) {
                console.log(a + ", " + b + ", " + c);
            } else {
                console.log(a + ", " + c + ", " + b);
            }
        } else if (b < a && b < c) {
            if (a < c) {
                console.log(b + ", " + a + ", " + c);
            } else {
                console.log(b + ", " + c + ", " + a);
            }
        } else if (c < a && c < b) {
            if (a < b) {
                console.log(c + ", " + a + ", " + b);
            } else {
                console.log(c + ", " + b + ", " + a);
            }
        }
        break;

    case 2:
        console.log("Ordem decrescente dos numeros");
        if (a > b && a > c) {
            if (b > c) {
                console.log(a + ", " + b + ", " + c);
            } else {
                console.log(a + ", " + c + ", " + b);
            }
        } else if (b > a && b > c) {
            if (a > c) {
                console.log(b + ", " + a + ", " + c);
            } else {
                console.log(b + ", " + c + ", " + a);
            }
        } else if (c > a && c > b) {
            if (a > b) {
                console.log(c + ", " + a + ", " + b);
            } else {
                console.log(c + ", " + b + ", " + a);
            }
        }
        break;

    case 3:
        console.log("Maior numero no meio");
        if (a > b && a > c) {
            console.log(b + ", " + a + ", " + c);
        } else if (b > a && b > c) {
            console.log(a + ", " + b + ", " + c);
        } else if (c > a && c > b) {
            console.log(a + ", " + c + ", " + b);
        }
        break;

    default:
        console.log("Opção inválida");
        break;
}