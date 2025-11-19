class Funcionario {
  constructor(office, sex, quantityHoursWorked) {
    this.office = office;
    this.sex = sex;
    this.quantityHoursWorked = quantityHoursWorked;
    this.finalSalary = 0;
  }

  calculateFinalSalary() {
    this.finalSalary = this.office.hourlyRate * this.quantityHoursWorked;
    let gratification = 0;

    if (this.sex === "F" || this.sex === "f") {
      gratification = 0.2 * this.finalSalary;
    }

    return this.finalSalary + gratification;
  }

  toString() {
    return (
      "\nDados do funcionário: \n" +
      "Código do Cargo: " +
      this.office.code +
      "\n" +
      "Valor da Hora Trabalhada: " +
      this.office.hourlyRate +
      "\n" +
      "Sexo: " +
      this.sex +
      "\n" +
      "Quantidade de horas trabalhada: " +
      this.quantityHoursWorked +
      "\n" +
      "Sálario Final: R$" +
      this.calculateFinalSalary().toFixed(2)
    );
  }
}

export default Funcionario;
