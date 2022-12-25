/** Capitulo 06 - Vetores: Exercicios Propostos 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];

for (let i = 0; i < 15; i++) {
    numeros.push(Math.floor((Math.random() * 999) + 1));
};

let maior = numeros[0];

numeros.forEach(function (numero) {
    if (numero > maior) {
        maior = numero;
    }
});

const aux = numeros.map(function (numero) {
    return numero / maior;
})

console.log("Vetor números \n" + numeros.join(", "));
console.log("\nMaior elemento: " + maior + "\n");
console.log("Numeros dividos pelo o maior elemento")

for (let i = 0; i < 15; i++) {
    console.log(numeros[i] + " / " + maior + " = " + aux[i].toFixed(2));
}