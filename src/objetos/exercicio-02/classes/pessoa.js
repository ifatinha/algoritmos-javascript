class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  calcularIdadeMeses(dNascimento) {
    let dataAtual = new Date();
    let dataNascimento = new Date(dNascimento);
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    let mes = dataAtual.getMonth() - dataNascimento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && dataAtual.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    return idade * 12;
  }

  calcularIdadeFuturo() {
    let anoNascimento = new Date().getFullYear() - this.idade;
    return 2050 - anoNascimento;
  }
}

export default Pessoa;
