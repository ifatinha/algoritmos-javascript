/** Capitulo 05 - estruturas de repetição: Exemplo 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'
let preco;
let imposto;
let valorTransporte;
let valorSeguro;
let precoFinal;
let totalImpostos = 0;

do {
    preco = scanner.questionFloat("Informe o preco unitario do produto: ");

    if (preco > 0) {

        let pais = scanner.questionInt("Pais de Origem (1 - Estados Unidos; 2 - Mexico; 3 - Outros): ");
        while (pais !== 1 && pais !== 2 && pais !== 3) {
            pais = scanner.questionInt("Codigo Invalido! Pais de Origem " +
                " (1 - Estados Unidos; 2 - Mexico; 3 - Outros): ");
        }

        let meioTransporte = scanner.question("Meio de Transporte (T - Terreste; F - Fluvial; A - Aereo): ");
        while (meioTransporte !== "T" && meioTransporte !== "F" && meioTransporte !== "A") {
            meioTransporte = scanner.question("Opcao invalida! Meio de Transporte " +
                " (T - Terreste; F - Fluvial; A - Aereo): ");
        }

        let cargaPerigosa = scanner.question("Carga Perigosa (S - Sim; N - Nao): ");
        while (cargaPerigosa !== "S" && cargaPerigosa !== "N") {
            cargaPerigosa = scanner.question("Opcao Invalida! Carga Perigosa (S - Sim; N - Nao): ");
        }

        if (preco < 100) {
            imposto = (preco * 5) / 100;
        } else {
            imposto = (preco * 10) / 100;
        }

        if (cargaPerigosa === "S") {
            switch (pais) {
                case 1:
                    valorTransporte = 50;
                    break;

                case 2:
                    valorTransporte = 21;
                    break;

                case 3:
                    valorTransporte = 24;
                    break;
            }
        } else {
            switch (pais) {
                case 1:
                    valorTransporte = 12;
                    break;

                case 2:
                    valorTransporte = 21;
                    break;

                case 3:
                    valorTransporte = 60;
                    break;
            }
        }

        if (pais === 2 && meioTransporte === "A") {
            valorSeguro = preco / 2;
        } else {
            valorSeguro = preco / 5;
        }

        precoFinal = preco + imposto + valorTransporte + valorSeguro;
        totalImpostos += imposto;

        console.log("Dados do Produto");
        console.log("Preço Unitário".padEnd(50, ".") + ": R$" + preco.toFixed(2));
        console.log("Pais".padEnd(50, ".") + ": " + pais);
        console.log("Transporte".padEnd(50, ".") + ": " + meioTransporte);
        console.log("Carga Perigosa".padEnd(50, ".") + "? " + cargaPerigosa);
        console.log("Valor Impostos".padEnd(50, ".") + ": R$" + imposto.toFixed(2));
        console.log("Valor Transporte".padEnd(50, ".") + ": R$" + valorTransporte.toFixed(2));
        console.log("Valor Seguro".padEnd(50, ".") + ": R$" + valorSeguro.toFixed(2));
        console.log("Valor Final".padEnd(50, ".") + ": R$" + precoFinal.toFixed(2));

    } else {
        console.log("O preço informado é inválido! Encerrando aplicação");
    }

} while (preco > 0);

console.log("Total Impostos".padEnd(50, ".") + ": R$" + totalImpostos.toFixed(2));