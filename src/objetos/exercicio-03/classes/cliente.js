class Cliente {
  constructor(numero, nome, sexo) {
    this.numero = numero;
    this.nome = nome;
    this.sexo = sexo;
    this.descontoAdicional = 0;
  }

  calcularDescontoAdicional() {
    if (this.sexo === "f" || this.sexo === "F") {
      this.descontoAdicional = 5 / 100;
    }
  }
}

export default Cliente;
