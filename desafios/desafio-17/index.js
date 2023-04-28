/** Capitulo 13 - Desafios: Desafio 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import ControlTitular from "./controllers/ControlTitular.js";

// ControlTitular.cadastrarTitulares();
// ControlTitular.dadosTitulares();

for (let i = 0; i < 10; i++) {
    console.log(criarNumeroCartao());
}

function criarNumeroCartao() {
    let parte1 = Math.floor((Math.random() * 8999) + 1000);
    let parte2 = Math.floor((Math.random() * 8999) + 1000);
    let parte3 = Math.floor((Math.random() * 8999) + 1000);
    let parte4 = Math.floor((Math.random() * 8999) + 1000);

    return (parte1 + " " + parte2 + " " + parte3 + " " + parte4);

}