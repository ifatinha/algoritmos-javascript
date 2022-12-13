/** Capitulo 05 - estruturas de repetição: Exemplo 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let qtdNumeros = scanner.questionInt("Digite a quantidade de numeros que voce quer informar: ")
let contador = 0;

while (contador <= qtdNumeros) {

    let n = scanner.questionInt("Digite um numero para ver seu fatorial: ");
    let fatorial = 1;

    for (let i = 1; i <= n; i++) {
        fatorial = fatorial * i;
    }

    console.log(n + "! --------> " + fatorial);
    contador++;
}
