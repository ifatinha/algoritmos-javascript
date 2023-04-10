import scanner from 'readline-sync';
import Remedio from '../classes/Remedio.js';
import ProdutoHigiene from '../classes/ProdutoHigienico.js';

function menuPrincipal() {
    return scanner.questionInt("Bem-vindo! Escolha uma das opções abaixo\n" +
        "1 - Cadastrar novo produto\n" +
        "2 - Consultar produto mais caro\n" +
        "3 - Listar todos os produtos cadastrados\n" +
        "4 - Alterar produto\n" +
        "5 - Sair\n" +
        "Opção: ");
}

function menuEscolhaProduto() {
    return scanner.questionInt("1 - Cadastrar novo medicamento\n" +
        "2 - Cadastrar produto higiênico\n" +
        "Opção: ");
}

function criarProduto(tipoProtudo) {
    let codigo = scanner.question("Digite o codigo do produto: ");
    let descricao = scanner.question("Digite a descrição do produto: ");
    let precoCompra = scanner.questionFloat("Digite o valor de compra: ");

    if (tipoProtudo === 1) {
        let percentualLucro = scanner.questionFloat("Digite o percentual de lucro: ");
        let dataValidade = scanner.question("Data de validade: ");
        const medicamento = new Remedio(codigo, descricao, precoCompra, percentualLucro, dataValidade);
        return medicamento;
    } else {
        const produtoHigiene = new ProdutoHigiene(codigo, descricao, precoCompra);
        return produtoHigiene;
    }
}

function buscarProduto(codigo, produtos) {
    return produtos.find(function (prod) {
        return prod.codigo === codigo;
    });
}

function cadastrarProduto(produtos) {
    let tipoProduto = menuEscolhaProduto();
    const produto = criarProduto(tipoProduto);
    const prodTem = buscarProduto(produto.codigo, produtos);

    if (prodTem === undefined) {
        produto.calcularLucro();
        produto.calcularPrecoVenda();
        return produto;
    } else {
        return undefined;
    }
}

function retornarProdutoMaisCaro(produtos) {
    produtos.sort(function (p1, p2) {
        return p2.precoCompra - p1.precoCompra;
    });

    return produtos[0];
}

function listarTodosProdutos(produtos) {
    produtos.forEach(function (produto) {
        produto.toString();
    });
}

function alterarProduto(produtos, codigo) {
    const index = produtos.findIndex(function (produto) {
        return produto.codigo === codigo;
    })

    if (index !== -1) {
        produtos[index].toString();
        console.log("Alterar informações do produto!");

        produtos[index].descricao = scanner.question("Descrição: ");
        produtos[index].precoCompra = scanner.questionFloat("Novo Preço: ");

        if (produtos[index] instanceof Remedio) {
            produtos[index].validade = scanner.question("Validade: ");
            produtos[index].percentualLucro = scanner.questionFloat("Percentual de lucro: ");
        }

    } else {
        console.log("Produto Inexistente!");
    }

    return produtos;
}

export default { menuPrincipal, cadastrarProduto, retornarProdutoMaisCaro, listarTodosProdutos, alterarProduto };