/** Capitulo 05 - estruturas de repetição: Exemplo 24
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let opcao;
let salario;

do {
    console.log("Seja bem-vindo! Escolha uma das opções abaixo para continuar.");
    console.log("1 - Imposto");
    console.log("2 - Novo salário");
    console.log("3 - Classificação");
    console.log("4 - Finalizar o programa");
    
    opcao = scanner.questionInt("Digite a opcao desejada: ");

    switch (opcao) {
        case 1:
            salario = scanner.questionFloat("Informe o salario do funcionario: ");
            let imposto;
            console.log("Aguarde!!! Calculando imposto.....");

            if (salario <= 500) {
                imposto = (salario * 5) / 100;
            } else if (salario > 500 && salario <= 850) {
                imposto = (salario * 10) / 100;
            } else {
                imposto = (salario * 15) / 100;
            }

            console.log("Sálario Funcionario".padEnd(50, ".") + ": R$" + salario.toFixed(2));
            console.log("Imposto".padEnd(50, ".") + ": R$" + imposto.toFixed(2));
            break;

        case 2:
            salario = scanner.questionFloat("Informe o salario do funcionario: ");
            let novoSalario;
            console.log("Aguarde!!! Calculando novo salario......");
            if (salario > 1500) {
                novoSalario = salario + 25;
            } else if (salario >= 750 && salario <= 1500) {
                novoSalario = salario + 50;
            } else if (salario >= 450 && salario < 750) {
                novoSalario = salario + 75;
            } else {
                novoSalario = salario + 100;
            }

            console.log("Sálario Funcionario".padEnd(50, ".") + ": R$" + salario.toFixed(2));
            console.log("Novo Sálario".padEnd(50, ".") + ": R$" + novoSalario.toFixed(2));
            break;

        case 3:
            salario = scanner.questionFloat("Informe o salario do funcionario: ");

            if (salario <= 1212) {
                console.log("Mal-Remunerado!!!");
            } else {
                console.log("Bem-Remunerado!!!");
            }

            break;

        case 4:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 4);
