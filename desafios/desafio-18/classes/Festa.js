import Bebida from "./Bebida.js";
import Evento from "./Evento.js";
import Entrada from './Entrada.js';
import scanner from 'readline-sync'

export default class Festa extends Evento {

    constructor(tipo, descricao, local, dataRealizacao, qtdConvites, valorEntrada, custoOrganizacao) {
        super(tipo, descricao, local, dataRealizacao, qtdConvites, valorEntrada, custoOrganizacao);
        this.bebidas = [4];
    }

    toString() {
        return (super.toString() + "\n" +
            "Bebidas\n" +
            this.bebidasCadastradas())
    }

    cadastrarBebidas() {
        const nomesBebidas = ["Cachaça", "Cerveja", "Energético", "Gin", "Licor",
            "Rum", "Saquê", "Tequila", "Vinho", "Espumante", "Vodka", "Cachaça", "Conhaque",
            "Refrigerante", "Suco"];

        for (let i = 0; i < 4; i++) {
            console.clear();
            let nome = nomesBebidas[Math.floor((Math.random() * 14) + 0)];
            console.log("Bebida: " + nome);
            let teorAlcool = scanner.questionFloat("Teor de Alcool: ");
            let preco = scanner.questionFloat("Preço Unitario: ");
            this.bebidas.push(new Bebida(nome, teorAlcool, preco));
        }
    }

    bebidasCadastradas() {
        let txt = this.bebidas.reduce((txt, bebida) => {
            return (txt + bebida + "\n");
        }, "");

        return txt;
    }

    calcularEntradas() {
        const tiposEntradas = ["Popular", "Normal", "VIP"];
        let valorEntradaNormal = 0;

        for (let i = 0; i < tiposEntradas.length; i++) {
            let tipo = tiposEntradas[i];
            let valor = 0;

            if (tipo === "Popular") {
                if (this.tipo === "Open Bar") {
                    valor = 30;
                    for (let j = 0; j < this.bebidas.length; j++) {
                        valor += (this.bebidas[j].valorUnitario * 0.5);
                    }
                } else {
                    valor = this.custoOrganizacao / this.qtdConvites;

                }
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