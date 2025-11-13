/**
 * @category Strings
 * @function criptografarTexto
 * @description
 * Criptografa um texto invertendo a ordem das palavras e também
 * as letras de cada palavra. Remove espaços extras e retorna o texto criptografado.
 *
 * @param {string} texto Frase a ser criptografada.
 *
 * @throws {Error} Se o parâmetro não for uma string válida (vazia ou não-string).
 *
 * @returns {string} Texto criptografado com palavras e letras invertidas.
 *
 * @example
 * criptografarTexto("Aprender JavaScript é divertido");
 * // retorno: "odotrev id é tpircSavaJ rednerpA"
 */

export function criptografarTexto(texto) {
  if (typeof texto !== "string" || texto.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida.");
  }

  const textoInvertido = texto.trim().split(/\s+/).reverse();
  const textoCriptografado = textoInvertido
    .map((palavra) => {
      return palavra.split("").reverse().join("");
    })
    .join(" ");

  return textoCriptografado;
}
