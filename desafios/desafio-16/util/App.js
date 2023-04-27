import scanner from 'readline-sync'
import AppProduto from './AppProduto.js';
import AppCliente from './AppCliente.js';
import AppVendas from './AppVendas.js';
import AppRelatorios from './AppRelatorios.js';

function menu() {
    return scanner.questionInt("Bem-vindo! Digite umas das opções abaixo\n" +
        "1 - Manuntenção de produtos\n" +
        "2 - Manunteção de clientes\n" +
        "3 - Manutenção de vendas\n" +
        "4 - Relatórios\n" +
        "5 - Sair: ")
}

function manutencaoProduto() {
    AppProduto.gerenciarProduto();
}

function manutencaoClientes() {
    AppCliente.gerenciarCliente();
}

function manutencaoVendas(vendas) {
    AppVendas.gerenciarVenda();
}

function relatorios(){
    AppRelatorios.gerenciarRelatorios();
}

export default {
    menu, manutencaoClientes,
    manutencaoProduto,
    manutencaoVendas,
    relatorios
}