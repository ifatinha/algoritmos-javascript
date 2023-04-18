import App from "./util/App.js";

let funcionarios = [];

let opcao;

do {
    opcao = App.menu();

    switch (opcao) {
        case 1:
            console.clear();
            // for (let i = 0; i < 100; i++) {
            //     funcionarios = App.cadastrarFuncionario(funcionarios);
            // }
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

        case 4:
            console.clear();
            App.funcionariosMenoresSalarios(funcionarios);
            break;

        case 5:
            console.clear();
            App.verificarImpostos(funcionarios);
            break;

        case 6:
            console.clear();
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }
} while (opcao !== 6);