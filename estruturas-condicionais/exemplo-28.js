/** Exercicio Proposto 05, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner, { question } from 'readline-sync'

let num1 = scanner.questionInt("Numero 01: ");
let num2 = scanner.questionInt("Numero 02: ");

console.log("Menu de opções");
console.log("1 - Média entre os números digitados");
console.log("2 - Diferença do Maior pelo menor");
console.log("3 - Produto entre os números digitados");
console.log("4 - Divisão do primeiro pelo segundo");
let opcao = scanner.questionInt("Opcao: ");

switch (opcao) {

    case 1:
        let media = (num1 + num2) / 2;
        console.log("Média dos numeros digitados: " + media.toFixed(2));
        break;

    case 2:
        let diferenca = 0;

        if (num1 > num2) {
            diferenca = num1 - num2;
        } else if (num2 > num1) {
            diferenca = num2 - num1;
        } else {
            diferenca = 0;
        }

        console.log("Diferença do maior pelo menor: " + diferenca);
        break;

    case 3:
        let produto = num1 * num2;
        console.log("Produto dos números informados: " + produto);
        break;

    case 4:
        if (num2 > 0) {
            let divisao = num1 / num2;
            console.log("Divisão do primeiro pelo segundo: " + divisao.toFixed(2));
        } else {
            console.log("Não é possivel dividir por 0");
        }
        break;

    default:
        console.log("Opção inválida!");
        break;
}