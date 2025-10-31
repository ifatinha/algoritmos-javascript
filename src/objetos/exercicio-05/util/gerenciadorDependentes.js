import scanner from 'readline-sync'
import Dependente from '../classes/Dependente.js';

function menuDependente() {
    let resposta = scanner.questionInt("O funcionário possui dependentes? (1 - Sim \ 2 - Não): ");

    while (resposta !== 1 && resposta !== 2) {
        resposta = scanner.questionInt("Opção inválida! O funcionário possui dependentes? (1 - Sim \ 2 - Não): ");
    }

    return resposta;
}

function novoDependente() {
    let resposta = scanner.questionInt("Deseje cadastrar outro dependente? (1 - Sim \ 2 - Não): ");

    while (resposta !== 1 && resposta !== 2) {
        resposta = scanner.questionInt("Opção inválida! O funcionário possui dependentes? (1 - Sim \ 2 - Não): ");
    }

    return resposta;
}

function cadastrarDependente(funcionario) {
    let nome = scanner.question("Nome: ");
    return new Dependente(nome, funcionario);
}

export default { menuDependente, cadastrarDependente, novoDependente }