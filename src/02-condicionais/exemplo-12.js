/** Faça um programa que receba o código correspondente ao cargo de um funcionário e seu salário atual
e mostre o cargo, o valor do aumento e seu novo salário. Os cargos estão na tabela a seguir.
Código CArgo        PErCENTuAL
1      Escriturário    50%
2      Secretário      35%
3      Caixa           20%
4      Gerente         10%
5      Diretor     Não tem aumento */

import scanner from "readline-sync";

let codigoFunc = scanner.questionInt("Informe o codigo do funcionario: ");
let salario = scanner.questionFloat("Informe o salario do funcionario: ");
let aumento = 0.0;
let cargo = "";

switch (codigoFunc) {
  case 1:
    aumento = (salario * 50) / 100;
    cargo = "Escrituário";
    break;
  case 2:
    aumento = (salario * 35) / 100;
    cargo = "Secretário";
    break;
  case 3:
    aumento = (salario * 20) / 100;
    cargo = "Caixa";
    break;
  case 4:
    cargo = "Gerente";
    aumento = (salario * 10) / 100;
    break;
  case 5:
    cargo = "Diretor";
    console.log("O cargo de Diretor não tem aumento.");
    break;
  default:
    console.log("Cargo inválido");
}

let novoSalario = salario + aumento;

console.log("Cargo: " + cargo);
console.log("Sálario sem aumento: " + salario.toFixed(2) + "R$");
console.log("Valor do aumento...: " + aumento.toFixed(2) + "R$");
console.log("Sálario com aumento: " + novoSalario.toFixed(2) + "R$");
