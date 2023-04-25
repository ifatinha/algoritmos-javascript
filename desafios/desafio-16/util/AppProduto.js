import scanner from 'readline-sync';
import ListaProdutos from '../data/ListaProdutos.js';
import Produto from '../classes/Produto.js';

function menu() {
    return scanner.questionInt("Manutenção de Produtos\n" +
        "1 - Cadastrar Produto\n" +
        "2 - Consultar Produto\n" +
        "3 - Alterar Produto\n" +
        "4 - Excluir Produto\n" +
        "5 - Produtos Cadastrados\n" +
        "6 - Sair: ");
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

function buscarProdutoCodigo(produtos, codigo) {
    return produtos.some((produto) => {
        return produto.codigo === codigo;
    })
}

function cadastrarProduto(produtos) {
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

    return produtos;
}

function listarProdutos(produtos) {
    if (produtos.length > 0) {
        console.log("Produtos cadastrados\n");
        produtos.forEach((produto) => {
            console.log(produto.toString());
        })
    } else {
        console.log("Não existe nenhum produto cadastrado.")
    }
}

function buscarProduto(produtos, codigo) {
    return produtos.findIndex((produto) => {
        return produto.codigo === codigo;
    })
}

function pesquisarDadosProtudos(produtos) {
    let codigo = scanner.question("Digite o codigo do produto: ");
    let index = buscarProduto(produtos, codigo);

    if (index !== -1) {
        console.log("Detalhes do produto\n" +
            produtos[index].toString());
    } else {
        console.log("Nenhum produto encontrado!");
    }
}

function alterarProduto(produtos) {
    let codigo = scanner.question("Digite o codigo do produto: ");
    let index = buscarProduto(produtos, codigo);

    if (index !== -1) {
        console.log("Detalhes do produto\n" +
            produtos[index].toString());

        
    } else {
        console.log("Nenhum produto encontrado!");
    }
}

function gerenciarProduto(produtos) {
    let opcao;

    do {
        opcao = menu();

        switch (opcao) {
            case 1:
                console.clear();
                console.log("Sistema de cadastro de produtos\n");
                produtos = cadastrarProduto(produtos);
                break;

            case 2:
                console.clear();
                pesquisarDadosProtudos(produtos);
                break;

            case 3:
                break;

            case 4:
                break;

            case 5:
                console.clear();
                listarProdutos(produtos);
                break;

            case 6:
                console.log("Encerrando aplicação!");
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== 6)

    return produtos;
}

export default {
    gerenciarProduto
}