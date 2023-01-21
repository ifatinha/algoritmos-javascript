/** Capitulo 08 - sub-rotinas: Exemplo 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function somaPrimos(x, y) {
    let soma = 0;

    while (x <= y) {
        let qtdDivisores = 0;
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) {
                qtdDivisores++;
            }
        }

        if (qtdDivisores === 2) {
            console.log(x + " é primo");
            soma += x;
        }

        x++;
    }

    return soma;
}

function programaPrincipal() {
    let x, y;

    do {
        x = scanner.questionInt("Valor de X: ");
        y = scanner.questionInt("Valor de Y > X: ");

        while (y < x) {
            y = scanner.questionInt("O valor de Y deve maior que o valor de X. Valor de Y: ");
        }

        console.clear();
        console.log("Valor de X: " + x);
        console.log("Valor de Y: " + y);
        if (x === y) {
            console.log("X e Y são iguais. Encerrando aplicação!");
        } else {
            console.log("Soma dos numeros primos entre X e Y: " + somaPrimos(x, y));
        }

    } while (x !== y)
}

programaPrincipal();