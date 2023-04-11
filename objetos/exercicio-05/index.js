import menuPrincipal from "./util/menuPrincipal.js";

let opcao;

do {
    opcao = menuPrincipal.menu();

    switch (opcao) {

        case 5:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção Inválida!");
            break;
    }

} while (opcao !== 5);