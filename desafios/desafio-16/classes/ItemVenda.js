export default class ItemVenda {

    constructor(venda, produto, qtdProduto) {
        this.venda = venda;
        this.produto = produto;
        this.qtdProduto = qtdProduto;
        this.valorTotalProduto = 0;
    }

    toString() {
        return ("Detalhes da venda\n" +
            this.venda.toString() + "\n" +
            this.produto.detalhesProduto() + "\n" +
            "Quantidade: " + this.qtdProduto)
    }

    calcularTotalProdutos() {
        this.valorTotalProduto = (this.qtdProduto * this.produto.valorVenda);
    }
}