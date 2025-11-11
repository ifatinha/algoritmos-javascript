import Venda from "./Venda.js";

export default class VendaAPrazo extends Venda {
  constructor(codVenda, tipoVenda, cliente) {
    super(codVenda, tipoVenda);
    this.cliente = cliente;
    this.dataVencimento = new Date();
  }

  toString() {
    return (
      super.toString() +
      "Data de Vencimento: " +
      this.dataVencimento.toLocaleString() +
      "\n" +
      this.cliente.toString()
    );
  }

  calcularDataVencimento() {
    this.dataVencimento.setMonth(this.dataVenda.getMonth() + 1);
  }
}
