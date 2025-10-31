/** Capitulo 08 - sub-rotinas: Exercicio 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

const idades = [];
const sexos = [];
const salarios = [];
const numFilhos = [];

function lerDados() {
    for (let i = 1; i <= 15; i++) {
        console.log("Dados do participante " + i);
        idades.push(scanner.questionInt("Idade: "));
        let sexo = scanner.question("Sexo (m - masculino; f - feminino; o - outros): ");
        while (sexo.toLowerCase() !== "m" && sexo.toLowerCase() !== "f" && sexo.toLowerCase() !== "o") {
            sexo = scanner.question("Sexo Inválido! Sexo (m - masculino; f - feminino; o - outros): ");
        }
        sexos.push(sexo);
        salarios.push(scanner.questionFloat("Salario: "));
        numFilhos.push(scanner.questionInt("Número de filhos: "));
        console.clear();
    }
}

function mediaSalarial(salarios) {
    let totalSalarios = 0;
    for (let i = 0; i < salarios.length; i++) {
        totalSalarios += salarios[i];
    }

    totalSalarios = totalSalarios / salarios.length;
    return totalSalarios;
}

function menorIdade(idades) {
    let idade = idades[0];

    for (let i = 1; i < idades.length; i++) {
        if (idade > idades[i]) {
            idade = idades[i];
        }
    }

    return idade;
}

function qtdMulheresComFilhos(sexos, salarios, filhos) {
    let qtd = 0;
    for (let i = 0; i < sexos.length; i++) {
        if (sexos[i].toLowerCase() === "f" && salarios[i] < 2000 && filhos[i] === 3) {
            qtd++;
        }
    }
    return qtd;
}

lerDados();

let mediaSalario = mediaSalarial(salarios);
console.log("Média Salarial da População: R$" + mediaSalario.toFixed(2));

let idade = menorIdade(idades);
console.log("A menor idade entre os participantes foi de " + idade + " anos.");

let qtd = qtdMulheresComFilhos(sexos, salarios, numFilhos);
console.log("A quantidade de mulheres que tem três filhos e quem recebem até R$ 2000.00 foi de " +
    qtd + " mulheres.");