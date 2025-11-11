/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function gerarLogin(nome) {
  let nomes = nome.split(" ");
  let login = "";

  for (let i = 0; i < nomes.length; i++) {
    if (i !== nomes.length - 1) {
      login += nomes[i].charAt(0);
    } else {
      login += nomes[i];
    }
  }

  return login;
}

let nome = scanner.question("Digite seu nome completo: ");
console.clear();
console.log("Nome completo: " + nome);

let login = gerarLogin(nome.toLowerCase());
console.log("Login: " + login);
