/** Faça um programa que receba a hora do início de um jogo e a hora do término (cada hora é composta
por duas variáveis inteiras: hora e minuto). Calcule e mostre a duração do jogo (horas e minutos),
sabendo que o tempo máximo de duração do jogo é de 24 horas e que ele pode começar em um dia e
terminar no dia seguinte. */

import scanner from 'readline-sync'

const horaInicio = new Date();
const horaTermino = new Date();

horaInicio.setHours(scanner.questionInt("Informe a hora de inicio do jogo: "));
horaInicio.setMinutes(scanner.questionInt("Informe os minutos de inicio do jogo: "));

horaTermino.setHours(scanner.questionInt("Informe a hora de termino do jogo: "));
horaTermino.setMinutes(scanner.questionInt("Informe os minutos de termino do jogo: "));

if (horaInicio.getMinutes() > horaTermino.getMinutes()) {
    horaTermino.setMinutes(horaTermino.getMinutes() + 60);
    horaTermino.setHours(horaTermino.getHours() - 1);
}

if (horaInicio.getHours() > horaTermino.getHours()) {
    horaTermino.setHours(horaTermino.getHours() + 24);
}

const horaDuracao = horaTermino.getHours() - horaInicio.getHours();
const minutoDuracao = horaTermino.getMinutes() - horaInicio.getMinutes();

console.log("O Jogo durou " + horaDuracao + " horas e " + minutoDuracao + " minutos");

