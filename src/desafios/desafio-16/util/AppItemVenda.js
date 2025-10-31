import scanner from "readline-sync";
import AppProduto from "./AppProduto.js";
import AppVendas from "./AppVendas.js";

function buscarProduto() {
  let codProduto = scanner.question("Codigo do produto: ");
  let index = AppProduto.retornarIndexProduto(codProduto);

  while (index === -1) {
    codProduto = scanner.question("Codigo do produto: ");
    index = AppProduto.retornarIndexProduto(codProduto);
  }

  return AppProduto.produtos[index];
}

function listarVendas() {
  let itensVendas = AppVendas.itensVendas;
  let listaVendas = AppVendas.vendas;

  if (listaVendas.length > 0) {
    console.log("RELATORIO DE VENDAS");
    listaVendas.forEach((venda) => {
      console.log(venda.toString());

      const produtos = itensVendas.filter((itemVenda) => {
        return itemVenda.venda.codVenda === venda.codVenda;
      });

      console.log("Produtos\n");
      produtos.forEach((produto) => {
        console.log(produto.toString() + "\n");
      });
    });
  } else {
    console.log("Nenhuma venda cadastrada.");
  }
}

export default { buscarProduto, listarVendas };
