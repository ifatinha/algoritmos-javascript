import FormatadorData from '../util/FormatadorData.js';
import Entrada from './Entrada.js';

export default class Evento {

    constructor(tipo, descricao, local, dataRealizacao, qtdConvites, custoOrganizacao) {
        this.identificador = Math.floor((Math.random() * 9999999) + 1);
        this.tipo = tipo;
        this.descricao = descricao;
        this.local = local;
        this.dataRealizacao = dataRealizacao;
        this.qtdConvites = qtdConvites;
        this.entradas = [3];
        this.custoOrganizacao = custoOrganizacao;
    }

    toString() {
        return (this.identificador + ". " + this.tipo + "\n" +
            this.descricao + " (" + this.local + ")" + "\n" +
            "Data: " + FormatadorData.mostrarData(this.dataRealizacao) +
            "\nConvites: " + this.qtdConvites + "\n" +
            "Custo de Organização: " + this.custoOrganizacao + "\n" +
            "Entradas: " + this.mostrarEntradas());
    }

    mostrarEntradas() {
        let txt = this.entradas.reduce((txt, entrada) => {
            return (txt + entrada.toString() + "\n");
        }, "")

        return txt;
    }

    calcularEntradas() {
        const tiposEntradas = ["Popular", "Normal", "VIP"];
        let valorEntradaNormal = 0;

        for (let i = 0; i < tiposEntradas.length; i++) {
            let tipo = tiposEntradas[i];
            let valor = 0;

            if (tipo === "Popular") {
                valor = this.custoOrganizacao / this.qtdConvites;
                valorEntradaNormal = valor;
            } else if (tipo === "Normal") {
                valor = valorEntradaNormal + (valorEntradaNormal * 0.1);
            } else if (tipo === "VIP") {
                valor = valorEntradaNormal + (valorEntradaNormal * 0.15);
            }

            this.entradas.push(new Entrada(tipo, valor));
        }
    }
}