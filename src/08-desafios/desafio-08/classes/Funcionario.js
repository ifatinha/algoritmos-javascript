class Funcionario {
  constructor(matricula, nome, salario) {
    this.matricula = matricula;
    this.nome = nome;
    this.salario = salario;
  }

  toString() {
    return (
      this.matricula +
      ". " +
      this.nome +
      " (" +
      this.salario.categoria +
      " - R$" +
      this.salario.valor.toFixed(2) +
      ")"
    );
  }
}

export default Funcionario;
