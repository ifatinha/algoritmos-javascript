/** Faça um programa que receba um número inteiro e verifique se é par ou ímpar */

import scanner from 'readline-sync'

let numero = scanner.questionInt("Digite um numero para verificar se ele eh par ou impar: ");

if (numero % 2 == 0) {
    console.log(numero + " é par");
} else {
    console.log(numero + " é impar");
}