/**
 * 📘 Calcula o novo salário de um funcionário com base em regras de aumento.
 *
 * Funcionários que recebem até R$ 500 têm um aumento de 20%.
 * Funcionários que recebem acima de R$ 500 têm um aumento de 10%.
 *
 * @param {number} salario - Salário atual do funcionário.
 * @returns {{ aumento: number, novoSalario: number }} Um objeto com o valor do aumento e o novo salário.
 * @throws {Error} Se o parâmetro não for um número.
 *
 * @example
 * calcularSalario(400); // { aumento: 80, novoSalario: 480 }
 * calcularSalario(1000); // { aumento: 100, novoSalario: 1100 }
 */

export  function calcularSalario(salario){
  if(typeof salario !== "number"){
    throw new Error("Os parâmetros devem ser números.");
  }

  const aumento = salario <= 500 ? (salario * 20) / 100 : (salario * 10) / 100;
  const novoSalario = salario + aumento;

  return {aumento, novoSalario}
}