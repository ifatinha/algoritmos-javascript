import scanner from 'readline-sync'
import gerenciadorFunc from './GerenciadorFunc.js';

function menu() {
    return scanner.questionInt("Bem-vindo! Escolha uma das opções abaixo\n" +
        "1 - Cadastrar novo funcionario\n" +
        "2 - Listar funcionarios cadastrados\n" +
        "3 - Relatorios Salarios\n" +
        "4 - Consultar Funcionarios com Menores Salarios\n" +
        "5 - Relatorio por Tempo de serviço\n" +
        "6 - Sair: ");
}

function cadastrarFuncionario(funcionarios) {
    return gerenciadorFunc.cadastrarFuncionarios(funcionarios);
}

function funcionariosCadastrados(funcionarios) {
    console.log("Funcionarios cadastrados");
    gerenciadorFunc.listarFuncionarios(funcionarios);
}

function filtrarSalariosAcima(funcionarios, salario) {
    return funcionarios.filter((func) => {
        return func.salario > salario;
    });
}

function filtarSalariosAbaixo(funcionarios, salario) {
    return funcionarios.filter((func) => {
        return func.salario <= salario;
    });
}

function relatorioSalarios(funcionarios) {
    let salarioBase = scanner.questionFloat("Digite o valor do salario a ser consultado: ");

    const salariosAcima = filtrarSalariosAcima(funcionarios, salarioBase);
    const salariosAbaixo = filtarSalariosAbaixo(funcionarios, salarioBase);

    if (salariosAcima.length > 0) {
        console.log("Funcionarios com salarios acima de R$" + salarioBase.toFixed(2));
        gerenciadorFunc.listarFuncionarios(salariosAcima);
    } else {
        console.log("Nenhum funcionario encontrado!");
    }

    if (salariosAcima.length > 0) {
        console.log("\nFuncionarios com salarios abaixo de R$" + salarioBase.toFixed(2));
        gerenciadorFunc.listarFuncionarios(salariosAbaixo);
    } else {
        console.log("\nNenhum funcionario encontrado!");
    }
}

export default {
    menu, cadastrarFuncionario, funcionariosCadastrados,
    relatorioSalarios
}