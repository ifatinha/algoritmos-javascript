/**
 * @category Strings
 * @function abreviaNome
 * @description
 * Gera a abreviação (iniciais) de um nome completo. Remove espaços extras e
 * retorna as iniciais em maiúsculas.
 *
 * @param {string} nome Nome completo (ex: "Maria Fernanda Silva").
 *
 * @throws {Error} Se o parâmetro não for uma string válida ou possuir menos de dois nomes.
 *
 * @returns {string} Iniciais do nome em maiúsculas (ex: "MFS").
 *
 * @example
 * abreviaNome("João Pedro Silva") // retorno: "JPS"
 */

export function abreviaNome(nome) {
  if (typeof nome !== "string" || nome.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida");
  }

  const partes = nome.trim().split(/\s+/);

  if (partes.length < 2) {
    throw new Error("A entrada deve conter pelo menos dois nomes");
  }

  const nomeAbreviado = partes
    .map((parte) => parte.charAt(0).toUpperCase())
    .join("");

  return nomeAbreviado;
}
