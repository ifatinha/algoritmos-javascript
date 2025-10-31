/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let opcao;
let salario;
let novoSalario;

do {
    console.log("Bem-vindo! Escolha uma das opções abaixo: ");
    console.log("1 - Novo Sálario.");
    console.log("2 - 1/3 de Férias.");
    console.log("3 - Décimo Terceiro.");
    console.log("0 - Sair.");
    opcao = scanner.questionInt("Opcao: ");

    salario = Math.floor((Math.random() * 10000) + 1000);
    console.log("Sálario Base".padEnd(50, ".") + ": R$" + salario.toFixed(2));

    switch (opcao) {
        case 1:
            let aumento;

            if (salario < 2500) {
                aumento = (salario * 15) / 100;
            } else if (salario > 2500 && salario < 6000) {
                aumento = (salario * 10) / 100;
            } else {
                aumento = (salario * 5) / 100;
            }

            console.clear();
            console.log("Calculando novo sálario!");
            novoSalario = salario + aumento;

            console.log("Aumento".padEnd(50, ".") + ": R$" + aumento.toFixed(2));
            console.log("Novo Sálario".padEnd(50, ".") + ": R$" + novoSalario.toFixed(2));

            break;

        case 2:
            console.log("Calculando 1/3 de férias!");
            let tercoFerias = salario * 1 / 3;
            novoSalario = salario + tercoFerias;

            console.log("1/3 de férias".padEnd(50, ".") + ": R$" + tercoFerias.toFixed(2));
            console.log("Novo Sálario".padEnd(50, ".") + ": R$" + novoSalario.toFixed(2));

            break;

        case 3:
            console.log("Calculado 13º sálario.");
            let qtdMeses = scanner.questionInt("Quantidade de mêses trabalhados (1 e 12 mêses): ");
            while (qtdMeses < 0 || qtdMeses > 12) {
                qtdMeses = scanner.questionInt("Opção inválida! Informe um número entre 1 e 12: ");
            }

            let decimo = (salario * qtdMeses) / 12;
            console.log("Valor do 13º sálario".padEnd(50, ".") + ": R$" + decimo.toFixed(2));

            break;

        case 0:
            console.log("Encerrando aplicação.");
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
            break
    }

} while (opcao !== 0);