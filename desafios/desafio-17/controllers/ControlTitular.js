import Titular from "../classes/Titular.js";
import Address from "../data/Address.js";
import Cpfs from "../data/Cpfs.js";
import Names from "../data/Names.js";
import Phones from "../data/Phones.js";
import ManageDatas from "../utils/ManageDatas.js";

const titulares = [];

function criarTitular() {
    let cpf = Cpfs.gerarCpf();
    let nome = Names.fullName();
    let dataNascimento = ManageDatas.randomDate();
    let telefone = Phones.randomPhone();
    let endereco = Address.randomAddress();

    return new Titular(cpf, nome, dataNascimento, telefone, endereco);
}

function verificarTitularCadastrado(cpf) {
    return titulares.some((titular) => {
        return titular.cpf === cpf;
    })
}

function cadastrarTitulares() {
    for (let i = 0; i < 10; i++) {
        const titular = criarTitular();
        const jaExiste = verificarTitularCadastrado(titular.cpf);

        if (jaExiste === false) {
            titulares.push(titular);
        } else {
            console.log("Já existe um cliente cadastrado com o CPF informado.");
        }
    }
}

function dadosTitulares() {
    titulares.forEach((titular) => {
        console.log(titular.toString());
    })
}

export default { titulares, cadastrarTitulares, dadosTitulares }