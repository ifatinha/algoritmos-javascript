/**Pedro comprou um saco de ração com peso em quilos. Ele possui dois gatos, para os quais 
 * fornece a quantidade de ração em gramas. A quantidade diária de ração fornecida para cada 
 * gato é sempre a mesma. Faça um programa que receba o peso do saco de ração e a quantidade 
 * de ração fornecida para cada gato, calcule e mostre quanto restará de ração no saco após 
 * cinco dias. */

import scanner from "readline-sync"

let pesoSaco = parseFloat(scanner.question("Peso do saco de ração em km: "));
let racaoGato = parseFloat(scanner.question("Ração do Gato: "));

racaoGato = (racaoGato * 2) / 1000;
racaoGato = racaoGato * 5;

let sobra = pesoSaco - racaoGato;

console.log("Nos primeiros 5 dias foram gastos "+racaoGato+"kg de ração.");
console.log("Ao final do 5º dia sobrou "+sobra+"kg de ração.");
