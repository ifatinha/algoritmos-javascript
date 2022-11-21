/**Faça um programa que receba um número real, encontre e mostre:
 * a) a parte inteira desse número;
 * b) a parte fracionária desse número;
 * c) o arredondamento desse número. 
 */
import scanner from "readline-sync";

let numero = parseFloat(scanner.question("Digite um numero fracionario: "));

let parteInteira = Math.trunc(numero);
let parteFracionaria = numero % 2;
let numeroArredondado = Math.round(numero);
let arredondadoParaCima = Math.ceil(numero);
let arredondadoParaBaixo = Math.floor(numero);


console.log("Parte inteira: " + parteInteira);
console.log("Parte fracionária: "+parteFracionaria);
console.log("Numero arredondado: " + numeroArredondado);
console.log("Arredondado para cima: " + arredondadoParaCima)
console.log("Arredondado para baixo: " + arredondadoParaBaixo)