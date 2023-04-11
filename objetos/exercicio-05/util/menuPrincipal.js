import scanner from 'readline-sync'

function menu() {
    return scanner.questionInt("Bem-vindo! \n" +
        "1 - Cadastrar funcionário\n" +
        "2 - Consultar bônus dos funcionários\n" +
        "3 - Excluir funcionário\n" +
        "4 - Alterar sálario funcionário\n" +
        "5 - Sair\n" +
        "Opção: ");
}

export default { menu }