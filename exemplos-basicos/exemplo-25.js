/**Faça um programa que receba uma hora formada por hora e minutos (um número real), 
 * calcule e mostre a hora digitada apenas em minutos. Lembre-se de que:
 * para quatro e meia, deve-se digitar 4.30; 
 * os minutos vão de 0 a 59.*/

import scanner from "readline-sync"

let horas = scanner.question("Digite uma hora no formato h.mm: ");
let hora = horas.split(".");
let minutos = parseInt(hora[0]) * 60;
minutos = minutos + (parseInt(hora[1]));

console.log(horas + " equivale a " + minutos + " minutos");
