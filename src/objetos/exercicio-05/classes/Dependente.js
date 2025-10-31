class Dependente {

    constructor(nome, funcionario) {
        this.nome = nome;
        this.funcionario = funcionario;
    }

    toString() {
        console.log(this.nome);
    }
}

export default Dependente;