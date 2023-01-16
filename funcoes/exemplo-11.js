/** Capitulo 06 - sub-rotinas: Exemplo 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

const dadosOlhos = ['a', 'c', 'p', 'v'];
const dadosCabelo = ["c", "l", "p", "r"];
const dadosSexo = ['f', 'm'];

const sexos = [];
const corOlhos = [];
const corCabelos = [];
const idades = [];

function verificarDados(dados, item) {
    return dados.includes(item);
}

function lerDados() {
    for (let i = 1; i <= 5; i++) {
        console.log("Dados do " + i + "º habitante: ");
        let olhos = scanner.question("Cor dos Olhos (A - azul; C - Castanho; P - Preto; V - Verde): ");
        while (verificarDados(dadosOlhos, olhos.toLowerCase()) === false) {
            olhos = scanner.question("Opção inválida! Cor dos Olhos (A - azul; C - Castanho; P - Preto; V - Verde): ");
        }
        corOlhos.push(olhos);

        let cabelo = scanner.question("Cor dos Cabelos (C - Castanho; L - Louros; P - Preto; R - Ruivo): ");
        while (verificarDados(dadosCabelo, cabelo.toLowerCase()) === false) {
            cabelo = scanner.question("Opção inválida! Cor dos Cabelos (C - Castanho; L - Louros; P - Preto; R - Ruivo): ");
        }
        corCabelos.push(cabelo);

        let sexo = scanner.question("Sexo (F - feminino, M - masculino): ");
        while (verificarDados(dadosSexo, sexo.toLowerCase()) === false) {
            sexo = scanner.question("Opção inválida! Sexo (F - feminino, M - masculino): ");
        }
        sexo.push(cabelo);

        idades.push(scanner.questionInt("Idade: "));
        console.clear();
    }
}

function mediaIdade() {
    let media = 0;
    let qtd = 0;

    for (let i = 0; i < 5; i++) {
        if (corOlhos[i] === "c" && corCabelos[i] === "p") {
            media += idades[i];
            qtd++;
        }
    }

    media = media / qtd;
    return media;
}

function maiorIdade() {
    return Math.max(idades[0], idades[1], idades[2], idades[3], idades[4]);
}

function qtdMulheres() {
    let qtd = 0;
    for (let i = 0; i < 5; i++) {
        if (sexos[i] === "f" && (idades[i] > 18 && idades[i] <= 35) &&
            corOlhos === "a" && corCabelos === "l") {
            qtd++;
        }
    }

    return qtd;
}

lerDados();
console.log("Média de idade das pessoas que possuem Olhos Castanhos e Cabelos Pretos: " + mediaIdade());
console.log("A maior idade entre as idades digitadas foi " + maiorIdade());
console.log("A quantidade de mulheres com idade entre 18 e 35 anos, que possuem cabelos loures e olhos azuis " +
    "foi de: " + qtdMulheres());