export default class Cheque {
  constructor(numBanco, numAgencia, contaNumero) {
    this.numero = this.criarNumeroCheque(numBanco, numAgencia, contaNumero);
    this.valor = 0;
  }

  toString() {
    return (
      "Numero: " +
      this.numero +
      "\n" +
      "Valor: R$" +
      this.valor.toFixed(2) +
      "\n"
    );
  }

  criarNumeroCheque(numBanco, numAgencia, contaNumero) {
    let banco = numBanco;
    let agencia = numAgencia;

    let comp = Math.floor(Math.random() * 899 + 100);
    let num = "0000" + Math.floor(Math.random() * 8999 + 1000);

    let codigo = Math.floor(Math.random() * 899999 + 100000);

    let numero =
      banco +
      "" +
      agencia +
      " " +
      (comp + "" + num) +
      " " +
      codigo +
      "" +
      contaNumero;

    return numero;
  }
}
