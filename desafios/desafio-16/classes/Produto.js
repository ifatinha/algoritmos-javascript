export default class Produto {

    constructor(codigo, descricao, valorCompra, valorVenda, estoqueMinimo, estoqueAtual) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.estoqueMinimo = estoqueMinimo;
        this.estoqueAtual = estoqueAtual;
        this.lucro = 0;
    }

    toString() {
        return (this.codigo + " - " + this.descricao + "\n" +
            "Estoque Atual: " + this.estoqueAtual + "\n" +
            "Estoque Minimo: " + this.estoqueMinimo + "\n" +
            "Preço de compra: R$" + this.valorCompra.toFixed(2) + "\n" +
            "Preço de venda: R$" + this.valorVenda.toFixed(2) + "\n" +
            "Lucro esperado: R$" + this.lucro.toFixed(2) + "\n");
    }

    detalhesProduto() {
        return (this.codigo + ". " + this.descricao +
            " (R$" + this.valorVenda.toFixed(2) + ")");
    }

    calcularLucro() {
        this.lucro = (this.valorVenda - this.valorCompra);
    }

    atualizarEstoque(qtd) {
        this.estoqueAtual -= qtd;
    }

}