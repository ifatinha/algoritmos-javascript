/** Capitulo 13 - Desafios: Desafio 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import app from './util/App.js'

const dataInicio = app.lerHorario("Digite a hora de inicio da chamada: ",
    "Digite o minuto de inicio da chamada: ");
const dataFinal = app.lerHorario("Digite a hora de termino da chamada: ",
    "Digite o minuto final da chamada: ");

console.clear();
console.log("Horario de inicio da chamada: " + dataInicio.toLocaleTimeString());
console.log("Horario de término da chamada: " + dataFinal.toLocaleTimeString());

app.calcularDesconto(dataInicio, dataFinal);