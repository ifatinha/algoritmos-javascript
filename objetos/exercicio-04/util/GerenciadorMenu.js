import scanner from 'readline-sync'

function menuPrincipal() {
    return scanner.questionInt("Bem-vindo! Escolha uma das opções abaixo\n" +
        "1 - Cadastrar Disciplina\n" +
        "2 - Cadastrar Aluno\n" +
        "3 - Matricular Aluno\n" +
        "4 - Lançar Notas do Aluno\n" +
        "5 - Visualizar Boletim do Aluno\n" +
        "6 - Sair\n" +
        "Opção: ");
}

export default { menuPrincipal };