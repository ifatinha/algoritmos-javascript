class Produto {

    constructor(codigo, descricao, precoCompra) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.precoCompra = precoCompra;
        this.lucro = 0.0;
        this.precoVenda = 0.0;
    }

    calcularLucro() { }

    toString() { }

    calcularPrecoVenda() {
        this.precoVenda = this.lucro + this.precoCompra;
    }
}

export default Produto;