/** Sabe-se que:
 * pé = 12 polegadas
 * 1 jarda = 3 pés
 * 1 milha = 1,760 jarda
 * Faça um programa que receba uma medida em pés, faça as conversões a seguir e mostre os resultados.
 * a) polegadas;
 * b) jardas;
 * c) milhas.  
 * */

import scanner from "readline-sync";

let medidaPes = parseFloat(scanner.question("Informe uma media em pes: "));

let polegadas = medidaPes * 12;
let jardas = medidaPes / 3;
let milhas = medidaPes / 5280;

console.log(medidaPes + " pés equivale a " + polegadas + " polegadas.");
console.log(medidaPes + " pés equivale a " + jardas.toFixed(2) + " jardas.");
console.log(medidaPes + " pés equivale a " + milhas + " milhas.");