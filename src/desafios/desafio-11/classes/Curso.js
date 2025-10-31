export default class Curso {

    constructor(nome, qtdAlunos, valorMensalidade) {
        this.nome = nome;
        this.qtdAlunos = qtdAlunos;
        this.valorMensalidade = valorMensalidade;
        this.receita = 0;
    }

    toString() {
        return (this.nome +
            "\nMensalidade: R$" + this.valorMensalidade.toFixed(2) +
            "\nAlunos: " + this.qtdAlunos +
            "\nReceita: R$" + this.receita+"\n");
    }

    calcularReceita() {
        this.receita = this.qtdAlunos * this.valorMensalidade;
    }
}