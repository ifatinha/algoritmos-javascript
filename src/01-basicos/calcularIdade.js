/**
 * 🧮 Calcula a idade atual e a idade que a pessoa terá em 2050.
 *
 * @category Básicos
 * @param {number} anoNascimento - Ano de nascimento da pessoa.
 * @returns {{ idade: number, idadeFutura: number }} - Idade atual e idade projetada para o ano de 2050.
 * @throws {Error} Se o valor informado não for um número válido.
 *
 * @example
 * calcularIdade(1990);
 * // Retorna:
 * // {
 * //   idade: 35,
 * //   idadeFutura: 60
 * // }
 */

export function calcularIdade(anoNascimento) {
  const anoAtual = new Date().getFullYear();

  if (typeof anoNascimento !== "number" || isNaN(anoNascimento)) {
    throw new Error("O valor deve ser um número válido.");
  }

  const idade = anoAtual - anoNascimento;
  const idadeFutura = 2050 - anoNascimento;

  return { idade, idadeFutura };
}
