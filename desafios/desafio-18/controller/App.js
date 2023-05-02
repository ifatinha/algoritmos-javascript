import scanner from 'readline-sync'
import Bebida from '../classes/Bebida';
import FormatadorData from '../util/FormatadorData';
import Entrada from '../classes/Entrada';

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

function cadastrarBebidas() {
    let bebidas = [];

    for (let i = 0; i < 4; i++) {
        let nome = Bebida.nomeBebida();
        let teorAlcool = scanner.questionFloat("Teor de Alcool: ");
        let preco = scanner.questionFloat("Preço Unitario: ");
        bebidas.push(new Bebida(nome, teorAlcool, preco));
    }

    return bebidas;
}

function dataEvento() {
    let eValido;

    let stringData = scanner.question("Data de realização: (dd/mm/yyyy): ");
    eValido = stringData.match(FormatadorData.paternData(data));

    while (eValido === null) {
        console.log("Formato inválido!");
        data = scanner.question("Data de realização: (dd/mm/yyyy): ");
        eValido = stringData.match(FormatadorData.paternData(data));
    }

    let stringHora = scanner.question("Hora do atendimento (hh:mm): ");
    eValido = stringHora.match(FormatadorData.paternHora());

    while (eValido === null) {
        stringHora = scanner.question("Formato inválido! Digite um horario no formato (hh:mm): ");
        eValido = stringHora.match(FormatadorData.paternHora());
    }

    return FormatadorData.montarData(stringData, stringHora);

}

function criarEntradas(tipoEvento, bebidas, custoOrganizacao, qtdConvites) {
    const tiposEntradas = ["Popular", "Normal", "VIP"];
    const entradas = [];
    let valorEntradaNormal = 0;

    for (let i = 0; i < tiposEntradas.length; i++) {
        let tipo = tiposEntradas[i];
        let valor = 0;

        if (tipo === "Popular") {
            if (tipoEvento === "Open Bar") {
                valor = 30;

                for (let j = 0; j < bebidas.length; j++) {
                    valor += (bebidas[j].valorUnitario * 0.5);
                }

            } else {
                valor = custoOrganizacao / qtdConvites;

            }

            valorEntradaNormal = valor;

        } else if (tipo === "Normal") {
            valor = valorEntradaNormal + (valorEntradaNormal * 0.1);
        } else if (tipo === "VIP") {
            valor = valorEntradaNormal + (valorEntradaNormal * 0.15);
        }

        entradas.push(new Entrada(tipo, valor));
    }

    return entradas;
}

function cadastrarEvento() {
    let tipoEvento = tiposEventos();
    
    let descricao = scanner.question("Descrição: ");
    let local = scanner.question("Local: ");
    let data = dataEvento();
    let qtdConvites = scanner.questionInt("Quantidade de Convites: ");
    let custoOrganizacao = scanner.questionFloat("Custo de organização: ");
    let entradas = criarEntradas(tipoEvento, bebidas, custoOrganizacao, qtdConvites);

    if (tipoEvento === "Open Bar") {
        const bebidas = cadastrarBebidas();
    }
}

function programaPrincipal() {
    let opcao;

    do {
        opcao = menu();

        switch (opcao) {

            case 1:
                cadastrarEvento();
                break;

            case 2:
                break;

            case 3:
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