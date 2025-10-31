import scanner from "readline-sync";
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

function buscarTitularCpf(cpf) {
  return titulares.findIndex((titular) => {
    return titular.cpf === cpf;
  });
}

function cadastrarTitular() {
  let titular = criarTitular();
  let index = buscarTitularCpf(titular.cpf);

  if (index === -1) {
    titulares.push(titular);
  }

  return titular;
}

function dadosTitulares() {
  titulares.forEach((titular) => {
    console.log(titular.toString());
  });
}

export default {
  titulares,
  dadosTitulares,
  cadastrarTitular,
};
