/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function personalizarData(dia, mes, ano) {
    const personalizaData = {
        day: "2-digit",
        month: "long",
        year: "numeric"
    }

    let d = new Date(ano, mes - 1, dia);
    return d.toLocaleDateString("pt-BR", personalizaData);
}

let dia = scanner.questionInt("Digite o dia: ");
let mes = scanner.questionInt("Digite o mês: ");
let ano = scanner.questionInt("Digite o ano: ");

const date = personalizarData(dia, mes, ano);
console.log(date);