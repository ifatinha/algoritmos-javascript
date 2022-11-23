/**Faça um programa que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas.*/

import scanner from "readline-sync";

let peso = scanner.question("Digite seu peso em Kg: ");

let aux = peso.split(".");
let quilos = parseFloat(aux[0]);
let gramas = parseFloat(aux[1]);
let pesoGramas = (quilos * 1000) + gramas;

console.log("Seu peso".padEnd(20, ".") + ": " + peso + "Kg");
console.log("Seu peso em gramas".padEnd(20, ".") + ": " + pesoGramas + " gramas");