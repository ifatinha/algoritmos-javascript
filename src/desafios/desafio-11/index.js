/** Capitulo 13 - Desafios: Desafio 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import app from './util/App.js'

let cursos = [];
cursos = app.cadastrarCursos(cursos);

console.log("Cursos Cadastrados");
app.listarCursosCadastrados(cursos);

app.mediaAritmeticaAlunos(cursos);
app.cursoComMaiorReceita(cursos);