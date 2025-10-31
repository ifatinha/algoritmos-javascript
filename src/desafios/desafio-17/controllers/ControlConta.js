import scanner from 'readline-sync'
import ControlTitular from './ControlTitular.js';
import Bancos from '../data/Bancos.js';
import CartaoDebito from '../classes/CartaoDebito.js';
import Conta from '../classes/Conta.js';
import Corrente from '../classes/Corrente.js';
import Poupanca from '../classes/Poupanca.js';

const contas = [];

function tipoConta() {
    return (scanner.questionInt("Escolha o tipo de conta\n" +
        "1 - Conta Simples\n" +
        "2 - Conta Corrente\n" +
        "3 - Conta Poupança\n" +
        "4 - Sair: "));
}

function novaConta(opcao) {
    let conta;

    const titular = ControlTitular.cadastrarTitular();
    const banco = Bancos.gerarBanco();
    const cartao = new CartaoDebito();

    if (opcao === 1) {
        conta = new Conta(banco, titular, cartao);
    } else if (opcao === 2) {
        conta = new Corrente(banco, titular, cartao);
    } else if (opcao === 3) {
        conta = new Poupanca(banco, titular, cartao);
        conta.calcularRendimentos();
    }

    conta.criarNumeroConta();
    conta.cadastrarCheques();
    return conta;
}

function contasCadastradas() {
    if (contas.length > 0) {
        console.log("CONTAS CADASTRADAS\n");
        contas.forEach((conta) => {
            console.log(conta.toString());
        })
    } else {
        console.log("Não existe contas cadastradas.");
    }
}

function criarConta() {
    let opcao;
    let conta;

    do {
        opcao = tipoConta();

        switch (opcao) {
            case 1:
                console.log("TIPO DE CONTA: SIMPLES");
                console.clear();
                conta = novaConta(opcao);
                console.log("Foi criada uma conta simples com os seguintes dados\n" +
                    conta.toString());
                contas.push(conta);
                break;

            case 2:
                console.log("TIPO DE CONTA: CORRENTE");
                console.clear();
                conta = novaConta(opcao);
                console.log("Foi criada uma conta corrente com os seguintes dados\n" +
                    conta.toString());
                contas.push(conta);
                break;

            case 3:
                console.log("TIPO DE CONTA: POUPANÇA");
                console.clear();
                conta = novaConta(opcao);
                console.log("Foi criada uma conta poupança com os seguintes dados\n" +
                    conta.toString());
                contas.push(conta);
                break;

            case 4:
                break;

            default:
                console.log("Opção inválida!");
                break;
        }
    } while (opcao !== 4);
}

function buscarContaNumero(numero) {
    return contas.findIndex((conta) => {
        return conta.numero === numero;
    })
}

function detalhesConta(conta) {
    let detalhes = ("Dados da conta\n" +
        "Titula: " + conta.titular.cpf + " - " + conta.titular.nome + "\n" +
        "Conta: " + conta.numero + "\n" +
        "Agência: " + conta.agencia + "\n" +
        "Banco: " + conta.banco.value + " - " + conta.banco.name + "\n" +
        "Saldo: R$" + conta.saldo + "\n");

    if (conta instanceof Corrente) {
        detalhes += ("Cheque Especial R$" + conta.limiteCredito + "\n");
    }

    return detalhes;
}

function deposito() {
    let numConta = scanner.question("Digite o número da conta: ");
    let index = buscarContaNumero(numConta);

    if (index !== -1) {
        console.log(detalhesConta(contas[index]));
        let valorDeposito = scanner.questionFloat("Valor do deposito: ");
        contas[index].deposito(valorDeposito);
    } else {
        console.log("Nehuma conta encontrada.");
    }
}

function saque() {
    let numConta = scanner.question("Digite o número da conta: ");
    let index = buscarContaNumero(numConta);

    if (index !== -1) {
        console.log(detalhesConta(contas[index]));
        let valorSaque = scanner.questionFloat("Valor do saque: ");
        contas[index].saque(valorSaque);
    } else {
        console.log("Nehuma conta encontrada.");
    }
}

function extrato() {
    let numConta = scanner.question("Digite o número da conta: ");
    let index = buscarContaNumero(numConta);

    if (index !== -1) {
        contas[index].extrato();
    } else {
        console.log("Nehuma conta encontrada.");
    }
}

function cheque() {
    let numConta = scanner.question("Digite o número da conta: ");
    let index = buscarContaNumero(numConta);

    if (index !== -1) {
        let valorCheque = scanner.questionFloat("Valor do cheque: ");
        contas[index].atualizarCheque(valorCheque);
    } else {
        console.log("Nehuma conta encontrada.");
    }
}

function verConta() {
    let numConta = scanner.question("Digite o número da conta: ");
    let index = buscarContaNumero(numConta);

    if (index !== -1) {
        console.log(contas[index].toString());
    } else {
        console.log("Nehuma conta encontrada.");
    }
}

export default {
    criarConta, contas, contasCadastradas,
    deposito, saque, extrato, cheque, verConta
}

