/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const vogais = [];
const posicoes = [];

function criptografar(mensagem) {
  let novaMensagem = "";

  for (let i = 0; i < mensagem.length; i++) {
    let letra = mensagem.charAt(i);

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u" ||
      letra === "A" ||
      letra === "E" ||
      letra === "I" ||
      letra === "O" ||
      letra === "U"
    ) {
      vogais.push(letra);
      posicoes.push(i);
      letra = "#";
    }

    novaMensagem += letra;
  }

  return novaMensagem;
}

function descriptografar(mensagem) {
  let novaMensagem = "";
  let posicao = 0;

  for (let i = 0; i < mensagem.length; i++) {
    let letra = mensagem.charAt(i);

    if (letra === "#") {
      letra = vogais[posicao];
      posicao++;
    }

    novaMensagem += letra;
  }

  return novaMensagem;
}

let mensagem = scanner.question("Digite uma mensagem: ");
console.clear();

let mensagemCriptografada = criptografar(mensagem);
let mensagemDescriptografada = descriptografar(mensagemCriptografada);

console.log("Mensagem Criptografada: " + mensagemCriptografada);
console.log("Mensagem Descriptografada: " + mensagemDescriptografada);
