import scanner from 'readline-sync'

let numero = scanner.questionInt("Digite um numero para verificar se ele e um Numero Narcisista: ");

verificarNumeroNarcisista(numero);

function verificarNumeroNarcisista(numero) {
    let digitos = numero.toString().split("");

    const potencias = digitos.map((digito) => {
        return Math.pow(parseInt(digito), digitos.length);
    })

    const resultado = potencias.reduce((total, numero) => {
        return total + numero;
    })

    if (resultado === numero) {
        console.log(numero + " é um número Narcisista");
    } else {
        console.log(numero + " não é um número Narcisista");
    }
}