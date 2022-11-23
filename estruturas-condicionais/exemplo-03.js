/** Faça um programa que receba dois números e mostre o maior. */

import scanner from "readline-sync";

let num1 = scanner.questionInt("Digite um numero: ");
let num2 = scanner.questionInt("Digite outro numero: ");

if(num1 > num2){
    console.log(num1 +" > "+num2);
}else{
    console.log(num2 +" > "+num1);
}