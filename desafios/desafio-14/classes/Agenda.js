import FormatadorData from "../util/FormatadorData.js";

export default class Agenda {

    constructor(paciente, tipoConsulta, dataConsulta) {
        this.paciente = paciente;
        this.tipoConsulta = tipoConsulta;
        this.dataConsulta = dataConsulta;
    }

    toString() {
        return (this.paciente.toString() +
            "\nData consulta\n" +
            FormatadorData.mostrarData(this.dataConsulta) +
            " (" + this.tipoConsulta + ")");
    }
}