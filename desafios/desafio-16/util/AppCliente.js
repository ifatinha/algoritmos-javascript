import scanner from 'readline-sync';
import cpfClientes from '../data/CpfClientes.js'
import Names from '../data/Names.js';
import LastNames from '../data/LastNames.js';
import Enderecos from '../data/Enderecos.js';
import Telefones from '../data/Telefones.js';
import Cliente from '../classes/Cliente.js';

let clientes = [];

function menu() {
    return scanner.questionInt("Manutenção de Clientes\n" +
        "1 - Cadastrar Cliente\n" +
        "2 - Consultar Cliente\n" +
        "3 - Alterar Cliente\n" +
        "4 - Excluir Cliente\n" +
        "5 - Clientes Cadastrados\n" +
        "6 - Sair: ");
}

function criarCliente() {
    let cpf = cpfClientes.gerarCpf();
    let nome = Names.generateRandomName() + " " + LastNames.generateRandomLastName();
    let endereco = Enderecos.gerarEndereco();
    let telefone = Telefones.generateRandomTephone();

    return new Cliente(cpf, nome, endereco, telefone);
}

function buscarClienteCpf(cpf) {
    return clientes.some((cliente) => {
        return cliente.cpf === cpf;
    })
}

function cadastrarCliente() {
    const cliente = criarCliente();
    let jaExiste = buscarClienteCpf(cliente.cpf);

    if (!jaExiste) {
        console.log("Foi cadastrado um cliente com os dados abaixo:\n" +
            cliente.toString());
        clientes.push(cliente);
    } else {
        console.log("Erro! Já existe um cliente cadastrado com o CPF informado.");
    }
}

function listarClientes() {
    if (clientes.length > 0) {
        console.log("Clientes cadastrados\n");
        clientes.forEach((cliente) => {
            console.log(cliente.toString());
        })
    } else {
        console.log("Não existe nenhum cliente cadastrado.")
    }
}

function retornarIndexCliente(cpf) {
    return clientes.findIndex((cliente) => {
        return cliente.cpf === cpf;
    })
}

function pesquisarCliente() {
    let cpf = scanner.question("Digite o CPF do cliente: ");
    let index = retornarIndexCliente(cpf);

    if (index !== -1) {
        console.log("Detalhes do cliente\n" +
            clientes[index].toString());
    } else {
        console.log("Nenhum cliente encontrado!");
    }
}

function alterarDadosCliente() {
    let cpf = scanner.question("Digite o cpf do paciente: ");
    let index = retornarIndexCliente(cpf);

    if (index !== -1) {
        console.log("Detalhes do cliente\n" +
            clientes[index].toString());

        clientes[index].nomeCompleto = scanner.question("Nome Cliente: ");
        clientes[index].telefone = scanner.question("Telefone: ");
        clientes[index].endereco = scanner.question("Endereço: ");
        console.log("\nDados do cliente atualizado\n" +
            clientes[index].toString());

    } else {
        console.log("Nenhum cliente encontrado!");
    }
}

function removerCliente() {
    let cpf = scanner.question("Digite o cpf do cliente que você quer remover: ");
    let index = retornarIndexCliente(cpf);

    if (index !== -1) {
        console.log("O cliente abaixo foi removido\n" +
            clientes[index].toString());
        clientes.splice(index, 1);
    } else {
        console.log("Nenhum cliente encontrado!");
    }
}

function gerenciarCliente() {
    let opcao;

    do {
        opcao = menu();

        switch (opcao) {
            case 1:
                console.clear();
                console.log("Sistema de cadastro de clientes\n");
                cadastrarCliente();
                break;

            case 2:
                console.clear();
                pesquisarCliente();
                break;

            case 3:
                console.clear();
                alterarDadosCliente();
                break;

            case 4:
                console.clear();
                removerCliente();
                break;

            case 5:
                console.clear();
                listarClientes();
                break;

            case 6:
                console.log("Encerrando aplicação!");
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== 6)
}

export default {
    gerenciarCliente, clientes, retornarIndexCliente
}