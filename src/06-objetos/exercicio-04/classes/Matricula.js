import DisciplinaPratica from "./DisciplinaPratica.js";

class Matricula {
  constructor(serie, aluno, disciplina) {
    this.anoLetivo = new Date().getFullYear();
    this.serie = serie;
    this.aluno = aluno;
    this.disciplina = disciplina;
    this.notas = [0, 0, 0, 0, 0];
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
    console.log("Média: " + this.media.toFixed(2));
  }

  calcularMedia() {
    let totalNotas = 0;

    if (this.disciplina instanceof DisciplinaPratica) {
      for (let i = 0; i < 5; i++) {
        if ((i + 1) % 2 === 0) {
          totalNotas += this.notas[i] * 2;
        } else {
          totalNotas += this.notas[i] * 1;
        }
      }

      this.media = totalNotas / 7;
    } else {
      console.log("Disciplina Normal");
      totalNotas = this.notas.reduce(function (total, nota) {
        return total + nota;
      }, 0);

      this.media = totalNotas / this.notas.length;
    }
  }
}

export default Matricula;
