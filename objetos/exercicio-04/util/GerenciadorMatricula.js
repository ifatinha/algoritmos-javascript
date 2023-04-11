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

function buscarMatricula(matriculas) {
    console.log("Informe os dados de matricula");
    let codAluno = scanner.question("Digite o codigo do aluno: ");
    let codDisciplina = scanner.question("Digite o codigo da disciplina: ");
    let anoLetivo = scanner.questionInt("Digite o ano letivo: ");
    let serie = scanner.question("Digite a seria: ");

    return matriculas.findIndex(function (matricula) {
        return ((matricula.aluno.codigo === codAluno) && (matricula.disciplina.codigo === codDisciplina) &&
            (matricula.anoLetivo === anoLetivo) && (matricula.serie === serie));
    })
}

function inserirNotas() {
    console.log("Digite as notas do aluno");
    const notas = [];
    let nota = 0.0;

    for (let i = 0; i < 5; i++) {
        nota = scanner.questionFloat((i + 1) + "° nota: (0 - 10): ");

        while (nota < 0 && nota > 10) {
            nota = scanner.questionFloat("Nota inválida! Informe um numero entre 0 e 10: ");
        }

        notas.push(nota);
    }

    return notas;
}

function alterarMatricula(matriculas) {
    const matricula = buscarMatricula(matriculas);

    if (matricula !== -1) {
        console.log("Matricula Encontrada");
        matriculas[matricula].toString();
        matriculas[matricula].notas = inserirNotas();
        console.log("Notas inseridas com sucesso!");
        matriculas[matricula].calcularMedia();
    } else {
        console.log("Matricula não encontrada!");
    }

    return matriculas;
}

function visualizarBoletim(matriculas) {
    let alunoCod = scanner.question("Digite o codigo do aluno: ");
    let anoLetivo = scanner.questionInt("Digite o ano letivo: ");

    let botetim = matriculas.filter(function (matricula) {
        return ((matricula.aluno.codigo === alunoCod) &&
            (matricula.anoLetivo === anoLetivo));
    });

    if (botetim.length > 0) {

        botetim.forEach(function (mat) {
            mat.toString();
        });

    } else {
        console.log("Matricula não encontrada!");
    }
}

export default { matricularAluno, alterarMatricula, visualizarBoletim }