import Bancos from "../data/Bancos";

export default class Conta {

    constructor(banco, titular, cartaoDebito) {
        this.numero = "";
        this.agencia = Math.floor((Math.random() * 8999) + 1000);
        this.banco = banco;
        this.titular = titular;
        this.cartaoDebito = "";
        this.talaoCheque = [5];
        this.saldo = 0;
    }

    toString() {
        return ("Conta :" + this.numero + "\n" +
            "Agência :" + this.agencia + "\n" +
            "Banco:  " + Bancos.detalhesBanco(this.banco) + ")\n" +
            "Titular: " + this.titular.toString() +
            "Saldo R$: R$" + this.saldo + "\n" +
            "Cartão de crédito: " + this.cartaoDebito + "\n" +
            this.mostrarCheques());
    }

    mostrarCheques() {
        if (this.talaoCheque.length > 0) {
            console.log("Cheques disponiveis");
            this.talaoCheque.forEach((cheque) => {
                console.log(cheque.toString());
            })
        } else {
            console.log("O cliente não possui cheques cadastrados.");
        }
    }

    criarNumeroConta() {
        let num = Math.floor((Math.random() * 99999999) + 10000);
        let digito = Math.floor((Math.random() * 10) + 0);

        this.numero = num + "-" + digito;
    }

}