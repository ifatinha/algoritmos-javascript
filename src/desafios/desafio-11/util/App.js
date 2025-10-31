import Curso from "../classes/Curso.js";
import randomCurseName from "./CursosNomes.js";


function criarCurso() {
    let nome = randomCurseName();
    let qtdAlunos = Math.floor((Math.random() * 100) + 1);
    let valorMensalidade = Math.floor((Math.random() * 400) + 100);
    let curso = new Curso(nome, qtdAlunos, valorMensalidade);
    curso.calcularReceita();

    return curso;

}

function cadastrarCursos(cursos) {
    for (let i = 0; i < 100; i++) {
        cursos.push(criarCurso());
    }
    return cursos;
}

function listarCursosCadastrados(cursos) {
    cursos.forEach((curso, index) => {
        console.log((index + 1) + ". " + curso.toString());
    })
}

function mediaAritmeticaAlunos(cursos) {
    let totalAlunos = cursos.reduce((total, curso) => {
        return total + curso.qtdAlunos;
    }, 0)

    console.log("Total de Alunos Matriculados: " + totalAlunos);
    console.log("Media de Alunos Matriculados: " + (totalAlunos / cursos.length).toFixed(2))
}

function cursoComMaiorReceita(cursos) {
    let curso = cursos.reduce((prev, curr) => {
        return prev.receita > curr.receita ? prev : curr
    });

    console.log("\nCurso com maior receita\n" + curso.toString());
}

export default {
    cadastrarCursos, listarCursosCadastrados,
    mediaAritmeticaAlunos, cursoComMaiorReceita
}