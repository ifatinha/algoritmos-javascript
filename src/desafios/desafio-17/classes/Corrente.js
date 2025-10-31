import Conta from "./Conta.js";
import Operacao from "./Operacao.js";

export default class Corrente extends Conta {
  constructor(banco, titular, cartaoDebito) {
    super(banco, titular, cartaoDebito);
    this.limiteCredito = 1000;
  }

  toString() {
    return (
      super.toString() +
      "\n" +
      "Limite de crédito: R$" +
      this.limiteCredito +
      "\n"
    );
  }

  deposito(valorDeposito) {
    if (this.limiteCredito < 1000) {
      let valorDevedor = 1000 - this.limiteCredito;

      if (valorDevedor <= valorDeposito) {
        this.limiteCredito += valorDevedor;
        valorDeposito -= valorDevedor;
      } else {
        this.limiteCredito += valorDeposito;
        valorDeposito = 0;
      }
    }

    this.saldo += valorDeposito;
    this.operacoes.push(new Operacao("Deposito", valorDeposito));
    console.log(
      "Deposito feito com sucesso! \n" +
        "Novo saldo: R$" +
        this.saldo.toFixed(2) +
        "\n" +
        "Cheque especial: R$" +
        this.limiteCredito.toFixed(2) +
        "\n"
    );
  }

  saque(valorSaque) {
    if (this.saldo > 0 || this.limiteCredito > 0) {
      if (this.saldo === 0) {
        this.limiteCredito -= valorSaque;
        this.operacoes.push(new Operacao("Saque", valorSaque));
        console.log(
          "Saque realizado com sucesso! \n" +
            "Novo saldo: R$" +
            this.saldo.toFixed(2) +
            "\n" +
            "Cheque Especial: R$" +
            this.limiteCredito.toFixed(2) +
            "\n"
        );
      } else {
        if (valorSaque <= this.saldo + this.limiteCredito) {
          if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
          } else {
            valorSaque -= this.saldo;
            this.saldo = 0;
            this.limiteCredito -= valorSaque;
          }

          this.operacoes.push(new Operacao("Saque", valorSaque));
          console.log(
            "Saque realizado com sucesso! " +
              " Novo saldo: R$" +
              this.saldo.toFixed(2) +
              "\n" +
              "Cheque Especial: R$" +
              this.limiteCredito.toFixed(2) +
              "\n"
          );
        }
      }
    } else {
      console.log("Saldo insuficiente. Tente novamente.");
    }
  }
}
