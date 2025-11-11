import scanner from "readline-sync";
import Disciplina from "../classes/Disciplina.js";
import DisciplinaPratica from "../classes/DisciplinaPratica.js";

function menuDisciplinas() {
  return scanner.questionInt(
    "Qual disciplina você gostaria de cadastrar\n" +
      "1 - Disciplina Normal\n" +
      "2 - Disciplina Prática\n" +
      "Opção: "
  );
}

function buscarDisciplina(disciplinas, codigo) {
  return disciplinas.find(function (disciplina) {
    return disciplina.codigo === codigo;
  });
}

function criarDisciplina() {
  console.log("Cadastrar nova disciplina");
  let opcao = menuDisciplinas();

  while (opcao !== 1 && opcao !== 2) {
    console.log("Opção inválida! Tente novamento.");
    opcao = menuDisciplinas();
  }

  let codigo = scanner.question("Codigo: ");
  let nome = scanner.question("Disciplina: ");
  let cargaHoraria = scanner.question("Carga Horário: ");

  if (opcao === 1) {
    const disciplina = new Disciplina(codigo, nome, cargaHoraria);
    return disciplina;
  } else if (opcao === 2) {
    let cargaHorariaPratica = scanner.question("Carga Horária Pratica: ");
    const disciplinaPratica = new DisciplinaPratica(
      cargaHorariaPratica,
      codigo,
      nome,
      cargaHoraria
    );
    return disciplinaPratica;
  }
}

function cadastrarDisciplina(disciplinas) {
  let disciplina = criarDisciplina(disciplinas);

  if (buscarDisciplina(disciplinas, disciplina.codigo) === undefined) {
    console.log("Disciplina cadastrada com sucesso!");
    disciplinas.push(disciplina);
  } else {
    console.log(
      "Erro ao cadastrar disciplina! O código informado já foi cadastrado!"
    );
  }

  return disciplinas;
}

export default { buscarDisciplina, cadastrarDisciplina };
