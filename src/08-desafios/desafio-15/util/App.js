import scanner from "readline-sync";
import AppProduto from "./AppProduto.js";

function menu() {
  return scanner.questionInt(
    "Bem-vindo! Escolha uma das opções abaixo\n" +
      "1 - Cadastrar novo produto\n" +
      "2 - Listar produtos do estoque\n" +
      "3 - Retirar produto do estoque\n" +
      "4 - Produtos sem estoque minimo\n" +
      "5 - Balanço do estoque\n" +
      "6 - Sair: "
  );
}

function cadastrarPoduto(produtos) {
  return AppProduto.cadastrarProduto(produtos);
}

function produtosCadastrados(produtos) {
  AppProduto.listarProdutos(produtos);
}

function atualizarEstoque(produtos) {
  return AppProduto.atualizarEstoque(produtos);
}

function produtosComEstoqueBaixo(produtos) {
  AppProduto.listarProdutosEstoqueBaixo(produtos);
}

function balancoEstoque(produtos) {
  console.log(
    "Valor total do estoque: R$" +
      AppProduto.balancoEstoque(produtos).toFixed(2)
  );
}

export default {
  menu,
  cadastrarPoduto,
  produtosCadastrados,
  atualizarEstoque,
  produtosComEstoqueBaixo,
  balancoEstoque,
};
