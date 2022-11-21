/**Faça um programa que receba dois números maiores que zero, calcule e mostre um elevado ao outro.*/

import scanner from "readline-sync"

let numero1 = parseInt(scanner.question("Digite o primeiro numero: "));
let numero2 = parseInt(scanner.question("Digite o segundo numero: "));

console.log(numero1 + "^" + numero2 + " = " + Math.pow(numero1, numero2));