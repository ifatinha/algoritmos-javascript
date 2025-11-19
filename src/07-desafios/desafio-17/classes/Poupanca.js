import Conta from "./Conta.js";

export default class Poupanca extends Conta {
  constructor(banco, titular, cartaoDebito) {
    super(banco, titular, cartaoDebito);
    this.diaAniversario = 5;
    this.taxaJuros = 0.05;
  }

  toString() {
    return (
      super.toString() +
      "\n" +
      "Taxa de juros: " +
      this.taxaJuros +
      "\n" +
      "Data de rendimento: " +
      this.diaAniversario +
      "\n"
    );
  }

  calcularRendimentos() {
    let data = new Date();

    if (data.getDate() === this.dataAniversario) {
      if (this.saldo > 0) {
        this.saldo += this.saldo * this.taxaJuros;
      }
    }
  }
}
