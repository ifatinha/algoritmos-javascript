export default class ItemVenda {

    constructor(venda, produto, qtdProduto) {
        this.venda = venda;
        this.produto = produto;
        this.qtdProduto = qtdProduto;
        this.valorVenda = 0;
    }

    toString() {
        return ("Detalhes da venda\n" +
            this.venda.toString() + "\n" +
            this.produto.detalhesProduto() + "\n" +
            "Quantidade vendida: " + this.qtdProduto)
    }

    getVendas() {
        this.valorVenda = (this.qtdProduto * this.produto.valorVenda);
    }
}