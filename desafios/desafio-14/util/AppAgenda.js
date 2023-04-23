import scanner from 'readline-sync';
import AppPaciente from './AppPaciente.js';
import Agenda from '../classes/Agenda.js';
import FormatadorData from './FormatadorData.js';

function tiposConsulta() {
    const tipo = ["Normal", "Retorno"];
    return tipo[Math.floor((Math.random() * 2) + 0)];
}

function criarAgenda(pacientes) {
    let eValido;

    let stringData = scanner.question("Data de atendimento (dd/mm/aaaa): ");
    eValido = stringData.match(FormatadorData.paternData());
    while (eValido === null) {
        stringData = scanner.question("Data inválida! Digite uma data no formato (dd/mm/aaaa): ");
        eValido = stringData.match(FormatadorData.paternData());
    }

    let stringHora = scanner.question("Hora do atendimento (hh:mm): ");
    eValido = stringHora.match(FormatadorData.paternHora());
    while (eValido === null) {
        stringHora = scanner.question("Formato inválido! Digite um horario no formato (hh:mm): ");
        eValido = stringHora.match(FormatadorData.paternHora());
    }

    let dataConsulta = FormatadorData.montarData(stringData, stringHora);

    let tipoConsulta = tiposConsulta();

    let codigoPaciente = scanner.questionInt("Codigo paciente: ");
    let index = AppPaciente.buscarPacienteIndex(pacientes, codigoPaciente);

    while (index === -1) {
        codigoPaciente = scanner.questionInt("Paciente não encontrado! Informe o codigo do paciente novamente: ");
        index = AppPaciente.buscarPacienteIndex(pacientes, codigoPaciente);
    }

    return new Agenda(pacientes[index], tipoConsulta, dataConsulta);
}

function buscarAgendamento(agendaPaciente, agenda) {
    return agenda.some((a) => {
        return (a.dataConsulta.getTime() === agendaPaciente.dataConsulta.getTime())
    })
}

function agendarPaciente(pacientes, agenda) {
    let agendaPaciente = criarAgenda(pacientes);
    let jaExiste = buscarAgendamento(agendaPaciente, agenda);

    if (jaExiste === false) {
        console.log("Foi criado um agendamento com os seguintes dados: \n" +
            agendaPaciente.toString());
        agenda.push(agendaPaciente);
    } else {
        console.log("Erro! Já existe uma agenda para o dia " +
            agendaPaciente.data + " às " + agendaPaciente.hora);
    }

    return agenda;
}

function listarAgenda(agenda) {
    if (agenda.length > 0) {
        console.log("Consultas marcadas");
        agenda.forEach((agenda) => {
            console.log(agenda.toString());
        })
    } else {
        console.log("Nenhum paciente agendado!");
    }
}

export default { agendarPaciente, listarAgenda }