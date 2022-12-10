/**Faça um programa que receba a altura e o peso de uma pessoa. De acordo com a tabela a seguir, 
 * verifique e mostre a classificação dessa pessoa.
 * ALTurA                                    PEso
                                ATé 60    ENTrE 60 E 90 (iNCLusiVE)     ACiMA dE 90
  Menores que 1,20                  A               D                       G
  De 1,20 a 1,70                    B               E                       H
  Maiores que 1,70                  C               F                       I
*/

import scanner from 'readline-sync'

let altura = scanner.questionFloat("Digite sua altura: ");
let peso = scanner.questionFloat("Digite seu peso: ");

if (altura < 1.20) {
    if (peso <= 60) {
        console.log("A");
    } else if (peso > 60 && peso <= 90) {
        console.log("D");
    } else {
        console.log("G");
    }
} else if (altura > 1.20 && altura < 1.70) {
    if (peso <= 60) {
        console.log("B");
    } else if (peso > 60 && peso <= 90) {
        console.log("E");
    } else {
        console.log("H");
    }
} else {
    if (peso <= 60) {
        console.log("C");
    } else if (peso > 60 && peso <= 90) {
        console.log("F");
    } else {
        console.log("I");
    }
}