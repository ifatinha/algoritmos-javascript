import scanner from "readline-sync";
import Aniversariante from "../classes/Aniversariante.js";
import names from "../data/Names.js";

function menu() {
  return scanner.questionInt(
    "Escolha uma das opcoes abaixo\n" +
      "1 - Cadastrar novo aniversáriante\n" +
      "2 - Excluir aniversáriante\n" +
      "3 - Alterar dados do aniversariante\n" +
      "4 - Consultar aniversariantes pela a data\n" +
      "5 - Consultar aniversariantes pelo mes\n" +
      "6 - Consultar aniversariantes pela letra\n" +
      "7 - Mostrar agenda ordenada pelo nome\n" +
      "8 - Mostrar agenda ordenada pelo mes\n" +
      "9 - Sair\n" +
      "Opção: "
  );
}

function criarAniversariante() {
  console.log("Informe os dados abaixo para cadastrar um aniversariante");

  // let nome = scanner.question("Nome: ");
  // let diaNascimento = scanner.question("Dia de nascimento: ");
  // let mesNascimento = scanner.question("Mes de nascimento: ");
  let randomName = names.generateRandomName();
  let randomDay = Math.floor(Math.random() * 31 + 1);
  let randomMonth = Math.floor(Math.random() * 12 + 1);

  return new Aniversariante(randomName, randomDay, randomMonth);
}

function buscarAniversarianteNome(aniversariantes, nome) {
  return aniversariantes.findIndex((aniversariante) => {
    return aniversariante.nome === nome;
  });
}

function cadastrarAniversariante(aniversariantes) {
  let aniversariante = criarAniversariante();
  let jaExiste = buscarAniversarianteNome(aniversariantes, aniversariante.nome);

  if (aniversariantes.length < 14) {
    if (jaExiste === -1) {
      aniversariantes.push(aniversariante);
      console.log(
        "Aniversariante cadastrado com os dados abaixo: \n" +
          aniversariante.toString()
      );
    } else {
      console.log(
        "Aniversariante não cadastrado! Já existe uma pessoa cadastrada com esse nome!"
      );
    }
  } else {
    console.log(
      "Aniversariante não cadastrado! Você já atingiu o numero maximo de cadastros!"
    );
  }

  return aniversariantes;
}

function excluirAniversariante(aniversariantes) {
  let nome = scanner.question(
    "Digite o nome do aniversariante que voce quer excluir: "
  );
  let index = buscarAniversarianteNome(aniversariantes, nome);

  if (index !== -1) {
    let opcao = scanner.questionInt(
      "Deseja excluir o aniversariante \n" +
        aniversariantes[index].toString() +
        "? (1 - Sim/2 - Não): "
    );

    while (opcao !== 1 && opcao !== 2) {
      opcao = scanner.questionInt("Opção Invalida! Digite (1 - Sim/2 - Não): ");
    }

    if (opcao === 1) {
      aniversariantes.splice(index, 1);
      console.log("Aniversariante excluido!");
    } else {
      console.log("Operação cancelada!");
    }
  } else {
    console.log("Nenhum registro encontrado!");
  }

  return aniversariantes;
}

function alterarDados(aniversariantes) {
  let nome = scanner.question(
    "Digite o nome do aniversariante que voce quer alterar: "
  );
  let index = buscarAniversarianteNome(aniversariantes, nome);

  if (index !== -1) {
    console.log("Alterar dados no aniversariante\n" + aniversariantes[index]);

    aniversariantes[index].dia = scanner.question("Novo dia: ");
    aniversariantes[index].mes = scanner.question("Novo mês: ");

    console.log(
      "Dados alterados com sucesso!\n" + aniversariantes[index].toString()
    );
  } else {
    console.log("Nenhum registro encontrado!");
  }

  return aniversariantes;
}

function listarAniversariantes(arr, msg) {
  if (arr.length > 0) {
    console.log(msg);
    arr.forEach((aniversariante) => {
      console.log(aniversariante.toString());
    });
  } else {
    console.log("Nenhum registro encontrado!");
  }
}

function consultarAniversariantesData(aniversariantes) {
  let data = scanner.question("Digite uma data no formato (dd/mm): ");

  let arr = aniversariantes.filter((aniversariante) => {
    return aniversariante.dataAniversario() === data;
  });

  let msg = "Aniversariantes que nasceram em " + data;
  listarAniversariantes(arr, msg);
}

function consultarAniversariantesMes(aniversariantes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let mes = scanner.questionInt("Digite um mes entre 1 - 12: ");
  while (mes < 1 && mes > 12) {
    mes = scanner.questionInt("Erro! Digite um valor entre 1 - 12: ");
  }

  let arr = aniversariantes.filter((aniversariante) => {
    return aniversariante.mes === mes;
  });

  let msg = "Aniversariantes que nasceram no mês " + meses[mes - 1];
  listarAniversariantes(arr, msg);
}

function consultarAniversariantesLetra(aniversariantes) {
  let letra = scanner.question("Digite uma letra: ");

  let arr = aniversariantes.filter((aniversariante) => {
    return aniversariante.nome.at(0) === letra.toUpperCase();
  });

  let msg = "Aniversariantes que começam com a letra " + letra;

  listarAniversariantes(arr, msg);
}

function ordenarAgendaNome(aniversariantes) {
  aniversariantes.sort();
  let msg = "Agenda em ordem alfabetica";
  listarAniversariantes(aniversariantes, msg);
}

function ordenarAgendaMes(aniversariantes) {
  aniversariantes.sort((a, b) => {
    return a.mes - b.mes;
  });

  let msg = "Agenda em ordem alfabetica";
  listarAniversariantes(aniversariantes, msg);
}

export default {
  menu,
  cadastrarAniversariante,
  excluirAniversariante,
  alterarDados,
  consultarAniversariantesData,
  consultarAniversariantesMes,
  consultarAniversariantesLetra,
  ordenarAgendaNome,
  ordenarAgendaMes,
};
