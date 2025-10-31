/**O custo ao consumidor de um carro novo é a soma do preço de fábrica com o percentual de lucro do
distribuidor e dos impostos aplicados ao preço de fábrica. Faça um programa que receba o preço de 
fábrica de um veículo, o percentual de lucro do distribuidor e o percentual de impostos, 
calcule e mostre:
a) o valor correspondente ao lucro do distribuidor;
b) o valor correspondente aos impostos;
c) o preço final do veículo.
*/

import scanner from "readline-sync"

let precoFabrica = parseFloat(scanner.question("Preço de Fabrica: "));
let perceDistribuidor = parseFloat(scanner.question("Percentual de lucro do distribuidor: "));
let perceImposto = parseFloat(scanner.question("Percentual de Imposto: "));

let lucroDistribuidor = (precoFabrica * perceDistribuidor) / 100;
let imposto = (precoFabrica * perceImposto) / 100;
let precoFinal = precoFabrica + lucroDistribuidor + imposto;

console.log("Preço de Fábrica".padEnd(50, ".") + ": " + precoFabrica.toFixed(2) + ",00R$");
console.log("Imposto Distribuidor".padEnd(50, ".") + ": " + lucroDistribuidor.toFixed(2) + ",00R$");
console.log("Impostos".padEnd(50, ".") + ": " + imposto.toFixed(2) + ",00R$");
console.log("Preço de Final".padEnd(50, ".") + ": " + precoFinal.toFixed(2) + ",00R$");