import scanner from 'readline-sync'

function tabelaPrecos() {
    console.log("Tabela de preços\n" +
        "das 0h às 9h — 50% de desconto no valor do minuto.\n" +
        "das 9h01 às 18h — 0% de desconto no valor do minuto.\n" +
        "das 18h01 às 21h — 30% de desconto no valor do minuto.\n" +
        "das 21h01 às 23h59 — 40% de desconto no valor do minuto.");
}

function calculcarMinutos(dataInicio, dataFim) {
    let diferenca = dataFim.getTime() - dataInicio.getTime();
    let minutos = Math.trunc((diferenca / 60000));
    return minutos;
}

function verificarDesconto(dataInicial, dataFinal) {
    let desconto = 0;
}

function lerDados() {
    let horaInicial = scanner.questionInt("Digite a hora inicial da chamada: ");
    let minutoInicial = scanner.questionInt("Digite o minuto inicial da chamada: ");
    let dataInicial = new Date();
    dataInicial.setHours(horaInicial);
    dataInicial.setMinutes(minutoInicial);

    let horaFinal = scanner.questionInt("Digite a hora Final da chamada: ");
    let minutoFinal = scanner.questionInt("Digite o minuto Final da chamada: ");
    let dataFinal = new Date();
    dataFinal.setHours(horaFinal);
    dataFinal.setMinutes(minutoFinal);

    let minutos = calculcarMinutos(dataInicial, dataFinal);

    console.log("Duração da chamada: " + minutos + " minutos.");

    console.log(dataInicial.toLocaleTimeString());
    console.log(dataFinal.toLocaleTimeString());
}

lerDados();