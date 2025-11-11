/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function contarCaracteres(texto, cadeia) {
  let pattern = new RegExp(cadeia, "g");
  let aparicoes = texto.match(pattern);

  return aparicoes;
}

let texto = scanner.question("Digite uma sequencia de letras: ");
let cadeia = scanner.question(
  "Digite a cadeia que voce quer pesquisar na sequencia: "
);

while (cadeia.length > texto.length) {
  cadeia = scanner.question(
    "Erro! Tamanho incorreto. Digite outra subcadeia: "
  );
}

console.clear();

console.log("Mensagem digitada: " + texto);
let aparicoes = contarCaracteres(texto, cadeia);

if (aparicoes === null) {
  console.log("A cadeia " + cadeia + " não está contida na cadeia.");
} else {
  console.log(
    "A cadeia " +
      cadeia +
      " aparece " +
      aparicoes.length +
      " na sequencia informada."
  );
}
