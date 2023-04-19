import scanner from 'readline-sync'

let num1 = scanner.questionInt("Digite o primeiro numero: ");
let num2 = scanner.questionInt("Digite o segundo numero: ");

verificarNumerosAmigaveis(num1, num2);

function verificarNumerosAmigaveis(num1, num2) {
    let divisoresNum1 = verificarDivisores(num1);
    let divisoresNum2 = verificarDivisores(num2);

    const somaDivisoresNum1 = somaDivisores(divisoresNum1);

    const somaDivisoresNum2 = somaDivisores(divisoresNum2);

    console.log("Soma dos divisores de " + num1 + ": " + divisoresNum1.join(" + ") +
        " = " + somaDivisoresNum1);
    console.log("Soma dos divisores de " + num2 + ": " + divisoresNum2.join(" + ") +
        " = " + somaDivisoresNum2);


    if (somaDivisoresNum1 === num2 || somaDivisoresNum2 === num1) {
        console.log("Os numeros " + num1 + " e " + num2 + " são amigáveis!");
    } else {
        console.log("Os numeros " + num1 + " e " + num2 + " não são amigáveis!");
    }
}

function somaDivisores(divisores) {
    return divisores.reduce((total, n) => {
        return total + n;
    });
}

function verificarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}