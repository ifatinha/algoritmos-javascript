/** Capitulo 06 - Vetores: Exemplo 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const contas = [];
const saldos = [];
let contador = 1;
let opcao;
let numConta;
let indice;

for (let i = 0; i < 10; i++) {
    contas.push(contador);
    saldos.push(Math.floor((Math.random() * 9999) + 1));
    contador++;
};

do {
    console.log("1 - Efetuar Depósito");
    console.log("2 - Efetuar Saque");
    console.log("3 - Ativo Bancário");
    console.log("4 - Finalizar Programa");
    opcao = scanner.questionInt("Opção: ");

    switch (opcao) {
        case 1:
            console.log("Sistema de depósito.");
            numConta = scanner.questionInt("Digite o número da conta: ");
            indice = contas.findIndex(function (numero) {
                return numConta === numero;
            });

            if (indice !== -1) {
                console.log("Conta: " + contas[indice]);
                console.log("Saldo: R$ " + saldos[indice].toFixed(2));
                let saldo = scanner.questionFloat("Valor do Deposito: ");
                saldos[indice] += saldo;
                console.log("Deposito Efetuado! Novo Saldo: R$ " + saldos[indice].toFixed(2));
            } else {
                console.log("A conta " + numConta + " não existe.");
            }

            break;
        case 2:
            console.log("Sistema de Saques.");
            numConta = scanner.questionInt("Digite o número da conta: ");
            indice = contas.findIndex(function (numero) {
                return numConta === numero;
            });

            if (indice !== -1) {
                console.log("Conta: " + contas[indice]);
                console.log("Saldo: R$ " + saldos[indice].toFixed(2));
                let saque = scanner.questionFloat("Valor do Saque: ");

                while (saque > saldos[indice]) {
                    console.log("Saldo Insuficiente")
                    saque = scanner.questionFloat("Saldo Insuficiente! Novo valor: ");
                }

                saldos[indice] -= saque;
                console.log("Saque Efetuado! Novo Saldo: R$ " + saldos[indice].toFixed(2));
            } else {
                console.log("A conta " + numConta + " não existe.");
            }

            break;
        case 3:

            const soma = saldos.reduce(function (total, saldo) {
                return total + saldo;
            });

            console.log("Ativo Bancário: R$ " + soma.toFixed(2));
            break;
        case 4:
            console.log("Encerrar Aplicação!");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 4);