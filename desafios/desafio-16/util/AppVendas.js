import scanner from 'readline-sync';
import AppCliente from './AppCliente.js';
import Venda from '../classes/Venda.js';
import VendaAPrazo from '../classes/VendaAPrazo.js';
import AppItemVenda from './AppItemVenda.js';
import ItemVenda from '../classes/ItemVenda.js';

let vendas = [];
let itensVendas = [];

function tipoVenda() {
    const tiposVenda = ["A Prazo", "À Vista"];
    return tiposVenda[Math.floor((Math.random() * 2) + 0)];
}

function buscarCliente() {
    let cpf = scanner.question("Digite o cpf do cliente: ");
    let index = AppCliente.retornarIndexCliente(cpf);

    while (index === -1) {
        cpf = scanner.question("CPF não encontrado. Digite o cpf do cliente: ");
        index = AppCliente.retornarIndexCliente(cpf);
    }

    return AppCliente.clientes[index];
}

function criarVenda() {
    const codVenda = vendas.length + 1;
    const tipo = tipoVenda();
    let venda;

    if (tipo === "A Prazo") {
        venda = new Venda(codVenda, tipo);
    } else {
        let cliente = buscarCliente();
        venda = new VendaAPrazo(codVenda, tipo, cliente);
        venda.calcularDataVencimento();
    }

    return venda;
}

function cadastrarProdutosVenda(venda) {
    let novoProduto;

    do {
        const produto = AppItemVenda.buscarProduto();

        if (produto.estoqueAtual > 0) {
            let qtdProduto = scanner.questionInt("Quantidade comprada: ");

            while (qtdProduto > produto.estoqueAtual) {
                qtdProduto = scanner.questionInt("Quantidade superior ao estoque. Digite outro valor: ");
            }

            produto.atualizarEstoque(qtdProduto);

            const itemVenda = new ItemVenda(venda, produto, qtdProduto);
            itemVenda.calcularTotalProdutos();

            console.log("Produto adicionado\n" +
                itemVenda.produto.detalhesProduto());

            itensVendas.push(itemVenda);
            venda.calcularTotalVenda(itemVenda.valorTotalProduto);
            console.clear();
        } else {
            console.log("O produto informado não tem estoque.");
        }

        novoProduto = scanner.questionInt("Adicionar novo produto? (1 - sim/2 - não) ");
        while (novoProduto !== 1 && novoProduto !== 2) {
            novoProduto = scanner.questionInt("Opção inválida! Adicionar novo produto? (1 - sim/2 - não) ");
        }

    } while (novoProduto === 1)
}

function gerenciarVenda() {
    const venda = criarVenda();
    console.log("Venda cadastrada\n" +
        venda.toString());
    vendas.push(venda);

    cadastrarProdutosVenda(venda);
    console.clear();
    mostrarNotaFisca(venda);
}

function mostrarNotaFisca(venda) {
    console.log(venda.toString() +
        "Produtos");
    itensVendas.forEach((item) => {
        if (item.venda.codVenda === venda.codVenda) {
            console.log(item.toString());
        }
    })
}

export default { gerenciarVenda, itensVendas, vendas };