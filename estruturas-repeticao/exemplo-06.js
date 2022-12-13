/** Capitulo 05 - estruturas de repetição: Exemplo 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let valorHoraTrab = 0.0;
let salarioMinimo = 450.00;
let salarioBruto = 0.0;
let auxilioAlimentacao = 0.0;
let salarioFinal = 0.0;

for (let i = 1; i <= 10; i++) {
    console.log("Dados do º" + i + " funcionário.");
    let matricula = scanner.questionInt("Matricula: ");
    let qtdHorasTrab = scanner.questionInt("Quantidade de horas trabalhada no mes: ");
    let turno = scanner.question("Turno de Trabalho: M - Matutino; V - Vespertino; N - Noturno: ");

    while ((turno !== "M") && (turno !== "V") && (turno !== "N")) {
        console.log("Digite uma opção válida.");
        turno = scanner.question("Turno de Trabalho: M - Matutino; V - Vespertino; N - Noturno: ");
    }

    let categoria = scanner.question("Categoria: O - Operaria; G - Gerente: ");

    while ((categoria !== "O") && (categoria !== "G")) {
        console.log("Digite uma opção válida.");
        categoria = scanner.question("Categoria: O - Operaria; G - Gerente: ");
    }

    if (categoria === "G" && turno === "N") {
        if (turno === "N") {
            valorHoraTrab = (salarioMinimo * 18) / 100;
        } else {
            valorHoraTrab = (salarioMinimo * 15) / 100;
        }
    } else {
        if (turno === "N") {
            valorHoraTrab = (salarioMinimo * 13) / 100;
        } else {
            valorHoraTrab = (salarioMinimo * 10) / 100;
        }
    }

    salarioBruto = valorHoraTrab * qtdHorasTrab;

    if (salarioBruto <= 300) {
        auxilioAlimentacao = (salarioBruto * 20) / 100;
    } else if (salarioBruto < 600) {
        auxilioAlimentacao = (salarioBruto * 15) / 100;
    } else {
        auxilioAlimentacao = (salarioBruto * 5) / 100;
    }

    salarioFinal = salarioBruto + auxilioAlimentacao;

    console.clear();
    console.log("Dados do º" + i + " funcionário");
    console.log("Matricula".padEnd(50, ".") + ": " + matricula);
    console.log("Categoria".padEnd(50, ".") + ": " + categoria);
    console.log("Turno".padEnd(50, ".") + ": " + turno);
    console.log("Horas Trabalhadas".padEnd(50, ".") + ": " + qtdHorasTrab);
    console.log("Valor Hora Trabalhada".padEnd(50, ".") + ": R$ " + valorHoraTrab.toFixed(2));
    console.log("Sálario Bruto".padEnd(50, ".") + ": R$ " + salarioBruto.toFixed(2));
    console.log("Auxilio Alimentação".padEnd(50, ".") + ": R$ " + auxilioAlimentacao.toFixed(2));
    console.log("Sálario Receber".padEnd(50, ".") + ": R$ " + salarioFinal.toFixed(2));
}