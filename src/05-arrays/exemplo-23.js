/** Capitulo 06 - Vetores: Exemplo 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const janela = [];
const corredor = [];
let opcao;
let achou = false;

for (let i = 0; i < 24; i++) {
  janela.push(0);
  corredor.push(0);
}

do {
  console.log("1 - Vender Passagem");
  console.log("2 - Mapa de Ocupação");
  console.log("0 - Encerrar Aplicação");
  opcao = scanner.questionInt("Opção: ");

  switch (opcao) {
    case 1:
      for (let i = 0; i < 24; i++) {
        if (corredor[i] === 0 || janela[i] === 0) {
          achou = true;
        }
      }

      if (achou === true) {
        let resposta;

        do {
          console.log("Sistema de Vendas - Escolha uma das opções: ");
          console.log("1 - Janela");
          console.log("2 - Corredor");
          console.log("0 - Sair");
          resposta = scanner.questionInt("Opção: ");
          let numPoltrona;

          switch (resposta) {
            case 1:
              numPoltrona = scanner.questionInt(
                "Número da Poltrona (0 - 23): "
              );
              while (numPoltrona < 0 || numPoltrona > 23) {
                console.log("Número Inválido! Tente novamente.");
                numPoltrona = scanner.questionInt(
                  "Número da Poltrona (0 - 23): "
                );
              }

              if (janela[numPoltrona] === 0) {
                janela[numPoltrona] = 1;
                console.log("Venda Efetivada!");
              } else {
                console.log("Poltrona Ocupada!");
              }
              break;

            case 2:
              numPoltrona = scanner.questionInt(
                "Número da Poltrona (0 - 23): "
              );
              while (numPoltrona < 0 || numPoltrona > 23) {
                console.log("Número Inválido! Tente novamente.");
                numPoltrona = scanner.questionInt(
                  "Número da Poltrona (0 - 23): "
                );
              }

              if (corredor[numPoltrona] === 0) {
                corredor[numPoltrona] = 1;
                console.log("Venda Efetivada!");
              } else {
                console.log("Poltrona Ocupada!");
              }
              break;

            case 0:
              console.log("Encerrar Aplicação!");
              break;

            default:
              console.log("Opção Inválida!");
              break;
          }
        } while (resposta !== 0);
      } else {
        console.log("Ônibus Lotado!");
      }

      break;
    case 2:
      console.log("Mapa de Ocupação (0 - Livre; 1 - Ocupada):");
      console.log("Janela::: " + janela.join(" | "));
      console.log("Corredor: " + corredor.join(" | "));
      break;
    case 0:
      console.log("Encerrar Aplicação!");
      break;
    default:
      console.log("Opção Inválida!");
      break;
  }
} while (opcao !== 0);
