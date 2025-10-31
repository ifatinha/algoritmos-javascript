class Compra {
  constructor(produto, cliente, quantidadeProduto) {
    this.produto = produto;
    this.cliente = cliente;
    this.quantidadeProduto = quantidadeProduto;
    this.totalCompra = this.quantidadeProduto * this.produto.preco;
    this.compraDesconto = 0;
  }

  calcularTotalCompra() {
    this.compraDesconto = this.totalCompra - this.cliente.descontoAdicional;
  }

  toString() {
    console.log("Cliente: " + this.cliente.nome);
    console.log("Produto: " + this.produto.numero);
    console.log("Quantidade: " + this.quantidadeProduto);
    console.log("Total Compra: R$" + this.totalCompra.toFixed(2));
    console.log("Total Com Desconto: R$" + this.compraDesconto.toFixed(2));
  }
}

export default Compra;
