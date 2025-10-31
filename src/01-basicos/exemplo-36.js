/**Faça um programa que calcule e mostre a área de um quadrado. Sabe-se que: A = lado * lado. */

import scanner from "readline-sync";

let lado = scanner.questionFloat("Valor do lado do quadrado: ");

let area = lado * lado;

console.log("Área do quadrado: "+area);