/** Exemplo 24 do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

let precoProduto = scanner.questionFloat("Preco do produto: ");
console.log("Tipo de produto");
console.log("A - Alimentação");
console.log("L - Limpeza");
console.log("V - Vestuário");
let tipoProduto = scanner.question("Opcao: ");
let refrigerecao = scanner.question("Produto Refrigerado: Sim (S) / Não (N): ");

let valorAdicional = 0.0;

if (refrigerecao === "N") {
    if (tipoProduto === "A") {
        if (precoProduto < 15) {
            valorAdicional = 2.0;
        } else {
            valorAdicional = 5.0;
        }
    } else if (tipoProduto === "L") {
        if (precoProduto < 10) {
            valorAdicional = 1.50;
        } else {
            valorAdicional = 2.50;
        }
    } else if (tipoProduto === "V") {
        if (precoProduto < 30) {
            valorAdicional = 3.0;
        } else {
            valorAdicional = 2.50;
        }
    }
} else if (refrigerecao === "S") {
    switch (tipoProduto) {

        case "A":
            valorAdicional = 8.0;
            break;
        case "L":
        case "V":
            valorAdicional = 0.0;
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}

let valorImposto = 0.0;

if (precoProduto < 25) {
    valorImposto = (precoProduto * 5) / 100;
} else {
    valorImposto = (precoProduto * 8) / 100;
}

let precoCusto = precoProduto + valorImposto;
let desconto = 0.0;

if (!(tipoProduto === "A") && !(refrigerecao === "S")) {
    desconto = 3 / 100;
}

let valorFinal = precoCusto + valorAdicional - desconto;
let classificao = "";

if (valorFinal < 50) {
    classificao = "Barato";
} else if (valorFinal > 50 && valorFinal < 100) {
    classificao = "Normal";
} else {
    classificao = "Caro";
}

console.log("Tipo Produto".padEnd(50, ".") + ": " + tipoProduto);
console.log("Refrigerado: ".padEnd(50, ".") + ": " + refrigerecao);
console.log("Valor Produto".padEnd(50, ".") + ": +R$ " + precoProduto.toFixed(2));
console.log("Valor Imposto".padEnd(50, ".") + ": +R$" + valorImposto.toFixed(2));
console.log("Preço Custo".padEnd(50, ".") + ": =R$" + precoCusto.toFixed(2));
console.log("Valor Adicional".padEnd(50, ".") + ": +R$" + valorAdicional.toFixed(2));
console.log("Desconto".padEnd(50, ".") + ": -R$" + desconto.toFixed(2));
console.log("Valor Final".padEnd(50, ".") + ": =R$" + valorFinal.toFixed(2));
console.log("Classificação".padEnd(50, ".") + ": R$" + classificao);
