/**Faça um programa que receba a quantidade de dinheiro em reais que uma pessoa que vai viajar possui. Ela
vai passar por vários países e precisa converter seu dinheiro em dólares, marco alemão e libra 
esterlina. Sabe-se que a cotação do dólar é de R$ 1,80; do marco alemão, de R$ 2,00; 
e da libra esterlina, de R$ 3,57. O programa deve fazer as conversões e mostrá-las.  */

import scanner from "readline-sync";

let qtdReal = scanner.questionFloat("Quantia em Real: ");

let cotacaoDolar = qtdReal * 0.19;
let cotacaoEuro = qtdReal * 0.18;
let cotacaoEsterlina = qtdReal * 0.15;
let cotacaoPesoArgentino = qtdReal * 30.52;
let cotacaoPesoUruguaio = qtdReal * 7.33;

console.log("Valor em Real".padEnd(50, ".") + ": " + qtdReal + "BR$");
console.log("Valor em Dolar".padEnd(50, ".") + ": " + cotacaoDolar + "US$");
console.log("Valor em Euro".padEnd(50, ".") + ": " + cotacaoEuro + "€");
console.log(
  "Valor em Esterlina".padEnd(50, ".") + ": " + cotacaoEsterlina + "£"
);
console.log(
  "Valor em Peso Argentino".padEnd(50, ".") + ": " + cotacaoPesoArgentino + "$"
);
console.log(
  "Valor em Peso Uruguaio".padEnd(50, ".") + ": " + cotacaoPesoArgentino + "$"
);
