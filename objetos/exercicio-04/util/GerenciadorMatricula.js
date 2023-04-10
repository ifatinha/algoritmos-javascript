import scanner from 'readline-sync'
import gerenciadorAluno from './GerenciadorAluno.js'
import gerenciadorDisciplina from './GerenciadorDisciplina.js';
import Matricula from '../classes/Matricula.js';

function buscarAluno(alunos, codigo) {
    return gerenciadorAluno.buscarAluno(alunos, codigo);
}

function buscarDisciplina(disciplinas, codDisciplina) {
    return gerenciadorDisciplina.buscarDisciplina(disciplinas, codDisciplina);
}

function verificarMatricula(matriculas, matricula) {
    return matriculas.find(function (mat) {
        return (mat.aluno.codigo === matricula.aluno.codigo) &&
            (mat.disciplina.codigo === matricula.disciplina.codigo) &&
            (mat.anoLetivo === matricula.anoLetivo);
    });
}

function matricularAluno(alunos, disciplinas, matriculas) {
    let codAluno = scanner.question("Digite o codigo do aluno: ");
    const aluno = buscarAluno(alunos, codAluno);

    if (aluno !== undefined) {

        let codDisciplina = scanner.question("Digite o codigo da disciplina: ");
        const disciplina = buscarDisciplina(disciplinas, codDisciplina);

        if (disciplina !== undefined) {
            let serie = scanner.question("Digite a série: ");
            const matricula = new Matricula(serie, aluno, disciplina);

            if (verificarMatricula(matriculas, matricula) === undefined) {
                matriculas.push(matricula);
            } else {
                console.log("Erro ao efetuar matricula! Já existe uma mátricula com esses dados!")
            }

        } else {
            console.log("Nenhuma disciplina encontrada! Tente novamente!");
        }

    } else {
        console.log("Nenhum aluno encontrado! Tente novamente!");
    }

    return matriculas;
}

export default { matricularAluno }