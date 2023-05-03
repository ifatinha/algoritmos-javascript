import Bebida from "./Bebida.js";
import Evento from "./Evento.js";
import Entrada from './Entrada.js';
import scanner from 'readline-sync'

export default class Festa extends Evento {

    constructor(tipo, descricao, local, dataRealizacao, qtdConvites, valorEntrada, custoOrganizacao) {
        super(tipo, descricao, local, dataRealizacao, qtdConvites, valorEntrada, custoOrganizacao);
        this.bebidas = [];
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
        let valor = 0.0;

        for (let i = 0; i < tiposEntradas.length; i++) {
            if (tiposEntradas[i] === "Popular") {
                if (this.tipo === "Open Bar") {
                    let lucroBebidas = this.bebidas.reduce((total, bebida) => {
                        return total + (bebida.valorUnitario * 0.5);
                    }, 0)
                    valor = (30 + lucroBebidas);
                } else {
                    valor = (this.custoOrganizacao / this.qtdConvites);
                }
                valorEntradaNormal = valor;
            } else if (tiposEntradas[i] === "Normal") {
                valor = valorEntradaNormal + (valorEntradaNormal * 0.1);
            } else if (tiposEntradas[i] === "VIP") {
                valor = valorEntradaNormal + (valorEntradaNormal * 0.15);
            }

            this.entradas.push(new Entrada(tiposEntradas[i], valor));
        }
    }
}