export default class Cliente {
  constructor(cpf, nomeCompleto, endereco, telefone) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.endereco = endereco;
    this.telefone = telefone;
  }

  toString() {
    return (
      this.cpf +
      " - " +
      this.nomeCompleto +
      "\n" +
      "Tel.: " +
      this.telefone +
      "\n" +
      "(" +
      this.endereco +
      ")\n"
    );
  }
}
