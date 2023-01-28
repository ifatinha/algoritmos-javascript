/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function gerarLogin(nome) {
    let nomes = nome.split(" ");
    let login = "";

    for (let i = 0; i < nomes.length; i++) {
        login += nomes[i].charAt(0).toUpperCase();
    }

    login += login.toLowerCase();

    return login;
}

function gerarSenha(login) {
    let senha = "";

    for (let i = 0; i < login.length; i++) {
        senha += login.charCodeAt(i);
    }

    return senha;
}

let nomeCompleto = scanner.question("Digite seu nome completo: ");
console.clear();

console.log("Nome Completo: " + nomeCompleto);

let login = gerarLogin(nomeCompleto);
console.log("Seu Login: " + login);

let senha = gerarSenha(login);
console.log("Sua Senha: " + senha);