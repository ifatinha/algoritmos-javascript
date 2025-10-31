import scanner from 'readline-sync'
import cargos from './Cargos.js'
import lastNames from '../data/LastNames.js'
import firstNames from '../data/FirstNames.js'
import Funcionario from '../classes/Funcionario.js';

function menu() {
    return scanner.questionInt("Bem-Vindo! Escolha uma das opções abaixo: \n" +
        "1 - Cadastrar Funcionários\n" +
        "2 - Relatorio de funcionarios\n" +
        "3 - Consultar funcionarios por categoria\n" +
        "4 - Sair: ");
}

function criarFuncionario() {
    let cargo = cargos.randomCargo();
    let matricula = (cargo.categoria + "-" + (Math.floor(Math.random() * 8999) + 1000));
    let nome = lastNames.generateRandomLastName() + ", " +
        firstNames.generateRandomName();
    return new Funcionario(matricula, nome, cargo);
}

function buscarFuncionario(funcionarios, funcionario) {
    return funcionarios.some((func) => {
        return func.matricula === funcionario.matricula;
    })
}

function cadastrarFuncionario(funcionarios) {

    for (let i = 0; i < 25; i++) {
        const funcionario = criarFuncionario();
        let jaExiste = buscarFuncionario(funcionarios, funcionario);

        if (jaExiste === false) {
            console.log("Um funcionario com os dados \n" +
                funcionario.toString() + "\n foi cadastrado!");
            funcionarios.push(funcionario);
        } else {
            console.log("Erro! Matricula ja cadastrada!");
        }
    }

    return funcionarios;
}

function listarFuncionarios(funcionarios) {
    funcionarios.forEach((f) => {
        console.log(f.toString());
    })
}

function totalSalarioCategoria(arr) {
    return arr.reduce((total, func) => {
        return total + func.salario.valor
    }, 0)
}

function funcionariosCategoria(funcionarios) {
    let categoria = scanner.question("Digite a categoria que voce quer consultar (A, B, C, D, E): ");

    const arr = funcionarios.filter((f) => {
        return f.salario.categoria === categoria.toUpperCase();
    });

    if (arr.length > 0) {
        console.log("Lista de funcionarios que pertecem a categoria " + categoria.toUpperCase());
        listarFuncionarios(arr);
        console.log("\nValor Total de Salarios da Categoria: R$" + totalSalarioCategoria(arr).toFixed(2));
    } else {
        console.log("Não existe nenhum funcionario na categoria " + categoria.toUpperCase());
    }
}

export default { menu, cadastrarFuncionario, listarFuncionarios, funcionariosCategoria }