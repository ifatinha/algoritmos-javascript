/** Capitulo 12 - objetos: Exemplo 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import operations from "./util/operations.js";

const offices = [];

for (let i = 0; i < 3; i++) {
    offices.push(operations.registerOffice());
}

offices.forEach(function (office) {
    console.log("Código do cargo: " + office.code);
    console.log("Valor da hora trabalhada: " + office.hourlyRate + "\n");
});

const employee = operations.registerEmployee(offices);
console.log(employee.toString());

