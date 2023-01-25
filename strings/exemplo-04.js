/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'


function contarLetrasRepetidas(frase) {
    const repetidas = [];

    for (let i = 0; i < frase.length; i++) {
        
        let letra = frase.charAt(i);
        let regex = new RegExp(letra, 'g');
        let qtd = frase.match(regex);

        if (qtd.length > 1 && letra !== " ") {
            if (!repetidas.includes(letra)) {
                repetidas.push(frase.charAt(i));
                console.log("A letra " + frase.charAt(i) + " apareceu " + qtd.length + " vezes.");
            }
        }
    }
}

let frase = scanner.question("Digite uma frase: ");

contarLetrasRepetidas(frase.toLowerCase());
