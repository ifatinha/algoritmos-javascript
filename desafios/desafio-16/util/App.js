import scanner from 'readline-sync'
import AppProduto from './AppProduto.js';

function menu() {
    return scanner.questionInt("Bem-vindo! Digite umas das opções abaixo\n" +
        "1 - Manuntenção de produtos\n" +
        "2 - Manunteção de clientes\n" +
        "3 - Manutenção de vendas\n" +
        "4 - Consultar vendas\n" +
        "5 - Sair: ")
}

function manutencaoProduto(produtos) {
    return AppProduto.gerenciarProduto(produtos);
}

function manutencaoClientes(clientes) {

}

function manutencaoVendas(vendas) {

}

export default {
    menu, manutencaoClientes,
    manutencaoProduto,
    manutencaoVendas
}