import scanner from 'readline-sync';
import AppCliente from './AppCliente.js';
import Venda from '../classes/Venda.js';
import VendaAPrazo from '../classes/VendaAPrazo.js';

let vendas = [];

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

function gerenciarVenda() {
    const venda = criarVenda();
    console.log("Venda cadastrada\n" +
        venda.toString());
    vendas.push(venda);
}

export default { gerenciarVenda };