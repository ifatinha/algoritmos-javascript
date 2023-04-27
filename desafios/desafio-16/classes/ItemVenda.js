export default class ItemVenda {

    constructor(venda, produto, qtdProduto) {
        this.venda = venda;
        this.produto = produto;
        this.qtdProduto = qtdProduto;
        this.valorTotalProduto = 0;
    }

    toString() {
        return (this.produto.detalhesProduto() + "\n" +
            "Quantidade: " + this.qtdProduto + "\n" +
            "Total R$" + this.valorTotalProduto.toFixed(2));
    }

    calcularTotalProdutos() {
        this.valorTotalProduto = (this.qtdProduto * this.produto.valorVenda);
    }
}