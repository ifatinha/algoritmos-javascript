/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

for (let i = 1; i <= 5; i++) {

    console.log("Valores do " + i + "º grupo.");

    let a = scanner.questionInt("Valor de A: ");
    let b = scanner.questionInt("Valor de B: ");
    let c = scanner.questionInt("Valor de C: ");
    let d = scanner.questionInt("Valor de D: ");

    console.log("A ordem informada dos números " + a + ", " + b + ", " + c + ", " + d);

    if (a < b && a < c && a < d) {
        if (b < c && b < d) {
            if (c < d) {
                console.log("A ordem crescente dos números é " + a + ", " + b + ", " + c + ", " + d);
                console.log("A ordem decrescente dos números é " + d + ", " + c + ", " + b + ", " + a);
            } else {
                console.log("A ordem crescente dos números é " + a + ", " + b + ", " + d + ", " + c);
                console.log("A ordem decrescente dos números é " + c + ", " + d + ", " + b + ", " + a);
            }
        }

        if (c < b && c < d) {
            if (b < d) {
                console.log("A ordem crescente dos números é " + a + ", " + c + ", " + b + ", " + d);
                console.log("A ordem decrescente dos números é " + d + ", " + b + ", " + c + ", " + a);
            } else {
                console.log("A ordem crescente dos números é " + a + ", " + c + ", " + d + ", " + b);
                console.log("A ordem decrescente dos números é " + b + ", " + d + ", " + c + ", " + a);
            }
        }

        if (d < b && d < c) {
            if (b < c) {
                console.log("A ordem crescente dos números é " + a + ", " + d + ", " + b + ", " + c);
                console.log("A ordem decrescente dos números é " + c + ", " + b + ", " + d + ", " + a);
            } else {
                console.log("A ordem crescente dos números é " + a + ", " + d + ", " + c + ", " + b);
                console.log("A ordem decrescente dos números é " + b + ", " + c + ", " + d + ", " + a);
            }
        }
    }

    if (b < a && b < c && b < d) {
        if (a < c && a < d) {
            if (c < d) {
                console.log("A ordem crescente dos números é " + b + ", " + a + ", " + c + ", " + d);
                console.log("A ordem decrescente dos números é " + d + ", " + c + ", " + a + ", " + b);
            } else {
                console.log("A ordem crescente dos números é " + b + ", " + a + ", " + d + ", " + c);
                console.log("A ordem decrescente dos números é " + c + ", " + d + ", " + a + ", " + b);
            }
        }

        if (c < a && c < d) {
            if (a < d) {
                console.log("A ordem crescente dos números é " + b + ", " + c + ", " + a + ", " + d);
                console.log("A ordem decrescente dos números é " + d + ", " + a + ", " + c + ", " + b);
            } else {
                console.log("A ordem crescente dos números é " + b + ", " + c + ", " + d + ", " + a);
                console.log("A ordem decrescente dos números é " + a + ", " + d + ", " + c + ", " + b);
            }
        }

        if (d < a && d < c) {
            if (a < c) {
                console.log("A ordem crescente dos números é " + b + ", " + d + ", " + a + ", " + c);
                console.log("A ordem decrescente dos números é " + c + ", " + a + ", " + d + ", " + b);
            } else {
                console.log("A ordem crescente dos números é " + b + ", " + d + ", " + c + ", " + a);
                console.log("A ordem decrescente dos números é " + a + ", " + c + ", " + d + ", " + b);
            }
        }
    }

    if (c < a && c < b && c < d) {
        if (a < b && a < d) {
            if (b < d) {
                console.log("A ordem crescente dos números é " + c + ", " + a + ", " + b + ", " + d);
                console.log("A ordem decrescente dos números é " + d + ", " + b + ", " + a + ", " + c);
            } else {
                console.log("A ordem crescente dos números é " + c + ", " + a + ", " + d + ", " + b);
                console.log("A ordem decrescente dos números é " + b + ", " + d + ", " + a + ", " + c);
            }
        }

        if (b < a && b < d) {
            if (a < d) {
                console.log("A ordem crescente dos números é " + c + ", " + b + ", " + a + ", " + d);
                console.log("A ordem decrescente dos números é " + d + ", " + a + ", " + b + ", " + c);
            } else {
                console.log("A ordem crescente dos números é " + c + ", " + b + ", " + d + ", " + a);
                console.log("A ordem decrescente dos números é " + a + ", " + d + ", " + b + ", " + c);
            }
        }

        if (d < a && d < b) {
            if (a < b) {
                console.log("A ordem crescente dos números é " + c + ", " + d + ", " + a + ", " + b);
                console.log("A ordem decrescente dos números é " + b + ", " + a + ", " + d + ", " + c);
            } else {
                console.log("A ordem crescente dos números é " + c + ", " + d + ", " + b + ", " + a);
                console.log("A ordem decrescente dos números é " + a + ", " + b + ", " + d + ", " + c);
            }
        }
    }

    if (d < a && d < b && d < c) {
        if (a < b && a < c) {
            if (b < c) {
                console.log("A ordem crescente dos números é " + d + ", " + a + ", " + b + ", " + c);
                console.log("A ordem decrescente dos números é " + c + ", " + b + ", " + a + ", " + d);
            } else {
                console.log("A ordem crescente dos números é " + d + ", " + a + ", " + c + ", " + b);
                console.log("A ordem decrescente dos números é " + b + ", " + c + ", " + a + ", " + d);
            }
        }

        if (b < a && b < c) {
            if (a < c) {
                console.log("A ordem crescente dos números é " + d + ", " + b + ", " + a + ", " + c);
                console.log("A ordem decrescente dos números é " + c + ", " + a + ", " + b + ", " + d);
            } else {
                console.log("A ordem crescente dos números é " + d + ", " + b + ", " + c + ", " + a);
                console.log("A ordem decrescente dos números é " + a + ", " + c + ", " + b + ", " + d);
            }
        }

        if (c < a && c < b) {
            if (a < b) {
                console.log("A ordem crescente dos números é " + d + ", " + c + ", " + a + ", " + b);
                console.log("A ordem decrescente dos números é " + b + ", " + a + ", " + c + ", " + d);
            } else {
                console.log("A ordem crescente dos números é " + d + ", " + c + ", " + b + ", " + a);
                console.log("A ordem decrescente dos números é " + a + ", " + b + ", " + c + ", " + d);
            }
        }
    }
}