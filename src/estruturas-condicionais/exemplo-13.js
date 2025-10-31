/** Faça um programa que apresente o menu a seguir, permita ao usuário escolher a opção desejada, 
 * receba os dados necessários para executar a operação e mostre o resultado. Verifique a possibilidade de
 * opção inválida e não se preocupe com restrições, como salário negativo.
 * Menu de opções:
 * 1. Imposto
 * 2. Novo salário
 * 3. Classificação
 * Digite a opção desejada.
 * Na opção 1: receber o salário de um funcionário, calcular e mostrar o valor do imposto usando as regras 
 * a seguir.
 * SALário PErCENTuAL do iMPosTo
 * Menor que R$ 500,00 5%
 * De R$ 500,00 (inclusive) a R$ 850,00 (inclusive) 10%
 * Acima de R$ 850,00 15%
 * Na opção 2: receber o salário de um funcionário, calcular e mostrar o valor do novo salário, usando as
 * regras a seguir.
 * sALário AuMENTo
 * Maior que R$ 1.500,00 R$ 25,00
 * De R$ 750,00 (inclusive) a R$ 1.500,00 (inclusive) R$ 50,00
 * De R$ 450,00 (inclusive) a R$ 750,00 R$ 75,00
 * Menor que R$ 450,00 R$ 100,00
 * Na opção 3: receber o salário de um funcionário e mostrar sua classificação usando a tabela a seguir.
 * sALário CLAssiFiCAção
 * Até R$ 700,00 (inclusive) Mal remunerado
 * Maiores que R$ 700,00 Bem remunerado */

import scanner from 'readline-sync'

console.log("Menu de opções");
console.log("1 - Imposto");
console.log("2 - Novo salário");
console.log("3 - Classificação");
let opcao = scanner.questionInt("Digite uma opcao: ");
let salario = 0.0;

switch (opcao) {
    case 1:
        salario = scanner.questionFloat("Digite o salario do funcionario: ");
        console.log("Calculando valor do imposto para o sálario informado.");
        let imposto = 0.0;

        if (salario < 500) {
            imposto = (salario * 5) / 100;
        } else if (salario >= 500 && salario <= 850) {
            imposto = (salario * 10) / 100;
        } else {
            imposto = (salario * 15) / 100;
        }

        console.log("Sálario".padEnd(20, ".") + ": R$" + salario.toFixed(2));
        console.log("Imposto".padEnd(20, ".") + ": R$" + imposto.toFixed(2));
        break;

    case 2:
        salario = scanner.questionFloat("Digite o salario do funcionario: ");
        console.log("Calculando novo salario para o sálario informado.");
        let novoSalario = 0.0;

        if (salario > 1500) {
            console.log("Valor do aumento".padEnd(20, ".") + ": R$" + 25.00);
            novoSalario = salario + 25;
        } else if (salario > 750 && salario <= 1500) {
            console.log("Valor do aumento".padEnd(20, ".") + ": R$" + 50.00);
            novoSalario = salario + 50;
        } else if (salario > 450 && salario < 750) {
            console.log("Valor do aumento".padEnd(20, ".") + ": R$" + 75.00);
            novoSalario = salario + 75;
        } else {
            console.log("Valor do aumento".padEnd(20, ".") + ": R$" + 100.00);
            novoSalario = salario + 100;
        }

        console.log("Novo Sálario".padEnd(20, ".") + ": R$" + novoSalario.toFixed(2));
        break;

    case 3:
        salario = scanner.questionFloat("Digite o salario do funcionario: ");
        console.log("Classificação para o sálario informado.");

        if (salario <= 700) {
            console.log("Mal remunerado!");
        } else {
            console.log("Bem remunerado!");
        }
        break;
    default:
        console.log("Opção inválida!");
        break;
}