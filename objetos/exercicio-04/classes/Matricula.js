class Matricula {

    constructor(serie, aluno, disciplina) {
        this.anoLetivo = new Date().getFullYear();
        this.serie = serie;
        this.aluno = aluno;
        this.disciplina = disciplina;
        this.notas = [];
        this.media = 0;
    }

    toString() {
        let contador = 1;
        console.log("Dados da Matricula");
        console.log("Ano Letivo: " + this.anoLetivo);
        console.log("Série: " + this.serie);
        this.aluno.toString();
        this.disciplina.toString();
        console.log("Notas");
        this.notas.forEach(function (nota) {
            console.log(contador + "º Bim. ---> " + nota);
            contador++;
        });
        console.log("Média: " + this.media);
    }

    calcularMedia() {
        let totalNotas = this.notas.reduce(function (total, nota) {
            return total + nota;
        }, 0);

        this.media = totalNotas / this.notas.length;
    }
}

export default Matricula;