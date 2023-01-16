/** Capitulo 06 - sub-rotinas: Exemplo 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

//função que verifica se o valor de A e maior que 0
let positivo = (valor) => valor > 0 ? true : false;

//função que verifica se o valor de B e maior que o de C
let eMaior = (valor1, valor2) => valor1 > valor2 ? true : false;

//função que verifica se um numero é divisivel por a
let divisao = (numero, divisor) => numero % divisor == 0 ? true : false;

//função que soma todos os valores entre B e C e que são divisiveis por A
function somaDivisores(a, b, c) {
    let soma = 0;
    for (let i = b; i <= c; i++) {
        if (divisao(i, a)) {
            soma += i;
        }
    }

    return soma;
}

let a = scanner.questionInt("Digite um valor para A maior que 0: ");

while (!positivo(a)) {
    a = scanner.questionInt("Informe um valor positivo para A: ");
}

let b = scanner.questionInt("Digite um valor para B maior que 0 e menor que o valor de C: ");
while (!positivo(b)) {
    b = scanner.questionInt("Informe um valor positivo para B: ");
}

let c = scanner.questionInt("Digite um valor para C maior que 0: ");
while (!positivo(c)) {
    c = scanner.questionInt("Informe um valor positivo para C: ");
}

while (eMaior(b, c)) {
    b = scanner.questionInt("Digite um valor para B maior que C: ");
}

console.log("Soma dos inteiros: " + somaDivisores(a, b, c));