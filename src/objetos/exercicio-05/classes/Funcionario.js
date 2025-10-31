class Funcionario {
  constructor(matricula, nome, cargo, salario) {
    this.matricula = matricula;
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.dependentes = [];
    this.bonus = 0;
  }

  calcularBonusDependentes() {
    let totalBonus = this.dependentes.length * 2;
    this.bonus = this.salario * (totalBonus / 100);
  }

  toString() {
    console.log(
      this.matricula +
        ". " +
        this.nome +
        " (" +
        this.cargo +
        " - R$" +
        this.salario.toFixed(2) +
        ")"
    );

    if (this.dependentes.length > 0) {
      console.log("Dependentes");
      this.dependentes.forEach(function (dep) {
        dep.toString();
      });
    } else {
      console.log("Dependentes: 0");
    }
  }
}

export default Funcionario;
