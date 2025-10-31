/** Capitulo 06 - Vetores: Exemplo 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const dados = [1, 2, 3, 4, 5, 6];
const jogadas = [];

for (let i = 0; i < 20; i++) {
  jogadas.push(Math.floor(Math.random() * 6 + 1));
}

console.log("Numeros Jogados: " + jogadas.join(" - "));

for (let i = 0; i < 6; i++) {
  const lances = jogadas.filter(function (numero) {
    return numero === dados[i];
  });

  console.log(
    "Número " + dados[i] + " foi jogado " + lances.length + " vezes."
  );
}
