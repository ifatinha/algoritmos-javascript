/**Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
a) a idade dessa pessoa em anos;
b) a idade dessa pessoa em meses;
c) a idade dessa pessoa em dias;
d) a idade dessa pessoa em semanas. 
 */

import scanner from "readline-sync"


let anoNascimento = scanner.questionInt("Digite o ano do seu nascimento: ");

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth();
let diaAtual = dataAtual.getDate();

let idadeEmAnos = anoAtual - anoNascimento;
let idadeEmMeses = (idadeEmAnos * 12) + mesAtual + 1;
let idadeEmDias = (idadeEmAnos * 365) + diaAtual;
let idadeEmSemanas = (idadeEmAnos * 48);

console.log("Sua idade em anos".padEnd(50, ".") + ": " + idadeEmAnos);
console.log("Sua idade em meses".padEnd(50, ".") + ": " + idadeEmMeses);
console.log("Sua idade em dias".padEnd(50, ".") + ": " + idadeEmDias);
console.log("Sua idade em semanas".padEnd(50, ".") + ": " + idadeEmSemanas);