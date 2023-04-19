import scanner from 'readline-sync'

function tabelaPrecos() {
    console.log("Tabela de preços\n" +
        "das 0h às 9h — 50% de desconto no valor do minuto.\n" +
        "das 9h01 às 18h — 0% de desconto no valor do minuto.\n" +
        "das 18h01 às 21h — 30% de desconto no valor do minuto.\n" +
        "das 21h01 às 23h59 — 40% de desconto no valor do minuto.");
}

function lerHorario(msg) {
    let hora = scanner.questionInt(msg);
    let minuto = scanner.questionInt(msg);
    const date = new Date();
    date.setHours(hora);
    date.setMinutes(minuto);

    return date;
}

function calculcarMinutos(dataInicio, dataFim) {
    let diferenca = dataFim.getTime() - dataInicio.getTime();
    let minutos = Math.trunc((diferenca / 60000));
    return minutos;
}

function calcularTotalPagar(totalMinutos, precoMinuto) {
    return (totalMinutos * precoMinuto);
}

function calcularDesconto(dataInicio, dataFinal) {
    let desconto = 0;

    if (dataInicio.getHours() > 0 && dataFinal.getHours() <= 9) {
        console.log("Desconto de 50%");
    }

    if (dataInicio.getHours() > 9 && dataFinal.getHours() <= 18) {
        console.log("Desconto de 0%");
    }

    if (dataInicio.getHours() > 18 && dataFinal.getHours() <= 21) {
        console.log("Desconto de 30%");
    }

    if (dataInicio.getHours() > 21 && dataFinal.getHours() <= 23) {

    }
}
export default {
    tabelaPrecos, lerHorario, calculcarMinutos,
    calcularTotalPagar, calcularDesconto
}