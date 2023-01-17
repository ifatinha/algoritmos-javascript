/** Capitulo 06 - sub-rotinas: Exemplo 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

function lerDados() {
    const matriz = [];
    for (let i = 0; i < 12; i++) {
        const linha = [];
        for (let j = 0; j < 12; j++) {
            linha.push(Math.floor((Math.random() * 99) + 1));
        }
        matriz.push(linha);
    }

    return matriz;
}