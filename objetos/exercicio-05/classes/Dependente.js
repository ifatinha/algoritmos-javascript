class Dependente {

    constructor(nome, funcionario) {
        this.nome = nome;
        this.funcionario = funcionario;
    }

    toString() {
        console.log("Dependente: " + this.nome);
        this.funcionario.toString();
    }
}

export default Dependente;