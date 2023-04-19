import app from './util/App.js'
import cursos from './util/Cursos.js';

let listaCursos = cursos;

listaCursos = app.cadastrarAlunos(listaCursos);
app.listarCursos(listaCursos);