/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let codCliente;
let tipoInvestimento = "";
let rendimento;
let valorInvestido;
let tipoInves;
let valorFinal;

do {
    codCliente = Math.floor((Math.random() * 999) + 0);

    if (codCliente > 0) {
        valorInvestido = Math.floor((Math.random() * 9999) + 1);
        tipoInves = Math.floor((Math.random() * 3) + 1);

        switch (tipoInves) {
            case 1:
                tipoInvestimento = "Poupança";
                rendimento = (valorInvestido * 1.5) / 100;

                break;
            case 2:
                tipoInvestimento = "Poupança Plus";
                rendimento = (valorInvestido * 2) / 100;

                break;
            case 3:
                tipoInvestimento = "Fundos de Renda Fixa";
                rendimento = (valorInvestido * 4) / 100;

                break;
            default:
                console.log("Opção Inválida!");
                break;
        }

        valorFinal = valorInvestido + rendimento;

        console.log("Codigo do Cliente".padEnd(50, ".") + ": " + codCliente);
        console.log("Valor Investido".padEnd(50, ".") + ": " + valorInvestido.toFixed(2));
        console.log("Tipo de Investimento".padEnd(50, ".") + ": " + tipoInvestimento);
        console.log("Rendimento Mensal".padEnd(50, ".") + ": " + rendimento.toFixed(2));
        console.log("Ganhos".padEnd(50, ".") + ": " + valorFinal.toFixed(2)+"\n");
    }

} while (codCliente !== 0);
