export default class Aluno {
  constructor(matricula, pontuacao) {
    this.matricula = matricula;
    this.pontuacao = pontuacao;
  }

  toString() {
    return this.matricula + " - (" + this.pontuacao + " pontos)";
  }
}
