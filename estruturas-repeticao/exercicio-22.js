/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let idade;
let mediaAltura = 0.0;
let contador = 0;
let altura;

do {
    idade = Math.floor((Math.random() * 100) + 0);
    altura = Math.random() * 2;

    if (idade > 50) {
        mediaAltura += altura;
        contador++;
    }

} while (idade !== 0);

mediaAltura = mediaAltura / contador;

if (contador > 0) {
    console.log("A quantidade de pessoas com mais de 50 anos foi de " + contador + " pessoas. E a " +
        "média da altura dessas pessoas foi de " + mediaAltura.toFixed(2) + "m.");
} else {
    console.log("Não foi informada nenhuma pessoa nessa faixa-etária.");
}