import scanner from "readline-sync";
import Aluno from "../classes/Aluno.js";

function buscarAluno(alunos, codigo) {
  return alunos.find(function (aluno) {
    return aluno.codigo === codigo;
  });
}

function criarAluno() {
  console.log("Informe os dados do aluno");
  let codigo = scanner.question("Codigo: ");
  let nome = scanner.question("Aluno: ");
  return new Aluno(codigo, nome);
}

function cadastrarAluno(alunos) {
  const aluno = criarAluno(alunos);

  if (buscarAluno(alunos, aluno.codigo) === undefined) {
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso!");
  } else {
    console.log("Erro! Já existe um aluno cadastrado com esse código!");
  }

  return alunos;
}

export default { buscarAluno, cadastrarAluno };
