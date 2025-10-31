/** Capitulo 06 - Vetores: Exemplo 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const funcionarios = [];
const salarios = [];
const tempoServico = [];

for (let i = 0; i < 5; i++) {
    funcionarios.push(scanner.question("Nome do " + (i + 1) + "º funcionário: "));
    salarios.push(Math.floor((Math.random() * 3000) + 1112));
    tempoServico.push(Math.floor((Math.random() * 40) + 1));
}

console.clear();
console.log("Relatório de Funcionários que não terão aumento");
for (let i = 0; i < 5; i++) {
    if (tempoServico[i] < 10 && salarios[i] >= 1500) {
        console.log("Funcionário".padEnd(50, ".") + ": " + funcionarios[i]);
        console.log("Salário".padEnd(50, ".") + ": R$" + salarios[i].toFixed(2));
        console.log("Tempo de Serviço".padEnd(50, ".") + ": " + tempoServico[i] + " anos.\n");
    }
}

console.log("Funcionarios que terão aumento");
for (let i = 0; i < 5; i++) {

    if (tempoServico[i] > 10 || salarios[i] <= 1500) {
        let aumento;

        if (tempoServico[i] > 10 && salarios[i] <= 1500) {
            aumento = 35 / 100;
        } else if (tempoServico[i] > 10) {
            aumento = 25 / 100;
        } else if (salarios[i] <= 1500) {
            aumento = 15 / 100;
        }

        let novoSalario = (salarios[i] * aumento) + salarios[i];

        console.log("Funcionário".padEnd(50, ".") + ": " + funcionarios[i]);
        console.log("Novo Salário".padEnd(50, ".") + ": R$" + novoSalario.toFixed(2) + "\n");
    }
}