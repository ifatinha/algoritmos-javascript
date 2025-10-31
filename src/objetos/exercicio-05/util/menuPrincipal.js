import scanner from 'readline-sync'

function menu() {
    return scanner.questionInt("Bem-vindo! \n" +
        "1 - Cadastrar funcionário\n" +
        "2 - Funcionários cadastrados\n"+
        "3 - Consultar bônus dos funcionários\n" +
        "4 - Excluir funcionário\n" +
        "5 - Alterar sálario funcionário\n" +
        "6 - Sair\n" +
        "Opção: ");
}

export default { menu }