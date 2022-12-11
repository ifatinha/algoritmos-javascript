/** Exercicio Proposto 09, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let saldoMedio = scanner.questionFloat("Informe o saldo medio da conta: ");
let valorCredito = 0.0;

if (saldoMedio > 400) {
    valorCredito = (saldoMedio * 30) / 100;
} else if (saldoMedio < 400 && saldoMedio > 300) {
    valorCredito = (saldoMedio * 25) / 100;
} else if (saldoMedio < 300 && saldoMedio > 200) {
    valorCredito = (saldoMedio * 20) / 100;
} else {
    valorCredito = (saldoMedio * 10) / 100;
}

console.log("Saldo médio em conta".padEnd(50, ".") + ": R$" + saldoMedio.toFixed(2));
console.log("Valor de Crédito".padEnd(50, ".") + ": R$" + valorCredito.toFixed(2));