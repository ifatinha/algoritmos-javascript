import Funcionario from "../classes/Funcionario.js";

function criarFuncionario() {
    const classe = ["A", "B", "C", "D", "E"];

    let matricula = (classe[Math.floor((Math.random() * 4) + 1)] + "-" +
        Math.floor((Math.random() * 99999) + 1));
    let salario = Math.floor((Math.random() * 6500) + 1320);
    let tempoServico = Math.floor((Math.random() * 35) + 1);

    return new Funcionario(matricula, salario, tempoServico);
}

function buscarFuncionario(funcionarios, funcionario) {
    return funcionarios.some((func) => {
        return func.matricula === funcionario.matricula;
    })
}

function cadastrarFuncionarios(funcionarios) {
    const funcionario = criarFuncionario();
    let jaExiste = buscarFuncionario(funcionarios, funcionario);

    if (jaExiste === false) {
        funcionarios.push(funcionario);
        console.log("Funcionario \n" +
            funcionario.toString() + "\n" +
            "cadastrado com sucesso!");
    } else {
        console.log("Erro! Já existe um funcionario cadastrado com essa matricula.");
    }

    return funcionarios;
}

function listarFuncionarios(funcionarios) {
    funcionarios.forEach((func) => {
        console.log(func.toString());
    });
}

export default { cadastrarFuncionarios, listarFuncionarios };