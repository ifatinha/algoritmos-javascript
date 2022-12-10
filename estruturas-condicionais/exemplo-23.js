/** Exemplo 23 do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let salarioBase = scanner.questionFloat("Salario Base do Funcionario: ");
let turnoTrabalho = scanner.question("Turno de Trabalho: M - Matutino; V - Vespertino; N - Noturno: ");
let categoria = scanner.question("Categoria: O - Operario; G - Gerente: ");
let qtdHorasTrab = scanner.questionInt("Quantidade de Horas Trabalhadas: ");

let coeficienteTrab = 0.0;

switch (turnoTrabalho) {
    case "M":
        coeficienteTrab = (2 / 100) * salarioBase;
        break;

    case "V":
        coeficienteTrab = (5 / 100) * salarioBase;
        break;

    case "N":
        coeficienteTrab = (7 / 100 * salarioBase);
        break;
    default:
        console.log("Opção inválida!");
        break;
}

let salarioBruto = qtdHorasTrab * coeficienteTrab;
let imposto = 0.0;

switch (categoria) {
    case "O":
        if (salarioBruto >= 3000) {
            imposto = (salarioBruto * 5) / 100;
        } else {
            imposto = (salarioBruto * 3) / 100;
        }
        break;
    case "G":
        if (salarioBruto >= 4000) {
            imposto = (salarioBruto * 6) / 100;
        } else {
            imposto = (salarioBruto * 4) / 100;
        }
        break;

    default:
        console.log("Opção inválida!");
        break;
}

let gratificacao = 0.0;
let auxAlimentacao = 0.0;

if (turnoTrabalho === "N" && qtdHorasTrab > 80) {
    gratificacao = 50.00;
} else {
    gratificacao = 35.00;
}

if (categoria === "G" || coeficienteTrab <= 25) {
    auxAlimentacao = salarioBruto * 0.333;
} else {
    auxAlimentacao = salarioBruto / 2;
}

let salarioLiquido = salarioBruto - imposto + gratificacao + auxAlimentacao;
let classificao = "";

if (salarioLiquido < 1500) {
    classificao = "Mal Remunerado";
} else if (salarioLiquido > 1500 && salarioLiquido < 6000) {
    classificao = "Normal";
} else {
    classificao = "Bem Remunerado";
}

console.log("Sálario Base".padEnd(50, ".") + ": R$ " + salarioBase.toFixed(2));
console.log("Quantidade de horas trabalhadas".padEnd(50, ".") + ": R$ " + qtdHorasTrab);
console.log("Coeficiente de Sálario".padEnd(50, ".") + ": " + coeficienteTrab.toFixed(2) + "%");
console.log("Sálario Bruto".padEnd(50, ".") + ": +R$ " + salarioBruto.toFixed(2));
console.log("Imposto Sobre Salario Bruto".padEnd(50, ".") + ": -R$ " + imposto.toFixed(2));
console.log("Gratificação".padEnd(50, ".") + ": +R$ " + gratificacao.toFixed(2));
console.log("Auxilio Alimentação".padEnd(50, ".") + ": +R$ " + auxAlimentacao.toFixed(2));
console.log("Sálario Liquido".padEnd(50, ".") + ": =R$ " + salarioLiquido.toFixed(2));
console.log("Classificação".padEnd(50, ".") + ": " + classificao);