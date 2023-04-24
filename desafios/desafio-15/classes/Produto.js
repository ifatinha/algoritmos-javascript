export default class Produto {

    constructor(codigo, descricao, qtdEstoque, qtdMinima, valorUnitario) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.qtdEstoque = qtdEstoque;
        this.qtdMinima = qtdMinima;
        this.valorUnitario = valorUnitario;
    }

    toString() {
        return (this.codigo + ". " + this.descricao + " (R$" + this.valorUnitario.toFixed(2) + ")\n" +
            "Estoque atual: " + this.qtdEstoque + "\n" +
            "Estoque minimo: " + this.qtdMinima)
    }

}