import Conta from "./Conta.js";

export default class Corrente extends Conta {

    constructor(numero, banco, titular, cartaoDebito, limiteCredito, taxaJuros) {
        super(numero, banco, titular, cartaoDebito);
        this.limiteCredito = limiteCredito;
        this.taxaJuros = taxaJuros;
    }

    toString() {
        return (super.toString() + "\n" +
            "Limite de crédito: R$" + this.limiteCredito + "\n" +
            "Taxa de Juros: " + this.taxaJuros + "% ao mês.\n");
    }
}