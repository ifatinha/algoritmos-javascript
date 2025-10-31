/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function juntarFrase(frase1, frase2) {
    let texto1 = frase1.split(" ");
    let texto2 = frase2.split(" ");
    let texto3 = "";
    let contador = 0;

    while (contador < texto1.length || contador < texto2.length) {
        
        if (contador < texto1.length) {
            texto3 += texto1[contador] + " ";
        }

        if (contador < texto2.length) {
            texto3 += texto2[contador] + " ";
        }

        contador++;
    }

    return texto3;
}

let frase1 = scanner.question("Digite a primeira frase: ");
let frase2 = scanner.question("Digite a segunda frase: ");
console.clear();

console.log("Frase 01: " + frase1);
console.log("Frase 02: " + frase2);

let texto = juntarFrase(frase1, frase2);
console.log("Frase 03: " + texto);
