/** Capitulo 08 - sub-rotinas: Exemplo 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

const numeros1 = [];
const numeros2 = [];

function lerDados() {
    for (let i = 0; i < 10; i++) {
        numeros1.push(Math.floor((Math.random() * 99) + 1));
        numeros2.push(Math.floor((Math.random() * 99) + 1));
    }
}

function uniaoVetores(num1, num2) {
    const uniao = [];

    for (let i = 0; i < 10; i++) {
        if (!uniao.includes(num1[i])) {
            uniao.push(num1[i]);
        }

        if (!uniao.includes(num2[i])) {
            uniao.push(num2[i]);
        }
    }

    return uniao;
}

lerDados();
console.log("Vetor 01: " + numeros1.join(" - "));
console.log("Vetor 02: " + numeros2.join(" - "));
console.log("Vetor União: " + uniaoVetores(numeros1, numeros2).join(" - "));
