class Matricula {

    constructor(serie, aluno, disciplina) {
        this.anoLetivo = new Date().getFullYear();
        this.serie = serie;
        this.aluno = aluno;
        this.disciplina = disciplina;
        this.notas = [0, 0, 0, 0, 0];
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
            console.log(contador + "º nota ---> " + nota);
            contador++;
        });
    }
}

export default Matricula;