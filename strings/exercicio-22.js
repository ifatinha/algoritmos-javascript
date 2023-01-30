/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contarLetras(texto) {
    let contador = 0;
    let qtdVezes = 0;
    let letra2 = "";
    let maior = 0;

    do {

        qtdVezes = 0;
        let letra = texto.charAt(contador);

        while (letra === texto.charAt(contador)) {
            console.log("Vezes: " + qtdVezes);
            qtdVezes++;
            contador++;
        }

        console.log("A letra " + letra + " aparece " + qtdVezes);

        if (qtdVezes > maior) {
            maior = qtdVezes;
            letra2 = letra;
        }

        console.log(contador);
        contador++;
    } while (contador <= texto.length);

    //console.log("A letra " + letra2 + " aparece " + maior + " na frase.");
}

let texto = scanner.question("Digite uma sequencia de letras: ");
console.clear();

console.log("Mensagem digitada: " + texto);
contarLetras(texto);