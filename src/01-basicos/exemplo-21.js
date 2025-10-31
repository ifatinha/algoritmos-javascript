/** Um trabalhador recebeu seu salário e o depositou em sua conta bancária.
 * Esse trabalhador emitiu dois cheques e agora deseja saber seu saldo atual. Sabe-se que cada
 * operação bancária de retirada paga CPMF de 0,38% e o saldo inicial da conta está zerado.
 */

import scanner from "readline-sync";

let deposito = parseFloat(scanner.question("Valor do deposito: "));
let cheque1 = parseFloat(scanner.question("Valor do primeiro cheque: "));
let cheque2 = parseFloat(scanner.question("Valor do segundo cheque: "));

let cpmf1 = (deposito * 0.38) / 100;

deposito = deposito - cpmf1;

let cpmf2 = (deposito * 0.38) / 100;

let saldo = deposito - cheque1 - cheque2 - cpmf1 - cpmf2;

console.log(
  "Valor Depositado".padEnd(50, ".") + ": " + deposito.toFixed(2) + "R$"
);
console.log("Cheque 1".padEnd(50, ".") + ": " + cheque1.toFixed(2) + "R$");
console.log("Cheque 2".padEnd(50, ".") + ": " + cheque2.toFixed(2) + "R$");
console.log("Valor CPMF 1".padEnd(50, ".") + ": " + cpmf1.toFixed(2) + "R$");
console.log("Valor CPMF 2".padEnd(50, ".") + ": " + cpmf2.toFixed(2) + "R$");
console.log("Saldo".padEnd(50, ".") + ": " + saldo.toFixed(2) + "R$");
