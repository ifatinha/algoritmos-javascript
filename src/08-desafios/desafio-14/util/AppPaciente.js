import Names from "../data/Names.js";
import LastNames from "../data/LastNames.js";
import Telefones from "../data/Telefones.js";
import ConveniosLista from "../data/ConveniosLista.js";
import Paciente from "../classes/Paciente.js";

function criarPaciente() {
  let codigo = Math.floor(Math.random() * 999 + 1);
  let nomeCompleto =
    Names.generateRandomName() + " " + LastNames.generateRandomLastName();
  let nomeConvenio = ConveniosLista.generateRandomPlan();
  let celular = Telefones.generateRandomTephone();

  return new Paciente(codigo, nomeCompleto, nomeConvenio, celular);
}

function buscarPacienteMatricula(pacientes, paciente) {
  return pacientes.some((p) => {
    return p.codigo === paciente.codigo;
  });
}

function cadastrarNovoPaciente(pacientes) {
  for (let i = 0; i < 10; i++) {
    const paciente = criarPaciente();
    let jaExiste = buscarPacienteMatricula(pacientes, paciente);

    if (jaExiste === false) {
      console.log(
        "Um paciente com os dados " + paciente.toString() + " foi cadastrado!"
      );
      pacientes.push(paciente);
    } else {
      console.log(
        "Erro! Já existe um paciente cadastrado com o código " + paciente.codigo
      );
    }
  }
  return pacientes;
}

function listarPacientes(pacientes) {
  if (pacientes.length > 0) {
    console.log("Pacientes cadastrados: " + pacientes.length);
    pacientes.forEach((paciente) => {
      console.log(paciente.toString());
    });
  } else {
    console.log("Não existe nenhum paciente cadastrado!");
  }
}

function buscarPacienteIndex(pacientes, codigo) {
  return pacientes.findIndex((paciente) => {
    return paciente.codigo === codigo;
  });
}

function alterarDadosPaciente(pacientes) {
  let codigo = scanner.questionInt("Digite o codigo do paciente: ");
  let index = buscarPacienteIndex(pacientes, codigo);

  if (index !== -1) {
    console.log("Codigo paciente: " + pacientes[index].codigo);
    pacientes[index].nomeCompleto = scanner.question("Novo nome: ");
    pacientes[index].nomeConvenio = scanner.question("Novo convênio: ");
    pacientes[index].celular = scanner.question("Novo telefone: ");

    console.log("Dados alterados com sucesso\n" + pacientes[index].toString());
  } else {
    console.log("Nenhum paciente encontrado!");
  }

  return pacientes;
}

export default {
  cadastrarNovoPaciente,
  listarPacientes,
  alterarDadosPaciente,
  buscarPacienteIndex,
};
