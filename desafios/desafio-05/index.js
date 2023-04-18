import App from "./util/App.js";

let funcionarios = [];

let opcao;

do {
    opcao = App.menu();

    switch (opcao) {
        case 1:
            console.clear();
            funcionarios = App.cadastrarFuncionario(funcionarios);
            break;

        case 2:
            console.clear();
            App.funcionariosCadastrados(funcionarios);
            break;

        case 3:
            console.clear();
            App.relatorioSalarios(funcionarios);
            break;

        case 6:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }
} while (opcao !== 6);