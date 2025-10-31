/** Faça um programa que receba o salário inicial de um funcionário, calcule e mostre o novo salário,
acrescido de bonificação e de auxílio escola.
sALário                         BONIFICAÇão
Até R$ 500,00                   5% do salário
Entre R$ 500,00 e R$ 1.200,00   12% do salário
Acima de R$ 1.200,00            Sem bonificação

sALário AuxíLio                 EsCoLA
Até R$ 600,00                   R$ 150,00
Acima de R$ 600,00              R$ 100,00 */

import scanner from 'readline-sync'

let salario = scanner.questionFloat("Digite o salario do funcionario: ");
let novoSalario = 0.0;
let bonificacao = 0.0;
let auxilio = 0.0;

if (salario <= 500) {
    bonificacao = (salario * 5) / 100;
} else if (salario > 500 && salario <= 1200) {
    bonificacao = (salario * 12) / 100;
} else {
    bonificacao = 0.0;
}

if (salario < 600) {
    auxilio = 150;
} else {
    auxilio = 100;
}

novoSalario = salario + bonificacao + auxilio;

console.log("Sálario".padEnd(50, ".") + ": R$ " + salario.toFixed(2));
console.log("Bonificação".padEnd(50, ".") + ": R$ " + bonificacao.toFixed(2));
console.log("Auxilio".padEnd(50, ".") + ": R$ " + auxilio.toFixed(2));
console.log("Novo Sálario".padEnd(50, ".") + ": R$ " + novoSalario.toFixed(2));