import ManageDatas from "../utils/ManageDatas.js";

export default class Titular {

    constructor(cpf, nome, dataNascimento, telefone, endereco) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    toString() {
        return (this.cpf + " - " + this.nome + "\n" +
            "Data de nascimento: " + ManageDatas.mostrarData(this.dataNascimento) + "\n" +
            "Telefone: " + this.telefone + "\n" +
            "Endereço: " + this.endereco + "\n");
    }
}