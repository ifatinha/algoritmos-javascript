import GerarNumeroNF from "../util/GerarNumeroNF.js";

export default class Venda {

    constructor(codVenda, tipoVenda) {
        this.codVenda = codVenda;
        this.notaFiscal = GerarNumeroNF.gerarNumeroNotaFiscal();
        this.dataVenda = new Date();
        this.tipoVenda = tipoVenda;
        this.valorTotalVenda = 0;
    }

    toString() {
        return ("\nDetalhes da venda \n" +
            "Número da venda: " + this.codVenda + "\n" +
            "Nota fiscal: " + this.notaFiscal + "\n" +
            "Data Venda: " + this.dataVenda.toLocaleDateString() + " (" +
            this.tipoVenda + ") \n")
    }
}