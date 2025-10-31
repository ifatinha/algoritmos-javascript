export default class Entrada {
  constructor(tipo, valor) {
    this.tipo = tipo;
    this.valor = valor;
  }

  toString() {
    return this.tipo + " (R$" + this.valor.toFixed(2) + ")";
  }
}
