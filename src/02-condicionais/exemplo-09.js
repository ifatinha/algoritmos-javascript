/** Faça um programa que mostre a data e a hora do sistema nos seguintes formatos:
 * DD/MM/AAAA –mês por extenso e hora:minuto. */

const data = new Date();

const padraoData = {
  /*weekday: "long",*/
  year: "numeric",
  month: "long",
  day: "numeric",

  hour: "2-digit",
  minute: "2-digit",
  //second: "2-digit",
};

const personalizandoDataTempo = {
  dateStyle: "full", // segunda-feira, 9 de novembro de 2020
  dateStyle: "long", // 9 de novembro de 2020
  dateStyle: "medium", // 9 de nov. de 2020
  dateStyle: "short", // 09/11/2020

  timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
  timeStyle: "long", // 01:05:09 BRT
  timeStyle: "medium", // 01:05:09
  timeStyle: "short", // 01:05
};

console.log(data.toLocaleString("pt-br", padraoData));
