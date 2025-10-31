/**Dados três valores X, Y e Z, verifique se eles podem ser os comprimentos dos lados de um triângulo
e, se forem, verifique se é um triângulo equilátero, isósceles ou escaleno. Se eles não formarem um
triângulo, escreva uma mensagem. Considere que:
■■ o comprimento de cada lado de um triângulo é menor que a soma dos outros dois lados;
■■ chama-se equilátero o triângulo que tem três lados iguais;
■■ denomina-se isósceles o triângulo que tem o comprimento de dois lados iguais;
■■ recebe o nome de escaleno o triângulo que tem os três lados diferentes.  */

import scanner from "readline-sync";

console.log("Informe os dados para verificar se forma um triângulo!");
let x = scanner.questionInt("Valor de X: ");
let y = scanner.questionInt("Valor de Y: ");
let z = scanner.questionInt("Valor de Z: ");

if (x < y + z && y < x + z && z < x + y) {
  if (x === y && y === z) {
    console.log("Triângulo Equilátero!");
  } else if (x === y || x === z || y === z) {
    console.log("Triângulo Isósceles!");
  } else {
    console.log("Triângulo Escaleno!");
  }
} else {
  console.log("Os valores informados não forma triângulo!");
}
