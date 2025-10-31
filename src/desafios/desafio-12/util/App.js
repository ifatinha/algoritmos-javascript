import Aluno from "./Aluno.js";

function geradorMatricula() {
  let letra = ["A", "B", "C", "D", "E"];
  let matricula =
    letra[Math.floor(Math.random() * 5 + 0)] +
    "-" +
    Math.floor(Math.random() * 8999 + 1000);

  return matricula;
}

function criarAluno() {
  let matricula = geradorMatricula();
  let pontuacao = Math.floor(Math.random() * 100 + 0);

  return new Aluno(matricula, pontuacao);
}

function ordenarVetor(alunos) {
  alunos.sort((aluno1, aluno2) => {
    return aluno2.pontuacao - aluno1.pontuacao;
  });

  return alunos;
}

function verificarMenorNota(ultimoAluno, aluno) {
  return ultimoAluno.pontuacao < aluno.pontuacao;
}

function cadastrarAlunos(cursos) {
  for (let i = 0; i < cursos.length; i++) {
    console.log("\nInserindo os alunos do curso " + cursos[i].nome);
    let contador = 0;

    while (contador < 20) {
      let aluno = criarAluno();
      if (contador < 10) {
        cursos[i].alunos.push(aluno);
        cursos[i].alunos = ordenarVetor(cursos[i].alunos);
      } else {
        let ultimoAluno = cursos[i].alunos[cursos[i].alunos.length - 1];
        let eMenor = verificarMenorNota(ultimoAluno, aluno);

        if (eMenor) {
          let tamanho = cursos[i].alunos.length - 1;
          console.log(
            "O aluno " +
              cursos[i].alunos[cursos[i].alunos.length - 1].toString() +
              " foi removido do sistema porque " +
              " tem nota inferior ao aluno " +
              aluno.toString()
          );
          cursos[i].alunos.pop();
          cursos[i].alunos.push(aluno);
          cursos[i].alunos = ordenarVetor(cursos[i].alunos);
        }
      }
      contador++;
    }
  }
  return cursos;
}

function listarCursos(cursos) {
  cursos.forEach((curso) => {
    console.log(curso.nome);
    curso.alunos.forEach((aluno, index) => {
      console.log(index + 1 + ". " + aluno.toString());
    });
    console.log("");
  });
}

export default {
  cadastrarAlunos,
  listarCursos,
};
