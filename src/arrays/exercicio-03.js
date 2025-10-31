/** Capitulo 06 - Vetores: Exercicios Propostos 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const produtos = [];
const estoque = [];
let contador = 1001;
let codCliente;

for (let i = 0; i < 10; i++) {
    produtos.push(contador);
    contador++;
    estoque.push(Math.floor((Math.random() * 99) + 1));
};

console.log("Estoque Atual!");
for (let i = 0; i < 10; i++) {
    console.log("Produto: " + produtos[i] + " - Estoque: " + estoque[i]);
}

do {
    console.log("Bem-vindo! Para encerrar aplicação digite 0 no código do cliente!");
    codCliente = scanner.questionInt("Codigo do Cliente: ");

    if (codCliente > 0) {
        let codProduto = scanner.questionInt("Informe o codigo do produto: ");
        let index = produtos.findIndex(function (codigo) {
            return codigo === codProduto;
        });

        if (index !== -1) {
            let qtd = scanner.questionInt("Quantidade: ");

            if (qtd <= estoque[index]) {
                estoque[index] -= qtd;
                console.log("Pedido atendido! Obrigado e volte sempre!");
            } else {
                console.log("Desculpe, não foi possível atender seu pedido. " +
                    "Não temos estoque suficiente desse produto!");
            }

        } else {
            console.log("Não existe nenhum produto com o código " + codProduto);
        }

    } else {
        console.log("Código Cliente = 0; encerrando aplicação!");
    }

} while (codCliente !== 0);

//console.clear();
console.log("Estoque Atualizado!");
for (let i = 0; i < 10; i++) {
    console.log("Produto: " + produtos[i] + " - Estoque: " + estoque[i]);
}