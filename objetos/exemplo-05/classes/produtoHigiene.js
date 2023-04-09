import Produto from "./produto.js";

class ProdutoHigiene extends Produto {

    constructor(codigo, descricao, precoCompra) {
        super(codigo, descricao, precoCompra);
    }

    calcularLucro() {
        this.lucro = this.precoCompra * (30 / 100);
    }

    toString() {
        console.log("Código: " + this.codigo);
        console.log("Descrição: " + this.descricao);
        console.log("Preço de Compra: R$" + this.precoCompra.toFixed(2));
        console.log("Preço Venda: R$" + this.precoVenda.toFixed(2));
        console.log("Lucro Estimado: R$" + this.lucro.toFixed(2) + "\n");
    }
}

export default ProdutoHigiene;