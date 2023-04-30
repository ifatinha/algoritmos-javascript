import Bancos from "../data/Bancos.js";
import Cheque from "./Cheque.js";
import Operacao from "./Operacao.js";

export default class Conta {

    constructor(banco, titular, cartaoDebito) {
        this.numero = "";
        this.agencia = Math.floor((Math.random() * 8999) + 1000);
        this.banco = banco;
        this.titular = titular;
        this.cartaoDebito = cartaoDebito;
        this.talaoCheque = [];
        this.saldo = 0;
        this.operacoes = [];
    }

    toString() {
        return ("Titular: " + this.titular.toString() +
            "Conta: " + this.numero + "\n" +
            "Agência: " + this.agencia + "\n" +
            "Banco:  " + Bancos.detalhesBanco(this.banco) + ")\n" +
            "Saldo: R$" + this.saldo + "\n" +
            "\nCartão de crédito\n" + this.cartaoDebito.toString() + "\n" +
            "\nCheques disponiveis: " + this.talaoCheque.length + "\n" +
            this.mostrarCheques());
    }

    mostrarCheques() {
        let txt;

        if (this.talaoCheque.length > 0) {
            txt = this.talaoCheque.reduce((txt, cheque) => {
                return txt + cheque.toString();
            }, "")
        }

        return txt;
    }

    criarNumeroConta() {
        let num = Math.floor((Math.random() * 99999999) + 10000);
        let digito = Math.floor((Math.random() * 10) + 0);

        this.numero = num + "-" + digito;
    }

    cadastrarCheques() {
        for (let i = 0; i < 5; i++) {
            this.talaoCheque.push(new Cheque(this.banco.value, this.agencia, this.numero));
        }
    }

    extrato() {
        if (this.operacoes.length > 0) {
            console.log("Extrato\n");
            this.operacoes.forEach((operacao) => {
                console.log(operacao.toString());
            });
        } else {
            console.log("Nenhuma movimentação encontrada.");
        }

        console.log("Saldo do dia: R$" + this.saldo.toFixed(2));
    }

    deposito(valorDeposito) {
        this.saldo += valorDeposito;
        this.operacoes.push(new Operacao("Deposito", valorDeposito));
        console.log("Deposito feito com sucesso! " +
            " Novo saldo: R$" + this.saldo.toFixed(2));
    }

    saque(valorSaque) {
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
            this.operacoes.push(new Operacao("Saque", valorSaque));
            console.log("Saque realizado com sucesso! " +
                " Novo saldo: R$" + this.saldo.toFixed(2));
        } else {
            console.log("Saldo insuficiênte. Tenta novamente.");
        }
    }

    atualizarCheque(valorCheque) {
        this.talaoCheque[0].valor = valorCheque;
        console.log("O cheque abaixo foi removido\n" +
            this.talaoCheque[0].toString());
        this.talaoCheque.shift();
        this.operacoes.push(new Operacao("Cheque", valorCheque));
    }
}