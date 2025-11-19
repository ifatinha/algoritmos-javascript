/** Capitulo 13 - Desafios: Desafio 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import app from "./util/App.js";
import cursos from "./util/Cursos.js";

let listaCursos = cursos;

listaCursos = app.cadastrarAlunos(listaCursos);
app.listarCursos(listaCursos);
