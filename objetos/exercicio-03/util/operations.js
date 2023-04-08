import scanner from 'readline-sync';
import Office from '../classes/office.js';
import Employee from '../classes/employee.js';

function registerOffice() {
    const code = +Math.floor((Math.random() * 1000) + 1);
    const hourlyRate = Math.floor(Math.floor(Math.random() * 100) + 5);
    const office = new Office(code, hourlyRate);
    return office;
}

function registerEmployee(offices) {
    let codeOffice = scanner.questionInt("Digite o código do cargo: ");
    let index = checkOffice(codeOffice, offices);
    while (index === -1) {
        codeOffice = scanner.questionInt("Código não encontrado, tente novamente: ");
        index = checkOffice(codeOffice, offices);
    }

    let sex = scanner.question("Digite o sexo do funcionário: (M/F) ");
    while (!validateSex(sex)) {
        sex = scanner.question("Opção inválida. Digite o sexo do funcionário: (M/F) ");
    }

    let quantityHoursWorked = scanner.questionInt("Digite a quantidade de horas trabalhadas pelo funcionário: ");

    const employee = new Employee(offices[index], sex, quantityHoursWorked);
    return employee;
}

function checkOffice(codeOffice, offices) {
    let index = offices.findIndex(function (office) {
        return codeOffice === office.code;
    });

    return index;
}

function validateSex(sex) {
    if (sex === "F" || sex === "f" || sex === "M" || sex === "m") {
        return true;
    } else {
        return false;
    }
}

export default { registerOffice, registerEmployee };