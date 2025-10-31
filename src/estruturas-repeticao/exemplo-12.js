/** Capitulo 05 - estruturas de repetição: Exemplo 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let salarioMinimo = 1212.00;
let totalFolhaPg = 0.0;
let totalPecas = 0;
let mediaHomens = 0.0;
let qtdHomens = 0;
let mediaMulheres = 0.0;
let qtdMulheres = 0.0;
let maiorSalario = 0.0;
let matriculaMaiorSal = 0;

for (let i = 1; i <= 5; i++) {
    console.log("Dados do " + i + "º funcionário.");
    let matricula = scanner.questionInt("Digite a matricula do " + i + "º operadio:");
    let sexo = scanner.question("Digite o sexo do operario(a) (M ou F): ");
    let numPecas = scanner.questionInt("Digite o total de pecas fabricadas pelo " + i + "º operario: ");
    let salario = 0.0;

    while (sexo !== "F" && sexo != "M") {
        console.log("Opção inválida! ");
        sexo = scanner.question("Sexo: F - Feminino; M - Masculino: ");
    }

    if (sexo === "M") {
        qtdHomens++;
        mediaHomens = mediaHomens + numPecas;
    }

    if (sexo === "F") {
        qtdMulheres++;
        mediaMulheres = mediaMulheres + numPecas;
    }

    if (numPecas <= 30) {
        salario = salarioMinimo;
    } else if (numPecas > 30 && numPecas < 50) {
        salario = salarioMinimo + (((salarioMinimo * 3) / 100) * (numPecas - 30));
    } else {
        salario = salarioMinimo + (((salarioMinimo * 5) / 100) * (numPecas - 30));
    }

    if (i === 1) {
        maiorSalario = salario;
        matriculaMaiorSal = matricula;
    } else if (maiorSalario < salario) {
        maiorSalario = salario;
        matriculaMaiorSal = matricula;
    }

    totalFolhaPg = totalFolhaPg + salario;
    totalPecas = totalPecas + numPecas;

    console.clear();
    console.log("Matricula".padEnd(50, ".") + ": " + matricula);
    console.log("Sexo".padEnd(50, ".") + ": " + sexo);
    console.log("Numero de Peças Fabricadas".padEnd(50, ".") + ": " + numPecas);
    console.log("Sálario".padEnd(50, ".") + ": " + salario);
}

if (qtdHomens > 0) {
    mediaHomens = (qtdHomens * 100) / 5;
}

if (qtdMulheres > 0) {
    mediaMulheres = (qtdMulheres * 100) / 5;
}

console.log("Total Folha de Pagamento".padEnd(50, ".") + ": R$" + totalFolhaPg.toFixed(2));
console.log("Total Peças Produzidas".padEnd(50, ".") + ": R$" + totalPecas);
console.log("Média de Peças Fabricadas por Homens".padEnd(50, ".") + ": " + mediaHomens.toFixed(2) + "%");
console.log("Média de Peças Fabricadas por Mulheres".padEnd(50, ".") + ": " + mediaMulheres.toFixed(2) + "%");
console.log("Maior Sálario do Mês".padEnd(50, ".") + ": R$" + maiorSalario.toFixed(2));
console.log("Matricula do Funcionario com Maior Salario".padEnd(50, ".") + ": " + matriculaMaiorSal);
