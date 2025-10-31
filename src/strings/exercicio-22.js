/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contarLetras(texto) {
    let contador = 0;
    let qtdVezes = 0;
    let letra2 = "";
    let maior = 0;

    while (contador < texto.length) {

        qtdVezes = 0;
        let letra = texto.charAt(contador);

        while (contador < texto.length && letra === texto.charAt(contador)) {
            if (letra === texto.charAt(contador)) {
                qtdVezes++;
                contador++;
            }

            if (qtdVezes > maior) {
                maior = qtdVezes;
                letra2 = letra;
            }

        }
    }

    console.log("A letra " + letra2 + " aparece " + maior + " na sequencia.");

}

let texto = scanner.question("Digite uma sequencia de letras: ");
console.clear();

console.log("Mensagem digitada: " + texto);
contarLetras(texto);