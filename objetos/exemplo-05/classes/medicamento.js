import Produto from "./produto.js";

class Medicamento extends Produto {

    constructor(codigo, descricao, precoCompra, percentualLucro, validade) {
        super(codigo, descricao, precoCompra);
        this.percentualLucro = percentualLucro;
        this.validade = validade;
    }

    calcularLucro() {
        this.lucro = this.precoCompra * (this.percentualLucro / 100);
    }

    toString() {
        console.log("Código: " + this.codigo);
        console.log("Descrição: " + this.descricao);
        console.log("Validade: " + this.validade);
        console.log("Percentual de lucro: " + this.percentualLucro + "%");
        console.log("Preço de Compra: R$" + this.precoCompra.toFixed(2));
        console.log("Preço de Venda: R$" + this.precoVenda.toFixed(2));
        console.log("Lucro Estimado: R$" + this.lucro.toFixed(2) + "\n");
    }
}

export default Medicamento;