import app from './util/App.js'

const precoMinuto = 1.99;

const dataInicio = app.lerHorario("Digite a hora de inicio da chamada: ");
const dataFinal = app.lerHorario("Digite a hora de termino da chamada: ");

let minutosGastos = app.calculcarMinutos(dataInicio, dataFinal);
console.log("Duração da chamada: " + minutosGastos + "min");

let totalPagar = app.calcularTotalPagar(minutosGastos, precoMinuto);
console.log("Total a pagar: R$" + totalPagar.toFixed(2));

app.calcularDesconto(dataInicio, dataFinal);
app.tabelaPrecos();