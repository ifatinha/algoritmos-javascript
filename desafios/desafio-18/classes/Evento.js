export default class Evento {

    constructor(descricao, local, dataRealizacao, qtdConvites, custoOrganizacao) {
        this.identificador = Math.floor((Math.random() * 9999999) + 1);
        this.descricao = descricao;
        this.local = local;
        this.dataRealizacao = dataRealizacao;
        this.qtdConvites = qtdConvites;
        this.entradas = [3];
        this.custoOrganizacao = custoOrganizacao;
    }

    toString() {
        return (this.identificador + ". " + this.descricao + " (" + this.local + ")" + "\n" +
            "Data: " + this.dataRealizacao.toLocaleDateString() +
            "\n" +
            "Convites: " + this.qtdConvites + "\n" +
            "Entradas: " + this.mostrarEntradas() + "\n" +
            "Custo de Organização: " + this.custoOrganizacao + "\n");
    }

    mostrarEntradas() {
        let txt = this.entradas.reduce((txt, entrada) => {
            return (txt + entrada.toString() + "\n");
        })

        return txt;
    }
}