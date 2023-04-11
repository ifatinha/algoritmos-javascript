import scanner from 'readline-sync'
import Funcionario from '../classes/Funcionario.js';
import gerenciadorDependentes from './gerenciadorDependentes.js';

function buscarFuncionario(funcionarios, f) {
    return funcionarios.find(function (funcionario) {
        return funcionario.matricula === f.matricula;
    });
}

function criarFuncionario() {
    let matricula = scanner.question("Matricula: ");
    let nome = scanner.question("Nome: ");
    let cargo = scanner.question("Cargo: ");
    let salario = scanner.questionFloat("Salario: ");

    return new Funcionario(matricula, nome, cargo, salario);
}

function cadastrarFuncionario(funcionarios) {
    let funcionario = criarFuncionario();

    if (buscarFuncionario(funcionarios, funcionario) === undefined) {
        let resposta = gerenciadorDependentes.menuDependente();

        while (resposta === 1) {
            if (resposta === 1) {
                let dependente = gerenciadorDependentes.cadastrarDependente(funcionario);
                funcionario.dependentes.push(dependente);
            }

            resposta = gerenciadorDependentes.novoDependente();
        }

        funcionario.calcularBonusDependentes();
        funcionarios.push(funcionario);
        console.log("Funcionário cadastrado com sucesso!");

    } else {
        console.log("Já existe um funcionário cadastrado com a matricula informada!");
    }

    return funcionarios;
}

function listaFuncionarios(funcionarios) {
    funcionarios.forEach(function (funcionario) {
        funcionario.toString() + "\n"
    });
}

function mostrarBonusFuncionarios(funcionarios) {
    funcionarios.forEach(function (funcionario) {
        console.log(funcionario.matricula + ". " + funcionario.nome +
            "(" + funcionario.dependentes.length + " dependente(s))\n" +
            "Bônus: R$" + funcionario.bonus+"\n");
    })
}

export default { cadastrarFuncionario, listaFuncionarios, mostrarBonusFuncionarios };