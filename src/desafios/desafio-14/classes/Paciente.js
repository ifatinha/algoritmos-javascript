export default class Paciente {

    constructor(codigo, nomeCompleto, nomeConvenio, celular) {
        this.codigo = codigo;
        this.nomeCompleto = nomeCompleto;
        this.nomeConvenio = nomeConvenio;
        this.celular = celular;
    }

    toString() {
        return (this.codigo + ". " + this.nomeCompleto +
            " - " + this.celular +
            " (Convênio: " +
            this.nomeConvenio + ")")
    }
}