/** Capitulo 08 - sub-rotinas: Exemplo 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */


function lerDados() {
    const numeros = [];
    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor((Math.random() * 999) + 1));
    }

    return numeros;
}

function ordenarNumeros(vet) {
    vet.sort(function (a, b) {
        return a - b;
    });

    return vet;
}

const vet = lerDados();
const vetOrdenado = ordenarNumeros(vet);
console.log("Vetor: " + vet.join(" - "));
console.log("Vetor ordenado: " + vetOrdenado.join(" - "));

