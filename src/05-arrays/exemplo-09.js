/** Capitulo 06 - Vetores: Exemplo 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeroVoo = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010];
const origem = [
  "Rio Branco",
  "Goiania",
  "Curitiba",
  "Porto Alegra",
  "Palmas",
  "Florianópolis",
  "Belém",
  "Campo Grande",
  "Vitória",
  "Brasilia",
];
const destino = [
  "São Paulo",
  "São Luís",
  "João Pessoa",
  "Macéio",
  "Aracajú",
  "Rio de Janeiro",
  "Salvador",
  "Teresina",
  "Recife",
  "Porto Velho",
];
const lugares = [45, 30, 10, 20, 85, 60, 18, 90, 48, 30];
let opcao;

/*
for (let i = 1; i <= 10; i++) {
    console.log("Sistema aereo - Digite as informações do " + i + "º voo");

    for (let j = 1; j <= 10; j++) {
        numeroVoo.push(scanner.questionInt("Número do voo: "));
        origem.push(scanner.question("Origem: "));
        destino.push(scanner.question("Destino: "));
        lugares.push(scanner.questionInt("Lugares disponiveis: "));
    }
}*/

do {
  console.log("Bem-vindo - escolha uma das opções abaixo.");
  console.log("1 - Consultar Voos");
  console.log("2 - Efetuar reserva");
  console.log("0 - Sair");
  opcao = scanner.questionInt("Opção: ");

  console.clear();

  switch (opcao) {
    case 1:
      do {
        console.log("Escolha uma das opções abaixo para consultar um voo:");
        console.log("1 - Por número do voo");
        console.log("2 - Por origem");
        console.log("3 - Por destino");
        console.log("4 - Sair");
        opcao = scanner.questionInt("Opção: ");

        let indice;

        switch (opcao) {
          case 1:
            let numero = scanner.questionInt("Digite o número do voo: ");
            console.log(
              "Aguarde! Estamos procurando dados sobre o voo de numero " +
                numero
            );

            indice = numeroVoo.findIndex(function (n) {
              return n === numero;
            });

            if (indice !== -1) {
              console.log("Detalhes do voo encontrado");
              console.log("Número".padEnd(50, ".") + ": " + numeroVoo[indice]);
              console.log("Origem".padEnd(50, ".") + ": " + origem[indice]);
              console.log("Destino".padEnd(50, ".") + ": " + destino[indice]);
              console.log(
                "Assentos disponiveis".padEnd(50, ".") + ": " + lugares[indice]
              );
            } else {
              console.log(
                "Não foi encontrado nenhum voo com o número informado."
              );
            }

            break;

          case 2:
            let nomeOrigem = scanner.question("Digite a origem do voo: ");
            console.log(
              "Aguarde! Estamos procurando dados sobre o voo que saem de " +
                nomeOrigem
            );

            indice = origem.findIndex(function (nome) {
              return nome === nomeOrigem;
            });

            if (indice !== -1) {
              console.log("Detalhes do voo encontrado");
              console.log("Número".padEnd(50, ".") + ": " + numeroVoo[indice]);
              console.log("Origem".padEnd(50, ".") + ": " + origem[indice]);
              console.log("Destino".padEnd(50, ".") + ": " + destino[indice]);
              console.log(
                "Assentos disponiveis".padEnd(50, ".") + ": " + lugares[indice]
              );
            } else {
              console.log(
                "Não foi encontrado nenhum voo com origem em " +
                  nomeOrigem +
                  "."
              );
            }

            break;

          case 3:
            let nomeDestino = scanner.question("Digite o destino do voo: ");
            console.log(
              "Aguarde! Estamos procurando dados sobre o voo que chegam em " +
                nomeDestino
            );

            indice = destino.findIndex(function (nome) {
              return nome === nomeDestino;
            });

            if (indice !== -1) {
              console.log("Detalhes do voo encontrado");
              console.log("Número".padEnd(50, ".") + ": " + numeroVoo[indice]);
              console.log("Origem".padEnd(50, ".") + ": " + origem[indice]);
              console.log("Destino".padEnd(50, ".") + ": " + destino[indice]);
              console.log(
                "Assentos disponiveis".padEnd(50, ".") + ": " + lugares[indice]
              );
            } else {
              console.log(
                "Não foi encontrado nenhum voo com destino " + nomeDestino + "."
              );
            }

            break;

          case 4:
            console.log("Saindo!");
            console.clear();
            break;

          default:
            console.log("Opção inválida!");
            break;
        }
      } while (opcao !== 4);

      break;
    case 2:
      console.log("Sistema de Reservas de voo");

      let numVoo = scanner.questionInt("Informe o número do voo: ");
      let indice = numeroVoo.findIndex(function (numero) {
        return numVoo === numero;
      });

      console.clear();

      if (indice !== -1) {
        console.log("Detalhes do voo");
        console.log("Número".padEnd(50, ".") + ": " + numeroVoo[indice]);
        console.log("Origem".padEnd(50, ".") + ": " + origem[indice]);
        console.log("Destino".padEnd(50, ".") + ": " + destino[indice]);
        console.log(
          "Assentos disponiveis".padEnd(50, ".") + ": " + lugares[indice]
        );

        if (lugares[indice] > 0) {
          let qtdLugares = scanner.questionInt(
            "Quantos assentos você deseja reservar? "
          );

          if (qtdLugares <= lugares[indice]) {
            lugares[indice] -= qtdLugares;
            console.log("Assentos reservados com sucesso!");
          } else if (qtdLugares > lugares[indice]) {
            console.log(
              "Desculpe! Você está tentando reservar um numero de assento superior aos disponiveis. Tente novamente!"
            );
          } else {
            console.log("Desculpe! Voo Lotado.");
          }
        } else {
          console.log("Não há mais lugares disponiveis neste voo!");
        }
      } else {
        console.log("Não foi encontrado nenhum voo com o número " + numVoo);
      }
      break;
    case 0:
      console.log("Aplicação encerrada.");
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
} while (opcao !== 0);
