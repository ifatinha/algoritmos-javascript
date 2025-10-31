import scanner from 'readline-sync'

function lerHorario(msgHora, msgMinuto) {
    let hora = scanner.questionInt(msgHora);
    let minuto = scanner.questionInt(msgMinuto);
    const date = new Date();
    date.setHours(hora);
    date.setMinutes(minuto);

    return date;
}

function calcularMinutos(dataInicio, dataFim) {
    let diferenca = dataFim.getTime() - dataInicio.getTime();
    let minutos = Math.trunc((diferenca / 60000));
    return minutos;
}

function calcularTotalPagar(totalMinutos) {
    const precoMinuto = 1.99;
    return (totalMinutos * precoMinuto);
}

function calcularValorFaixa(codFaixa, dataInicio, dataFinal) {
    let minutosGastos = calcularMinutos(dataInicio, dataFinal);
    let totalSemDesconto = calcularTotalPagar(minutosGastos);
    let totalComDesconto = totalSemDesconto;
    let msg = "";

    switch (codFaixa) {
        case 9:
            totalComDesconto -= totalSemDesconto * 0.5;
            msg = "\nMinutos gastos das " + dataInicio.getHours() + "h" + dataInicio.getMinutes() +
                "min às " + dataFinal.getHours() + "h" + dataFinal.getMinutes() + "min: ";
            break;

        case 18:
            msg = "\nMinutos gastos das " + dataInicio.getHours() + "h" + dataInicio.getMinutes() +
                "min às " + dataFinal.getHours() + "h" + dataFinal.getMinutes() + "min: ";
            totalComDesconto -= totalSemDesconto * 0;
            break;

        case 21:
            msg = "\nMinutos gastos das " + dataInicio.getHours() + "h" + dataInicio.getMinutes() +
                "min às " + dataFinal.getHours() + "h" + dataFinal.getMinutes() + "min: ";
            totalComDesconto -= totalSemDesconto * 0.3;
            break;

        case 23:
            msg = "\nMinutos gastos das " + dataInicio.getHours() + "h" + dataInicio.getMinutes() +
                "min às " + dataFinal.getHours() + "h" + dataFinal.getMinutes() + "min: ";
            totalComDesconto -= totalSemDesconto * 0.4;
            break
    }

    console.log(msg + minutosGastos + "\n" +
        "Total sem desconto: R$" + totalSemDesconto.toFixed(2) + "\n" +
        "Total com desconto: R$" + totalComDesconto.toFixed(2));
    return totalComDesconto;
}

function alterarHorarioInicial(hora, minuto) {
    let date = new Date();
    date.setHours(hora);
    date.setMinutes(minuto);
    return date;
}

function calcularDesconto(dataInicio, dataFinal) {
    let totalPagar = 0;
    let date = new Date();

    if (dataInicio.getHours() >= 0) {

        if (dataFinal.getHours() <= 9) {
            totalPagar = calcularValorFaixa(9, dataInicio, dataFinal);
            console.log("Total pagar: R$" + totalPagar.toFixed(2) + "\n");
        } else if (dataFinal.getHours() <= 18) {

            if (dataInicio.getHours() <= 9) {
                date = alterarHorarioInicial(9, 0);
                totalPagar = calcularValorFaixa(9, dataInicio, date);
                totalPagar += calcularValorFaixa(18, date, dataFinal);
            } else {
                totalPagar += calcularValorFaixa(18, dataInicio, dataFinal);
            }

            console.log("\nTotal pagar: R$" + totalPagar.toFixed(2));
        } else if (dataFinal.getHours() <= 21) {
            let dateAux;
            if (dataInicio.getHours() <= 9) {
                date = alterarHorarioInicial(9, 0);
                totalPagar = calcularValorFaixa(9, dataInicio, date);
                dateAux = alterarHorarioInicial(18, 0);
                totalPagar += calcularValorFaixa(18, date, dateAux);
                totalPagar += calcularValorFaixa(21, dateAux, dataFinal);
            } else if (dataFinal.getHours() <= 18) {
                dateAux = alterarHorarioInicial(18, 0);
                totalPagar += calcularValorFaixa(18, dataInicio, dateAux);
                totalPagar += calcularValorFaixa(21, dateAux, dataFinal);
            } else {
                totalPagar += calcularValorFaixa(21, dataInicio, dataFinal);
            }

            console.log("\nTotal pagar: R$" + totalPagar.toFixed(2));
        } else if (dataFinal.getHours() <= 23) {
            let dateAux;
            if (dataInicio.getHours() <= 9) {
                date = alterarHorarioInicial(9, 0);
                totalPagar = calcularValorFaixa(9, dataInicio, date);

                dateAux = alterarHorarioInicial(18, 0)
                totalPagar += calcularValorFaixa(18, date, dateAux);

                date = alterarHorarioInicial(21, 0);
                totalPagar += calcularValorFaixa(21, dateAux, date);

                totalPagar += calcularValorFaixa(23, date, dataFinal);
            } else if (dataInicio.getHours() <= 18) {
                console.log("estou aqui");
                dateAux = alterarHorarioInicial(18, 0)
                totalPagar += calcularValorFaixa(18, dataInicio, dateAux);
                date = alterarHorarioInicial(21, 0);
                totalPagar += calcularValorFaixa(21, dateAux, date);
                totalPagar += calcularValorFaixa(23, date, dataFinal);
            } else {
                totalPagar += calcularValorFaixa(23, dataInicio, dataFinal);
            }

            console.log("\nTotal pagar: R$" + totalPagar.toFixed(2));
        }

    }
}
export default {
    lerHorario,
    calcularTotalPagar, calcularDesconto
}