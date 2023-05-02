import Bebida from "./Bebida.js";
import Evento from "./Evento.js";

export default class Festa extends Evento{

    constructor(descricao, local, dataRealizacao, qtdConvites, valorEntrada, custoOrganizacao) {
        super(descricao, local, dataRealizacao, qtdConvites, valorEntrada, custoOrganizacao);
        this.bebidas = [4];
    }

    toString() {
        return (super.toString() + "\n" +
            "Bebidas\n" +
            this.bebidasCadastradas())
    }

    bebidasCadastradas() {
        let txt = this.bebidas.reduce((txt, bebida) => {
            return (txt + bebida + "\n");
        }, "");

        return txt;
    }
}