/** Capitulo 13 - Desafios: Desafio 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let numero = scanner.questionInt("Digite um numero entre 0 e 10000: ");

while (numero < 0 || numero > 10000) {
  numero = scanner.questionInt(
    "Opção inválida! Digite um numero entre 1 e 1000: "
  );
}

console.log(numero + " = " + numeroPorExtenso(numero));

function numeroPorExtenso(numero) {
  const unidade = [
    "zero",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "quartoze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
  ];
  const dezena = [
    "",
    "",
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ];
  const centena = [
    "",
    "cento",
    "duzentos",
    "trezentos",
    "quatrocentos",
    "quinhentos",
    "seiscentos",
    "setecentos",
    "oitocentos",
    "novecentos",
  ];
  const qualificacoes = ["cem", "mil"];

  let numeroExtenso = "";

  let tamanhoNumero = numero.toString().length;
  let numeroString = numero.toString();
  let primeiroDigito = parseInt(numeroString.substr(0, 1));
  let segundoDigito = parseInt(numeroString.substr(1, 1));

  if (tamanhoNumero === 1 || (tamanhoNumero === 2 && numero < 20)) {
    numeroExtenso = unidade[numero];
  } else if (tamanhoNumero === 2) {
    numeroExtenso = dezena[primeiroDigito];
    if (segundoDigito !== 0) {
      numeroExtenso += " e " + unidade[segundoDigito];
    }
  } else if (tamanhoNumero === 3) {
    let terceiroDigito = parseInt(numeroString.substr(2, 3));
    let segundaDezena = parseInt(numeroString.substr(1, 3));

    if (numero === 100) {
      numeroExtenso = qualificacoes[0];
    } else {
      numeroExtenso = centena[primeiroDigito];
      if (segundoDigito === 0) {
        numeroExtenso += " e " + unidade[terceiroDigito];
      } else if (segundaDezena >= 10 && segundaDezena < 20) {
        numeroExtenso += " e " + unidade[segundaDezena];
      } else {
        numeroExtenso += " e " + dezena[segundoDigito];
        if (terceiroDigito !== 0) {
          numeroExtenso += " e " + unidade[terceiroDigito];
        }
      }
    }
  } else if (tamanhoNumero === 4) {
    let terceiroDigito = parseInt(numeroString.substr(2, 1));
    let quartoDigito = parseInt(
      numeroString.substr(numeroString.length - 1, 2)
    );
    let segundaDezena = parseInt(numeroString.substr(2, 3));

    if (numero === 1000) {
      numeroExtenso = qualificacoes[1];
    } else {
      if (primeiroDigito === 1) {
        numeroExtenso = unidade[1] + " ";
      } else {
        numeroExtenso = unidade[primeiroDigito] + " ";
      }

      if (segundoDigito === 0 && terceiroDigito === 0 && quartoDigito === 0) {
        numeroExtenso += qualificacoes[1];
      } else {
        numeroExtenso += qualificacoes[1];
        if (segundoDigito === 0) {
          if (segundaDezena < 10) {
            numeroExtenso += " e " + unidade[quartoDigito];
          } else if (segundaDezena >= 10 && segundaDezena < 20) {
            numeroExtenso += " e " + unidade[segundaDezena];
          } else {
            numeroExtenso +=
              centena[segundoDigito] + " e " + dezena[terceiroDigito];
          }
        } else {
          if (segundaDezena <= 10) {
            numeroExtenso +=
              " e " + centena[segundoDigito] + " " + unidade[segundaDezena];
          } else {
            numeroExtenso +=
              " " + centena[segundoDigito] + " e " + dezena[terceiroDigito];
          }

          if (quartoDigito !== 0) {
            numeroExtenso += " " + unidade[quartoDigito];
          }
        }
      }
    }
  }

  return numeroExtenso;
}
