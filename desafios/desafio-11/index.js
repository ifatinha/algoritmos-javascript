import app from './util/App.js'

let cursos = [];
cursos = app.cadastrarCursos(cursos);

console.log("Cursos Cadastrados");
app.listarCursosCadastrados(cursos);

app.mediaAritmeticaAlunos(cursos);
app.cursoComMaiorReceita(cursos);