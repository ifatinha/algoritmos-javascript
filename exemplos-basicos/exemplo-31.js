/**Faça um programa que receba o preço de um produto, calcule e mostre o novo preço, sabendo-se
que este sofreu um desconto de 10% */

import scanner from "readline-sync";

let precoAtual = scanner.questionFloat("Preço atual: ");

let desconto = (precoAtual * 10) / 100;
let precoComDesconto = precoAtual - desconto;

console.log("Preço sem desconto".padEnd(50, ".") + ": " + precoAtual.toFixed(2) + "R$");
console.log("Valor desconto".padEnd(50, ".") + ": " + desconto.toFixed(2) + "R$");
console.log("Preço com desconto".padEnd(50, ".") + ": " + precoComDesconto.toFixed(2) + "R$");