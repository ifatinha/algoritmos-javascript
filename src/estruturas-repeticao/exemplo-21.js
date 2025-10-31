/** Capitulo 05 - estruturas de repetição: Exemplo 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let numero;
let soma = 0;
let qtdNumeros = 0;
let mediaNumeros = 0.0;
let maiorNumero;
let menorNumero;
let mediaPares = 0.0;
let qtdPares = 0;
let percImpares = 0.0;
let qtdImpares = 0;

do {
  console.log(
    "Programa Operações Númericas - Para encerrar a aplicação digite 0"
  );
  numero = scanner.questionInt("Digite um numero: ");

  if (numero !== 0) {
    if (qtdNumeros === 0) {
      maiorNumero = numero;
      menorNumero = numero;
    }

    if (maiorNumero < numero) {
      maiorNumero = numero;
    }

    if (menorNumero > numero) {
      menorNumero = numero;
    }

    if (numero % 2 == 0) {
      mediaPares += numero;
      qtdPares++;
    } else {
      qtdImpares++;
    }

    soma = soma + numero;
    qtdNumeros++;
  } else {
    console.log("Encerrando Aplicação!");
  }
} while (numero !== 0);

if (qtdNumeros > 0) {
  mediaNumeros = soma / qtdNumeros;

  if (qtdPares > 0) {
    mediaPares = mediaPares / qtdPares;
  }

  if (qtdImpares > 0) {
    percImpares = (qtdImpares * 100) / qtdNumeros;
  }

  console.clear();
  console.log(
    "Soma de todos os numeros digitados".padEnd(50, ".") + ": " + soma
  );
  console.log(
    "Quantidade de números digitados".padEnd(50, ".") + ": " + qtdNumeros
  );
  console.log(
    "Média de todos os numeros digitados".padEnd(50, ".") +
      ": " +
      mediaNumeros.toFixed(2)
  );
  console.log("Maior número digitado".padEnd(50, ".") + ": " + maiorNumero);
  console.log("Menor número digitado".padEnd(50, ".") + ": " + menorNumero);
  console.log(
    "Média dos números pares digitados".padEnd(50, ".") +
      ": " +
      mediaPares.toFixed(2)
  );
  console.log(
    "Percentual de números impares digitados".padEnd(50, ".") +
      ": " +
      percImpares.toFixed(2) +
      "%"
  );
} else {
  console.log("Nenhum número foi digitado!");
}
