class Aluno {
  constructor(codigo, nome) {
    this.codigo = codigo;
    this.nome = nome;
  }

  toString() {
    console.log(this.codigo + ". " + this.nome);
  }
}

export default Aluno;
