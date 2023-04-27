import scanner from 'readline-sync';
import ListaProdutos from '../data/ListaProdutos.js';
import Produto from '../classes/Produto.js';

let produtos = [];

function menu() {
    return scanner.questionInt("Manutenção de Produtos\n" +
        "1 - Cadastrar Produto\n" +
        "2 - Consultar Produto\n" +
        "3 - Alterar Produto\n" +
        "4 - Excluir Produto\n" +
        "5 - Produtos Cadastrados\n" +
        "6 - Voltar ao menu principal: ");
}

function criarProduto() {
    let codigo = ListaProdutos.gerarCodigoProduto();
    let descricao = ListaProdutos.gerarNomeProduto();
    let qtdEstoque = Math.floor((Math.random() * 999) + 0);
    let qtdMinimo = Math.floor((Math.random() * 10) + 5);
    let valorCompra = Math.floor((Math.random() * 20) + 1);
    let valorVenda = valorCompra + (valorCompra * 0.3);
    while (valorVenda <= valorCompra) {
        valorVenda = Math.floor((Math.random() * 99) + 20);
    }

    return new Produto(codigo, descricao, valorCompra, valorVenda, qtdMinimo, qtdEstoque);
}

function buscarProdutoCodigo(codigo) {
    return produtos.some((produto) => {
        return produto.codigo === codigo;
    })
}

function cadastrarProduto() {
    const produto = criarProduto();
    produto.calcularLucro();
    let jaExiste = buscarProdutoCodigo(produtos, produto.codigo);

    if (!jaExiste) {
        console.log("Foi cadastrado um produto com os dados abaixo:\n" +
            produto.toString());
        produtos.push(produto);
    } else {
        console.log("Erro! Já existe um produto cadastrado com o codigo informado.");
    }
}

function listarProdutos() {
    if (produtos.length > 0) {
        console.log("Produtos cadastrados\n");
        produtos.forEach((produto) => {
            console.log(produto.toString());
        })
    } else {
        console.log("Não existe nenhum produto cadastrado.")
    }
}

function pesquisarDadosProduto() {
    let codigo = scanner.question("Digite o codigo do produto: ");
    let index = retornarIndexProduto(codigo);

    if (index !== -1) {
        console.log("Detalhes do produto\n" +
            produtos[index].toString());
    } else {
        console.log("Nenhum produto encontrado!");
    }
}

function retornarIndexProduto(codigo) {
    return produtos.findIndex((produto) => {
        return produto.codigo === codigo;
    })
}

function alterarProduto() {
    let codigo = scanner.question("Digite o codigo do produto: ");
    let index = retornarIndexProduto(codigo);

    if (index !== -1) {
        console.log("Detalhes do produto\n" +
            produtos[index].toString());

        produtos[index].descricao = scanner.question("Descrição: ");
        produtos[index].estoqueMinimo = scanner.questionInt("Estoque minimo: ");
        produtos[index].estoqueAtual = scanner.questionInt("Estoque atual: ");
        produtos[index].valorCompra = scanner.questionFloat("Valor de compra: ");
        produtos[index].valorVenda = scanner.questionFloat("Valor de venda: ");
        produtos[index].calcularLucro();

        console.log("\nDados do produto atualizado\n" +
            produtos[index].toString());
    } else {
        console.log("Nenhum produto encontrado!");
    }
}

function removerProduto() {
    let codigo = scanner.question("Digite o codigo do produto que você quer remover: ");
    let index = retornarIndexProduto(codigo);

    if (index !== -1) {
        console.log("O produto abaixo foi removido do estoque\n" +
            produtos[index].toString());
        produtos.splice(index, 1);
    } else {
        console.log("Nenhum produto encontrado!");
    }
}

function gerenciarProduto() {
    let opcao;

    do {
        opcao = menu();
        console.clear();

        switch (opcao) {
            case 1:
                console.log("Sistema de cadastro de produtos\n");
                cadastrarProduto(produtos);
                break;

            case 2:
                pesquisarDadosProduto(produtos);
                break;

            case 3:
                alterarProduto(produtos);
                break;

            case 4:
                removerProduto(produtos);
                break;

            case 5:
                listarProdutos(produtos);
                break;

            case 6:
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== 6)
}

export default {
    gerenciarProduto, produtos, retornarIndexProduto
}