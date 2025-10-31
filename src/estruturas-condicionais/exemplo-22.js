/** Exemplo 22 do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let salarioBase = scanner.questionFloat(
  "Informe o salario base do funcionario: "
);
let tempoServico = scanner.questionInt(
  "Informe o tempo de trabalho do funcionario: "
);

let imposto = 0.0;
let gratificao = 0.0;

if (salarioBase < 200) {
  imposto = 0.0;
} else if (salarioBase >= 200 && salarioBase <= 450) {
  imposto = 3 / 100;
} else if (salarioBase > 450 && salarioBase < 700) {
  imposto = 8 / 100;
} else {
  imposto = 12 / 100;
}

if (salarioBase > 500) {
  if (tempoServico <= 3) {
    gratificao = 20;
  } else {
    gratificao = 30;
  }
} else if (salarioBase <= 500) {
  if (tempoServico <= 3) {
    gratificao = 23;
  } else if (tempoServico > 3 && tempoServico < 6) {
    gratificao = 35;
  } else {
    gratificao = 33;
  }
}

let valorImposto = salarioBase * imposto;
let salarioLiquido = salarioBase - valorImposto + gratificao;
let categoria = "";

if (salarioLiquido <= 1200) {
  categoria = "A";
} else if (salarioLiquido >= 1200 && salarioLiquido < 6000) {
  categoria = "B";
} else {
  categoria = "C";
}

console.log(
  "Tempo de Serviço: ".padEnd(50, ".") + ": " + tempoServico + " ano(s)"
);
console.log(
  "Sálario Base: ".padEnd(50, ".") + ": +R$" + salarioBase.toFixed(2)
);
console.log("Imposto: ".padEnd(50, ".") + ": -R$" + valorImposto.toFixed(2));
console.log("Gratificação: ".padEnd(50, ".") + ": +R$" + gratificao.toFixed(2));
console.log(
  "Sálario Liquido: ".padEnd(50, ".") + ": =R$" + salarioLiquido.toFixed(2)
);
console.log("Categoria: ".padEnd(50, ".") + ": " + categoria);
