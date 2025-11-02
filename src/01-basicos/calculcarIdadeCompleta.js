/**
 * Calcula a idade de uma pessoa em anos, meses, dias e semanas com base no ano de nascimento.
 * @param {number} anoNascimento - O ano de nascimento da pessoa.
 * @param {number} [anoAtual=new Date().getFullYear()] - O ano atual (opcional).
 * @returns {{ anos: number, meses: number, dias: number, semanas: number }} Idade detalhada.
 * @throws {Error} Se o ano de nascimento for inválido ou maior que o ano atual.
 *
 * @example
 * calcularIdadeCompleta(2000, 2025);
 * // Retorna: { anos: 25, meses: 300, dias: 9125, semanas: 1303 }
 */

export function calcularIdadeCompleta(
  anoNascimento,
  anoAtual = new Date().getFullYear()
) {
  if (typeof anoNascimento !== "number" || isNaN(anoNascimento)) {
    throw new Error("O ano de nascimento deve ser um número válido.");
  }

  if (anoNascimento > anoAtual) {
    throw new Error("O ano de nascimento não pode ser maior que o ano atual.");
  }

  const anos = anoAtual - anoNascimento;
  const meses = anos * 12;
  const dias = anos * 365;
  const semanas = Math.floor(dias / 7);

  return { anos, meses, dias, semanas };
}
