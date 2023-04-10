class Disciplina {

    constructor(codigo, nome, cagaHorariaGeral) {
        this.codigo = codigo;
        this.nome = nome;
        this.cagaHorariaGeral = cagaHorariaGeral;
    }

    toString() {
        console.log("Codigo: " + this.codigo);
        console.log("Nome: " + this.nome);
        console.log("Carga Horaria Geral: " + this.cagaHorariaGeral);
    }
}

export default Disciplina;