import scanner from 'readline-sync'
import AppPaciente from './AppPaciente.js';
import AppAgenda from './AppAgenda.js';

function menu() {
    return scanner.questionInt("Bem-vindo, escolha uma das opções abaixo\n" +
        "1 - Novo paciente\n" +
        "2 - Listar pacientes\n" +
        "3 - Nova consulta\n" +
        "4 - Alterar paciente\n" +
        "5 - Listar consultas\n" +
        "6 - Sair: ");
}

function cadastrarPaciente(pacientes) {
    return AppPaciente.cadastrarNovoPaciente(pacientes);
}

function listarPacientes(pacientes) {
    AppPaciente.listarPacientes(pacientes);
}

function alterarDadosPaciente(pacientes) {
    return AppPaciente.alterarDadosPaciente(pacientes);
}

function agendarPaciente(pacientes, agenda) {
    agenda = AppAgenda.agendarPaciente(pacientes, agenda);
    return agenda;
}

function listarAgenda(agenda) {
    AppAgenda.listarAgenda(agenda);
}

export default {
    menu, cadastrarPaciente, listarPacientes,
    alterarDadosPaciente, agendarPaciente, listarAgenda
}