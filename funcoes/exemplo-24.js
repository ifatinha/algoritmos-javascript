/** Capitulo 06 - sub-rotinas: Exemplo 24
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function calculadora(num1, num2, opcao) {
    let resultado;

    switch (opcao) {
        case "+":
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;

        case "*":
            resultado = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                resultado = -1;
            } else {
                resultado = num1 / num2;
            }
            break;

        default:
            resultado = -2;
            break;
    }

    return resultado;
}

function principal() {
    let opcao;

    do {

        let numero1 = scanner.questionInt("Numero 01: ");
        let numero2 = scanner.questionInt("Numero 02: ");
        let operacao = scanner.question("Operacao (+; -; *; /): ");

        let resultado = calculadora(numero1, numero2, operacao);

        if (resultado === -1) {
            console.log("Erro! Divisão por 0");
        } else if (resultado === -2) {
            console.log("Opção Inválida!");
        } else {
            console.log("Resultado: " + resultado);
        }

        opcao = scanner.question("Deseja realizar outra operação? ");
    } while (opcao === "sim" || opcao === "SIM" || opcao === "Sim")
}

principal();