export default class Aniversariante {
  constructor(nome, dia, mes) {
    this.nome = nome;
    this.dia = dia;
    this.mes = mes;
  }

  toString() {
    return (
      " -> " +
      this.nome +
      " - (Data de Nascimento: " +
      this.dia +
      "/" +
      this.mes +
      ")"
    );
  }

  dataAniversario() {
    return this.dia + "/" + this.mes;
  }
}
