/**Faça um programa que receba:
■■ o código do estado de origem da carga de um caminhão, supondo que a digitação do código do
estado seja sempre válida, isto é, um número inteiro entre 1 e 5;
■■ o peso da carga do caminhão em toneladas;
■■ o código da carga, supondo que a digitação do código seja sempre válida, isto é, um número inteiro
entre 10 e 40. 
Calcule e mostre:
■■ o peso da carga do caminhão convertido em quilos;
■■ o preço da carga do caminhão;
■■ o valor do imposto, sabendo que o imposto é cobrado sobre o preço da carga do caminhão e depende do estado de origem;
■■ o valor total transportado pelo caminhão, preço da carga mais imposto.
*/

import scanner from 'readline-sync'

let codEstado = scanner.questionInt("Codigo do estado de origem da carga (1 - 5): ");

if (codEstado <= 0 || codEstado > 5) {
    console.log("Código de estado inválido!");
} else {
    let pesoToneladas = scanner.questionFloat("Peso da Carga em Toneladas: ");
    let codCarga = scanner.questionInt("Codigo da Carga (10 - 40): ");

    if (codCarga < 10 || codCarga > 40) {
        console.log("Código da carga inválido!");
    } else {
        let pesoQuilos = pesoToneladas * 1000;
        let precoQuilo = 0.0;

        if (codCarga >= 10 && codCarga <= 20) {
            precoQuilo = 100;
        } else if (codCarga >= 21 && codCarga <= 30) {
            precoQuilo = 250;
        } else if (codCarga >= 31 && codCarga <= 40) {
            precoQuilo = 340;
        }

        let precoCarga = pesoQuilos * precoQuilo;
        let imposto = 0.0;

        switch (codEstado) {
            case 1:
                imposto = 35 / 100;
                break;

            case 2:
                imposto = 25 / 100;
                break;

            case 3:
                imposto = 15 / 100;
                break;

            case 4:
                imposto = 5 / 100;
                break;

            case 5:
                imposto = 0.0;
                break;
        }

        let valorImposto = precoCarga * imposto;
        let precoTotal = precoCarga + imposto;

        console.log("Peso da Carga em Toneladas: ".padEnd(50, ".") + ": " + pesoToneladas);
        console.log("Peso da Carga em Quilos: ".padEnd(50, ".") + ": " + pesoQuilos);
        console.log("Código da Carga: ".padEnd(50, ".") + ": " + codCarga);
        console.log("Preço da Carga: ".padEnd(50, ".") + ": R$" + precoCarga);
        console.log("Código Estado: ".padEnd(50, ".") + ": " + codEstado);
        console.log("Imposto Estado: ".padEnd(50, ".") + ": R$" + imposto);
        console.log("Valor do Imposto sobre a carga: ".padEnd(50, ".") + ": R$" + valorImposto);
        console.log("Preço Total: ".padEnd(50, ".") + ": R$" + precoTotal);
    }
}
