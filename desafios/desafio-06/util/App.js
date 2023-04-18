import scanner from 'readline-sync'

function menu() {
    return scanner.questionInt("Bem-vindo! Escolha uma das opções abaixo \n" +
        "1 - Incluir numero\n" +
        "2 - Listar numeros\n" +
        "3 - Consultar um numero\n" +
        "4 - Excluir numero\n" +
        "5 - Deletar vetor\n" +
        "6 - Sair: ");
}

function addNumero(numeros) {
    console.log("Adicionando numeros ao vetor!");
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor((Math.random() * 999) + 0));
    }
    return numeros;
}

function listarNumeros(numeros) {
    if (numeros.length > 0) {
        numeros.forEach((numero, index) => {
            console.log(index + ". " + numero);
        })
    } else {
        console.log("O vetor está vazio!");
    }
}

function pesquisarIndex(numeros, numero) {
    return numeros.findIndex((num) => {
        return num === numero
    });
}

function pesquisarNumero(numeros) {
    let numero = scanner.questionInt("Digite o numero que voce quer procurar no vetor: ");
    let index = pesquisarIndex(numeros, numero);

    if (index !== -1) {
        console.log("O numemro " + numero + " foi encontrado na posição " + index);
    } else {
        console.log("O numero " + numero + " não foi encontrado no vetor.");
    }
}

function removerNumero(numeros) {
    let numero = scanner.questionInt("Digite o numero que voce quer remover: ");
    let index = pesquisarIndex(numeros, numero);

    if (index !== -1) {
        numeros.splice(index, 1);
        console.log("O numero " + numero + " foi removido com sucesso!");
    } else {
        console.log("O numero " + numero + " não foi encontrado no vetor!");
    }

    return numeros;
}

function deletarVetor(numeros) {
    console.log("Removando numeros do vetor");
    for (let i = 0; i < 10; i++) {
        numeros.shift();
    }
    return numeros;
}

export default {
    menu, addNumero, listarNumeros,
    pesquisarNumero, removerNumero, deletarVetor
}