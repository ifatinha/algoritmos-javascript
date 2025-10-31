/** Capitulo 08 - sub-rotinas: Exemplo 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

function lerDados() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 99 + 1));
  }

  return numeros;
}

function ordenarNumeros(vet) {
  vet.sort(function (a, b) {
    return b - a;
  });

  return vet;
}

function vetorUniao(vet1, vet2) {
  const uniao = [];

  for (let i = 0; i < 10; i++) {
    if (!uniao.includes(vet1[i])) {
      uniao.push(vet1[i]);
    }

    if (!uniao.includes(vet2[i])) {
      uniao.push(vet2[i]);
    }
  }

  return uniao;
}

const vet1 = lerDados();
const vet2 = lerDados();
const vet3 = vetorUniao(vet1, vet2);
const ordenado = ordenarNumeros(vet3);
console.log("Vetor 01: " + vet1.join(" - "));
console.log("Vetor 02: " + vet2.join(" - "));
console.log("Vetor união ordenado: " + ordenado.join(" - "));
