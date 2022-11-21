/**Faça um programa que calcule e mostre a área de um círculo. Sabe-se que: Área = p * R2 */
import scanner from "readline-sync"

console.log("Para calcular a área de um círculo informe os dados abaixo");

const PI = Math.PI;

let raio = parseFloat(scanner.question("Valor do raio: "));

let area = PI * Math.pow(raio, 2);

console.log("O valor da area do círculo é " + area.toFixed(2));
