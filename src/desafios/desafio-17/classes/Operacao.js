export default class Operacao {

    constructor(tipo, valorMovimentado) {
        this.tipo = tipo;
        this.data = new Date();
        this.valorMovimentado = valorMovimentado;
    }

    toString() {
        return ("Tipo: " + this.tipo + "\n" +
            "Data: " + this.data.toLocaleString() + "\n" +
            "Valor Movimentado: R$" + this.valorMovimentado + "\n");
    }
}