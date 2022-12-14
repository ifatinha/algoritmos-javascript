/** Capitulo 05 - estruturas de repetição: Exemplo 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let qtdNascidas = scanner.questionInt("Informe o numero de criancas nascidas: ");
let qtdF = 0;
let qtdM = 0;
let percF = 0.0;
let percM = 0.0;
let qtdMeses = 0;
let percMeses = 0.0;

for (let i = 1; i <= qtdNascidas; i++) {

    let sexo = scanner.question("Informe o sexo da crianca (M - Masculino, e F - Feminino): ");

    while (sexo !== "M" && sexo !== "F") {
        console.log("Opção inválida!");
        sexo = scanner.question("Informe o sexo da crianca (M - Masculino, e F - Feminino): ");
    }

    let tempoVida = scanner.questionInt("Informe o tempo de Vida da Crianca (em meses): ");

    if (sexo === "F") {
        qtdF++;
    } else {
        qtdM++;
    }

    if (tempoVida <= 24) {
        qtdMeses++
    }
}

percF = (qtdF * 100) / qtdNascidas;
percM = (qtdM * 100) / qtdNascidas;
percMeses = (qtdMeses * 100) / qtdNascidas;

console.log("Percentual de Crianças do sexo Feminino mortas no periodo.: " + percF + "%");
console.log("Percentual de Crianças do sexo Masculino mortas no periodo: " + percM + "%");
console.log("Percentual de Crianças que morreram com 24 meses ou menos.: " + percMeses + "%");