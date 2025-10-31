/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 24
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const pessoas = ["Eu", "Tu", "Ele(a)", "Nós", "Vós", "Eles(as)"];

/** presente do indicativo */
function conjudacaoAr(verbo) {
  const terminacoes = ["o", "as", "a", "amos", "ais", "am"];
  let verboConjugado = "";

  for (let i = 0; i < pessoas.length; i++) {
    verboConjugado += pessoas[i] + " " + verbo + terminacoes[i] + "\n";
  }

  return verboConjugado;
}

function conjudacaoEr(verbo) {
  const terminacoes = ["o", "es", "e", "emos", "eis", "em"];
  let verboConjugado = "";

  for (let i = 0; i < pessoas.length; i++) {
    verboConjugado += pessoas[i] + " " + verbo + terminacoes[i] + "\n";
  }

  return verboConjugado;
}

function conjudacaoIr(verbo) {
  const terminacoes = ["o", "es", "e", "imos", "is", "em"];
  let verboConjugado = "";

  for (let i = 0; i < pessoas.length; i++) {
    verboConjugado += pessoas[i] + " " + verbo + terminacoes[i] + "\n";
  }

  return verboConjugado;
}

function presenteDoIndicativo(verbo) {
  let prefixo = verbo.substring(0, verbo.length - 2);
  let terminacao = verbo.substring(verbo.length - 2, verbo.length);
  let verboConjudago = "";

  if (terminacao.toLowerCase() === "ar") {
    verboConjudago = conjudacaoAr(prefixo);
  } else if (terminacao.toLowerCase() === "er") {
    verboConjudago = conjudacaoEr(prefixo);
  } else if (terminacao.toLowerCase() === "ir") {
    verboConjudago = conjudacaoIr(prefixo);
  }

  return verboConjudago;
}

let verbo = scanner.question("Digite um verbo regular: ");
console.clear();

console.log("Verbo  " + verbo + " conjugado no presente do indicativo");

console.log(presenteDoIndicativo(verbo));
