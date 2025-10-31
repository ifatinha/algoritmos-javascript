import scanner from 'readline-sync'
import Produto from '../classes/Produto.js';

function descricoesProdutos() {
    return ["Pão com gergelim", "Alface americando", "Tomate", "Queijo Cheddar",
        "Hambúrguer", "Nuggets"];
}

function quantidadseMinimas() {
    return [5, 8, 4, 15, 60, 50];
}

function cadastrarProduto(produtos) {

    if (produtos.length < 6) {
        console.log("Informe os dados abaixo para cadastrar produtos");

        for (let i = 0; i < 6; i++) {
            console.log("\nDados do produto " + (i + 1));
            let descricao = descricoesProdutos()[i];
            let qtdMinima = quantidadseMinimas()[i];

            let qtdEstoque = 150//scanner.questionInt("Quantidade do estoque: ");
            while (qtdEstoque < qtdMinima) {
                console.log("Quantidade não pode ser menor que a quantidade minima de " + qtdMinima);
                qtdEstoque = scanner.questionInt("Quantidade do estoque: ");
            }

            let valorUnitario = 5.75//scanner.questionFloat("Preço unitário: ");
            while (valorUnitario <= 0) {
                valorUnitario = scanner.questionFloat("Preço não pode ser menor que 0! Digite novamente: ");
            }

            const produto = new Produto((i + 1), descricao, qtdEstoque, qtdMinima, valorUnitario);
            console.log("\nUm produto com os dados abaixo foi cadastrado\n" +
                produto.toString());
            produtos.push(produto);

            if (i === 5) {
                console.log("Produtos cadastrados com sucesso!");
            }
        }
    } else {
        console.log("Erro! Você já atingiu o limite maximo de produtos.");
    }

    return produtos;
}

function listarProdutos(produtos) {
    console.log("Estoque atual");
    produtos.forEach((p) => {
        console.log(p.toString() + "\n");
    })
}

function buscarProdutoCodigo(produtos, codigo) {
    return produtos.findIndex((produto) => {
        return produto.codigo === codigo;
    })
}

function atualizarEstoque(produtos) {
    let codigo = scanner.questionInt("Digite o codigo do produto: ");
    let index = buscarProdutoCodigo(produtos, codigo);

    if (index !== -1) {
        console.log("Detalhes do produto");
        console.log(produtos[index].toString());
        let qtd = scanner.questionInt("Digite a quantidade que você quer retirar do estoque: ");

        while (qtd > produtos[index].qtdEstoque) {
            qtd = scanner.questionInt("Quantidade insuficiente.\nValor atual do estoque: " +
                produtos[index].qtdEstoque + ".\n" +
                "Digite novamente: ");
        }

        produtos[index].qtdEstoque -= qtd;
        console.log("Produto atualizado! A nova quantidade do estoque é " +
            produtos[index].qtdEstoque);

    } else {
        console.log("Nenhum produto encontrado. Tente novamente.");
    }

    return produtos;
}

function listarProdutosEstoqueBaixo(produtos) {
    const arr = produtos.filter((produto) => {
        return produto.qtdEstoque < produto.qtdMinima;
    });

    if (arr.length > 0) {
        console.log("Produtos com estoque abaixo do minimo");
        listarProdutos(arr);
    } else {
        console.log("Nenhum produto está com o estoque abaixo do minimo.");
    }

}

function balancoEstoque(produtos) {
    return produtos.reduce((total, produto) => {
        return total + (produto.valorUnitario * produto.qtdEstoque);
    }, 0);
}

export default {
    cadastrarProduto, listarProdutos,
    atualizarEstoque, listarProdutosEstoqueBaixo,
    balancoEstoque
}