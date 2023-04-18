class Funcionario {

    constructor(matricula, salario, tempoServico) {
        this.matricula = matricula;
        this.salario = salario;
        this.tempoServico = tempoServico;
    }

    toString() {
        return this.matricula + " - R$" + this.salario.toFixed(2) +
            " (Tempo de serviço: " + this.tempoServico + " ano(s))"
    }
}

export default Funcionario;