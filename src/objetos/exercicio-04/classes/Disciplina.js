class Disciplina {

    constructor(codigo, nome, cagaHorariaGeral) {
        this.codigo = codigo;
        this.nome = nome;
        this.cagaHorariaGeral = cagaHorariaGeral;
    }

    toString() {
        console.log(this.codigo + ". " + this.nome + " (" + this.cagaHorariaGeral + ")");
    }
}

export default Disciplina;