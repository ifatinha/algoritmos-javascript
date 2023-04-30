import scanner from 'readline-sync'
import ControlConta from './ControlConta.js';

function menuPrincipal() {
    return (scanner.questionInt("Bem-vindo! Escolha uma das opções abaixo\n" +
        "1 - Criar Conta\n" +
        "2 - Deposito\n" +
        "3 - Saque\n" +
        "4 - Extrato\n" +
        "5 - Cheques\n" +
        "6 - Detalhes\n" +
        "7 - Sair: "));
}

function programaPrincipal() {
    let opcao;

    do {
        opcao = menuPrincipal();
        console.clear();
        switch (opcao) {
            case 1:
                ControlConta.criarConta();
                break;

            case 2:
                ControlConta.deposito();
                break;

            case 3:
                ControlConta.saque();
                break;

            case 4:
                ControlConta.extrato();
                break;

            case 5:
                ControlConta.cheque();
                break;

            case 6:
                ControlConta.verConta();
                break;

            case 7:
                console.log("Encerrando aplicação!");
                break;

            default:
                console.log("Opção Inválida! Tente novamente.")
                break;
        }

    } while (opcao !== 7)
}

export default { programaPrincipal }