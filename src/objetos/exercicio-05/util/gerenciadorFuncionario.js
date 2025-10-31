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
    if (funcionarios.length > 0) {
        console.log("Funcionários cadastrados");
        funcionarios.forEach(function (funcionario) {
            funcionario.toString();
        });
    }else{
        console.log("Nenhum funcionário cadastrado!");
    }
}

function mostrarBonusFuncionarios(funcionarios) {
    if (funcionarios.length > 0) {
        console.log("Bônus Mensal dos Funcionários\n");
        funcionarios.forEach(function (funcionario) {
            console.log(funcionario.matricula + ". " + funcionario.nome +
                "(" + funcionario.dependentes.length + " dependente(s))\n" +
                "Bônus: R$" + funcionario.bonus + "\n");
        })
    } else {
        console.log("Nenhum funcionario cadastrado!");
    }
}

function retonarIndexFuncionario(funcionarios, matricula) {
    return funcionarios.findIndex(function (funcionario) {
        return funcionario.matricula === matricula;
    })
}

function removerFuncionario(funcionarios) {
    let matricula = scanner.question("Digite a matricula do funcionario: ");
    let index = retonarIndexFuncionario(funcionarios, matricula);

    if (index !== -1) {
        console.log("Deseja excluir os dados do funcionário: ");
        funcionarios[index].toString();
        let resposta = scanner.questionInt("1 - Sim / 2 - Não: ");

        while (resposta !== 1 && resposta !== 2) {
            resposta = scanner.questionInt("Opção inválida! (1 - Sim / 2 - Não): ");
        }

        if (resposta === 1) {
            funcionarios.splice(index, 1);
            console.log("Os dados do funcionário foram excluidos.");
        } else {
            console.log("Operação cancelada!");
        }

    } else {
        console.log("Nenhum funcionário encontrado!");
    }

    return funcionarios;
}

function alterarFuncionario(funcionarios) {
    let matricula = scanner.question("Digite a matricula do funcionário: ");
    let index = retonarIndexFuncionario(funcionarios, matricula);

    if (index !== -1) {
        console.log("Dados do funcionário");
        funcionarios[index].toString();
        funcionarios[index].salario = scanner.questionFloat("Digite o novo salario: ");
        console.log("Salario alterado com sucesso!");
    } else {
        console.log("Não foram encontrados dados do funcionário!");
    }

    return funcionarios;
}

export default { cadastrarFuncionario, listaFuncionarios, mostrarBonusFuncionarios, removerFuncionario, alterarFuncionario };