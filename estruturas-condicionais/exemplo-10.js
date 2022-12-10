/** Faça um programa que determine a data cronologicamente maior entre duas datas fornecidas pelo
 * usuário. Cada data deve ser composta por três valores inteiros, em que o primeiro representa o dia, 
 * o segundo, o mês e o terceiro, o ano. */

import scanner from 'readline-sync'

let data1 = new Date();
let data2 = new Date();

console.log("Comparador de datas");

console.log("Informe os dados da primeira data")
data1.setDate(scanner.questionInt("Dia: "));
data1.setMonth(scanner.questionInt("Mes: ") - 1);
data1.setFullYear(scanner.questionInt("Ano: "));

console.log("Primeida data: " + data1.toLocaleString());

console.log("Informe os dados da segunda data")
data2.setDate(scanner.questionInt("Dia: "));
data2.setMonth(scanner.questionInt("Mes: ") - 1);
data2.setFullYear(scanner.questionInt("Ano: "));

console.log("Primeida data: " + data1.toLocaleString());
console.log("Primeida data: " + data2.toLocaleString());

if(data1 > data2){
    console.log(data1.toLocaleDateString()+" é maior que "+data2.toLocaleDateString());
}else{
    console.log(data2.toLocaleDateString()+" é maior que "+data2.toLocaleDateString());
}
