export default class Venda {

    constructor(codVenda, dataVenda, tipoVenda, cliente, dataVencimento) {
        this.codVenda = codVenda;
        this.dataVenda = dataVenda;
        this.tipoVenda = tipoVenda;
        this.cliente = cliente;
        this.dataVencimento = dataVencimento;
    }

    toString() {
        return (this.codVenda + ". " + this.dataVenda + " (" +
            this.tipoVenda + ") \n" +
            "Data de vencimento: " + this.dataVencimento + "\n" +
            "Cliente: " + this.cliente.toString() + "\n");
    }
}