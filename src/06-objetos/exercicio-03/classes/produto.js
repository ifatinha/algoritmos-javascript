class Produto {
  constructor(numero, preco) {
    this.numero = numero;
    this.preco = preco;
    this.desconto = 0;
  }

  calcularDesconto() {
    if (this.preco > 100) {
      this.desconto = this.preco * (15 / 100);
      this.preco = this.preco - this.desconto;
    } else {
      this.desconto = this.preco * (5 / 100);
      this.preco = this.preco - this.desconto;
    }
  }

  toString() {
    console.log("Número: " + this.numero);
    console.log("Preço: R$" + this.preco.toFixed(2));
    console.log("Desconto: R$" + this.desconto.toFixed(2) + "\n");
  }
}

export default Produto;
