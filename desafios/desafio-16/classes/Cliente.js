export default class Cliente {

    constructor(codigo, nomeCompleto, endereco, telefone) {
        this.codigo = codigo;
        this.nomeCompleto = nomeCompleto;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    toString() {
        return (this.codigo + ". " + this.nomeCompleto + " (" +
            this.endereco + " - " + this.telefone + ")\n");
    }
}