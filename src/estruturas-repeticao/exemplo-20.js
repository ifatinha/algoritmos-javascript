/** Capitulo 05 - estruturas de repetição: Exemplo 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let matricula;
let salarioLiquido;
let desconto;
let qtdHomens = 0;
let qtdMulheres = 0;
let mediaSalH = 0.0;
let mediaSalM = 0.0;

const VALOR_HORA = 30;

do {
    console.log("Folha Salarial - Para encerrar a aplicação digite 99999");
    matricula = scanner.questionInt("Matricula do Professor: ");

    if (matricula !== 99999) {
        let sexo = scanner.question("Sexo (M - Masculino; F - Feminino): ");

        while (sexo !== "M" && sexo !== "F") {
            sexo = scanner.question("Opcao invalida! Sexo (M - Masculino; F - Feminino): ");
        }

        let qtdHorasAula = scanner.questionInt("Quantidade Horas Trabalhadas Mensalmente: ");
        let salarioBruto = qtdHorasAula * VALOR_HORA;

        if (sexo === "M") {
            desconto = (salarioBruto * 10) / 100;
            salarioLiquido = salarioBruto - desconto;

            mediaSalH += salarioLiquido;
            qtdHomens++;
        } else {
            desconto = (salarioBruto * 5) / 100;
            salarioLiquido = salarioBruto - desconto;

            mediaSalM += salarioLiquido;
            qtdMulheres++;
        }

        console.log("\nDados Professor");
        console.log("Matricula".padEnd(50, ".") + ": " + matricula);
        console.log("Sexo".padEnd(50, ".") + ": " + sexo);
        console.log("Horas/Aula do Mês".padEnd(50, ".") + ": " + qtdHorasAula);
        console.log("Sálario Bruto".padEnd(50, ".") + ": R$" + salarioBruto.toFixed(2));
        console.log("Sálario Liquido".padEnd(50, ".") + ": R$" + salarioLiquido.toFixed(2));
        console.log("");
    } else {
        console.log("Encerrando aplicação!");
    }

} while (matricula !== 99999);

if (qtdHomens > 0) {
    mediaSalH = mediaSalH / qtdHomens
    console.log("Média Salarial Professores do Sexo Masculino".padEnd(50, ".") +
        ": R$" + mediaSalH.toFixed(2));
} else {
    console.log("Nenhum professor do sexo masculino foi informado!");
}

if (qtdMulheres > 0) {
    mediaSalM = mediaSalM / qtdMulheres
    console.log("Média Salarial Professores do Sexo Feminino".padEnd(50, ".") +
        ": R$" + mediaSalM.toFixed(2));
} else {
    console.log("Nenhum professora do sexo feminino foi informado!");
}