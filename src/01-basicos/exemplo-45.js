/**Faça um programa que receba uma hora (uma variável para hora e outra para minutos), 
 * calcule e mostre:
a) a hora digitada convertida em minutos;
b) o total dos minutos convertidos em segundos. */

import scanner from "readline-sync";

let hora = scanner.question("Digite uma hora no formato 00:00: ");

let aux = hora.split(":");
let totalMinutos = parseInt(aux[0]) * 60 + parseInt(aux[1]);
let totalSegundos = totalMinutos * 60;

console.log("Hora convertida em minutos: " + totalMinutos + " minutos");
console.log("Hora convertida em segundos: " + totalSegundos + " segundos");
