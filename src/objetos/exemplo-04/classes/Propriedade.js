class Propriedade {

    constructor(proprietario, quadra, lote, area, valorVenda) {
        this.proprietario = proprietario;
        this.quadra = quadra;
        this.lote = lote;
        this.area = area;
        this.valorVenda = valorVenda;
        this.situacao = "À venda";
        this.porcentagemComissao = 0.0;
        this.valorComissao = 0.0;
    }

    calcularComissao() {
        if (this.porcentagemComissao > 10) {
            this.porcentagemComissao = 10;
        }

        this.valorComissao = this.valorVenda * (this.porcentagemComissao / 100);
    }

    calculcarIPTU() { }
}

export default Propriedade;