import scanner from 'readline-sync'

let numero = scanner.questionInt("Digite o numero que voce quer converter para binario: ");
let binario = "";
let contador = 0;

do {

    console.log(numero);
    binario += numero % 2;
    numero = numero / 2;
    numero = numero.toPrecision(1);

    contador++;
} while (contador < 10);

console.log(binario);