/** Capitulo 05 - estruturas de repetição: Exemplo 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let salarioMinimo = scanner.questionFloat("Valor do salario minimo: ");
let valorKwts = salarioMinimo / 8;
let qtdKwts;
let faturamento = 0.0;
let qtd = 0;

console.log("Valor do Salario Minimo".padEnd(50, ".") + ": R$" + salarioMinimo.toFixed(2));

do {
    console.log("Sistema de Calculo de Quilowatts - Para encerrar a aplicação digite 0 na quantidade de Quilowatts.");
    qtdKwts = scanner.questionInt("Quantidade de Quilowatts gasta pelo o consumidor: ");

    if (qtdKwts > 0) {
        let tipoConsumidor = scanner.questionInt("Tipo de Consumidor (1 - Residencial; 2 - Comercial; 3 - Insdustrial): ");

        while (tipoConsumidor !== 1 && tipoConsumidor !== 2 && tipoConsumidor !== 3) {
            tipoConsumidor = scanner.questionInt("Tipo de Consumidor Inválido!" +
                " Digite 1 - Residencial; 2 - Comercial; 3 - Industrial: ");
        }

        let valorGasto = qtdKwts * valorKwts;
        let acrescimos;

        if (tipoConsumidor === 1) {
            acrescimos = (valorGasto * 5) / 100;
        } else if (tipoConsumidor === 2) {
            acrescimos = (valorGasto * 10) / 100;
        } else if (tipoConsumidor === 3) {
            acrescimos = (valorGasto * 15) / 100;
        }

        let valorFinal = valorGasto + acrescimos;

        if (valorFinal > 500 && valorFinal < 1000) {
            qtd++;
        }

        console.log("\nDados do Consumidor");
        console.log("Valor do Quilowatts".padEnd(50, ".") + ": R$" + valorKwts.toFixed(2));
        console.log("Tipo de Consumidor".padEnd(50, ".") + ": " + tipoConsumidor);
        console.log("Quantidade de Quilowatts gasta".padEnd(50, ".") + ": " + qtdKwts);
        console.log("Valor Gasto".padEnd(50, ".") + ": R$" + valorGasto.toFixed(2));
        console.log("Valor Acrescido".padEnd(50, ".") + ": R$" + acrescimos.toFixed(2));
        console.log("Valor a ser Pago".padEnd(50, ".") + ": R$" + valorFinal.toFixed(2));

        faturamento += valorFinal;
    } else {
        console.log("Quantidade de Quilowatts Informada foi 0. Encerrando aplicação.");
    }

} while (qtdKwts !== 0);

console.clear();
console.log("Faturamento Geral da Empresa".padEnd(50, ".") + ": R$" + faturamento.toFixed(2));
console.log("Quantidade de clientes que pagam entre R$500.00 e R$1000.00".padEnd(50, ".") + ": "
    + qtd);