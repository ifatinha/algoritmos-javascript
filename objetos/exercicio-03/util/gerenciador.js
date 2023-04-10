import scanner from 'readline-sync';
import Produto from '../classes/Produto.js';
import Cliente from '../classes/Cliente.js';

function retornarProdutos() {
    const produtos = [];

    const produto1 = new Produto(1, 45);
    produto1.calcularDesconto();
    produtos.push(produto1);

    const produto2 = new Produto(2, 250);
    produto2.calcularDesconto();
    produtos.push(produto2);

    const produto3 = new Produto(3, 120);
    produto3.calcularDesconto();
    produtos.push(produto3);

    return produtos;

}

function retornarClientes() {
    const clientes = [];
    const cliente1 = new Cliente(1, "John Doe", "m");
    cliente1.calcularDescontoAdicional();
    clientes.push(cliente1);

    const cliente2 = new Cliente(2, "Jane Doe", "F");
    cliente2.calcularDescontoAdicional();
    clientes.push(cliente2);

    const cliente3 = new Cliente(3, "Sally Rally", "f");
    cliente3.calcularDescontoAdicional();
    clientes.push(cliente3);

    return clientes;
}

export default { retornarProdutos, retornarClientes }