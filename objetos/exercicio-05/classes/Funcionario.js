class Funcionario {

    constructor(matricula, nome, cargo, salario) {
        this.matricula = matricula;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    toString() {
        console.log(this.matricula + ". " + this.nome +
            " (" + this.cargo + " - " + this.salario.toFixed(2) + ")");
    }
}

export default Funcionario;