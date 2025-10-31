/** Faça um programa que receba o valor do salário mínimo, o número de horas trabalhadas, o número
de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e mostre o salário
a receber do funcionário de acordo com as regras a seguir:
■■ O valor da hora trabalhada é igual a 1/5 do salário mínimo.
■■ O salário do mês é igual ao número de horas trabalhadas multiplicado pelo valor da hora trabalhada.
■■ Para cada dependente, acrescentar R$ 32,00.
■■ Para cada hora extra trabalhada, calcular o valor da hora trabalhada acrescida de 50%.
■■ O salário bruto é igual ao salário do mês mais o valor dos dependentes mais o valor das horas
extras.
■■ Calcular o valor do imposto de renda retido na fonte de acordo com a tabela a seguir:
    irrF            sALári o BruTo
   Isento         Inferior a R$ 200,00
    10%           De R$ 200,00 até R$ 500,00
    20%           Superior a R$ 500,00

    O salário líquido é igual ao salário bruto menos IRRF.
■■ A gratificação é de acordo com a tabela a seguir:
   sALário Líquido      grATiFiCAção
    Até R$ 350,00         R$ 100,00
Superior a R$ 350,00      R$ 50,00
■■ O salário a receber do funcionário é igual ao salário líquido mais a gratificação*/

import scanner from 'readline-sync'

let salarioMinino = scanner.questionFloat("Informe o valor do salario minimo: ");
let qtdHorasTrabalhadas = scanner.questionInt("Quantidade de horas trabalhadas: ");
let numDependentes = scanner.questionInt("Quantidade de dependentes: ");
let qtdHorasExtras = scanner.questionInt("Quantidade de horas extras: ");

let valorHoraTrabalhada = salarioMinino * 0.2;
let salarioMes = (qtdHorasTrabalhadas * valorHoraTrabalhada);
let salarioDependentes = (numDependentes * 32);
let valorHorasExtras = (valorHoraTrabalhada * 50) / 100;
let totalHorasExtras = (qtdHorasExtras * valorHorasExtras)
let salarioBruto = (salarioMes + salarioDependentes + totalHorasExtras);
let imposto = 0.0;
let gratificacao = 0.0;

if (salarioBruto < 200) {
    imposto = 0.0;
} else if (salarioBruto > 200 && salarioBruto <= 500) {
    imposto = (salarioBruto * 10) / 100;
} else {
    imposto = (salarioBruto * 20) / 100;
}

let salarioLiquido = salarioBruto - imposto;

if (salarioLiquido <= 350) {
    gratificacao = 100;
} else {
    gratificacao = 50;
}

let salarioReceber = salarioLiquido + gratificacao;

console.log("Valor do salario minimo".padEnd(50, ".") + ": R$" + salarioMinino);
console.log("Valor da hora trabalhada".padEnd(50, ".") + ": R$" + valorHoraTrabalhada);
console.log("Valor horas extras".padEnd(50, ".") + ": R$" + valorHorasExtras);
console.log("Quantidade de dependentes".padEnd(50, ".") + ": " + numDependentes);
console.log("Quantidade de horas trabalhadas".padEnd(50, ".") + ": " + qtdHorasTrabalhadas);
console.log("Quantidade de Horas extras".padEnd(50, ".") + ": " + qtdHorasExtras);
console.log("Sálario do Mês".padEnd(50, ".") + ": +R$" + salarioMes);
console.log("Horas extras trabalhadas".padEnd(50, ".") + ": +R$" + totalHorasExtras);
console.log("Sálario Familia".padEnd(50, ".") + ": +R$" + salarioDependentes);
console.log("Salario Bruto".padEnd(50, ".") + ": =R$" + salarioBruto);
console.log("IRRF".padEnd(50, ".") + ": -R$" + imposto);
console.log("Salario Liquido".padEnd(50, ".") + ": =R$" + salarioLiquido);
console.log("Gratificação".padEnd(50, ".") + ": +R$" + gratificacao);
console.log("Salario Receber".padEnd(50, ".") + ": =R$" + salarioReceber);