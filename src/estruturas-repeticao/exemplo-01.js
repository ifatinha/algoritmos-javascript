/** Capitulo 05 - estruturas de repetição: Exemplo 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let anoContrato = 2005;
let salario = 1000.0;
let aumento = 0.0;
let anoAtual = new Date().getFullYear();

while (anoContrato < anoAtual) {
  if (anoContrato === 2006) {
    aumento = 1.5 / 100;
  }

  let valorAumento = (salario * aumento) / 100;
  salario = salario + valorAumento;

  console.log("Ano".padEnd(50, ".") + ": " + anoContrato);
  console.log("Percentual Aumento".padEnd(50, ".") + ": " + aumento + "%");
  console.log(
    "Valor Aumento".padEnd(50, ".") + ": R$ " + valorAumento.toFixed(2)
  );
  console.log("Novo Sálario".padEnd(50, ".") + ": R$ " + salario.toFixed(2));
  console.log("");
  anoContrato++;
  aumento = aumento * 2;
}
