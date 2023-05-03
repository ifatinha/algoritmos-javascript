import scanner from 'readline-sync'
import FormatadorData from '../util/FormatadorData.js';
import Festa from '../classes/Festa.js';
import Evento from '../classes/Evento.js';

const eventos = [];

function menu() {
    return scanner.questionInt("Bem-vindo! Escolha uma das opções abaixo\n" +
        "1 - Novo Evento\n" +
        "2 - Consultar Evento\n" +
        "3 - Eventos Cadastrados\n" +
        "4 - Sair: ");
}

function tiposEventos() {
    const tipos = ["Balada", "Open Bar", "Rave", "Social", "Tardezinha"];
    return tipos[Math.floor((Math.random() * 4) + 0)]
}

function dataEvento() {
    let eValido;

    let stringData = scanner.question("Data de realização: (dd/mm/yyyy): ");
    eValido = stringData.match(FormatadorData.paternData());

    while (eValido === null) {
        console.log("Formato inválido!");
        stringData = scanner.question("Data de realização: (dd/mm/yyyy): ");
        eValido = stringData.match(FormatadorData.paternData());
    }

    let stringHora = scanner.question("Hora do atendimento (hh:mm): ");
    eValido = stringHora.match(FormatadorData.paternHora());

    while (eValido === null) {
        stringHora = scanner.question("Formato inválido! Digite um horario no formato (hh:mm): ");
        eValido = stringHora.match(FormatadorData.paternHora());
    }

    return FormatadorData.montarData(stringData, stringHora);

}

function cadastrarEvento() {
    let tipoEvento = tiposEventos();
    console.log("Tipo de Evento: " + tipoEvento);
    let descricao = scanner.question("Descrição: ");
    let local = scanner.question("Local: ");
    let data = dataEvento();
    let qtdConvites = scanner.questionInt("Quantidade de Convites: ");
    let custoOrganizacao = scanner.questionFloat("Custo de organização: ");

    if (tipoEvento === "Open Bar") {
        const festa = new Festa(tipoEvento, descricao, local, data, qtdConvites, custoOrganizacao);
        festa.cadastrarBebidas();
        festa.calcularEntradas();
        console.log("Foi cadastrado um evendo com os dados abaixo\n" +
            festa.toString());
        eventos.push(festa);
    } else {
        const evento = new Evento(tipoEvento, descricao, local, data, qtdConvites, custoOrganizacao);
        evento.calcularEntradas();
        console.log("Foi cadastrado um evendo com os dados abaixo\n" +
            evento.toString());
        eventos.push(evento);
    }
}

function consultarEvento() {
    let codigo = scanner.questionInt("Digite o codigo do evento: ");
    let index = eventos.findIndex((evento) => {
        return evento.identificador === codigo;
    })

    if (index !== -1) {
        console.log("Detalhes do Evendo\n" +
            eventos[index].toString());
    } else {
        console.log("Não foi encontrado eventos com o codigo cadastrado!");
    }
}

function eventosCadastrados() {
    if (eventos.length > 0) {
        console.log("Eventos Cadastrados\n");
        eventos.forEach((evento) => {
            console.log(evento.toString());
        })
    } else {
        console.log("Nenhum evento cadastrado.");
    }
}

function programaPrincipal() {
    let opcao;

    do {
        opcao = menu();
        console.clear();
        switch (opcao) {

            case 1:
                cadastrarEvento();
                break;

            case 2:
                consultarEvento();
                break;

            case 3:
                eventosCadastrados();
                break;

            case 4:
                console.log("Encerrando aplicação!");
                break;

            default:
                console.log("Opção inválida!");
                break;
        }

    } while (opcao !== 4)
}

export default { programaPrincipal }