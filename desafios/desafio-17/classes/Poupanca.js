import Conta from "./Conta.js";

export default class Poupanca extends Conta {

    constructor(numero, banco, titular, cartaoDebito, dataAniversario) {
        super(numero, banco, titular, cartaoDebito);
        this.dataAniversario = dataAniversario;
    }

    toString() {
        return (super.toString() + "\n" +
            "Data de rendimento: " + this.dataAniversario+"\n");
    }
}