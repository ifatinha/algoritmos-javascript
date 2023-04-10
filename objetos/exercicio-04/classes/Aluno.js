class Aluno {

    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }

    toString() {
        console.log("Codigo: " + this.codigo);
        console.log("Nome: " + this.nome);
    }
}

export default Aluno;