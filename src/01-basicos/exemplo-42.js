/**Faça um programa que receba uma temperatura em Celsius, calcule e mostre essa 
 * temperatura em Fahrenheit. Sabe-se que F = 180*(C + 32)/100. */

import scanner from "readline-sync";

let celsius = scanner.questionFloat("Temperatura em Celsius: ");

let f = (celsius * 1.8) + 32;

console.log("Temperatura em Celsius: " + celsius + "ºC");
console.log("Temperatura em Fahrenheit: " + f + "ºF");