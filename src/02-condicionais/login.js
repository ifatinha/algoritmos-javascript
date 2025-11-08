/**
 * @category Condicionais
 * @function login
 * @description Valida o acesso conforme a senha informada.
 *
 * Regras:
 * - Acesso permitido somente se a senha for "admin".
 *
 * @param {string} login - Nome de usuário (não afeta a regra de validação no momento).
 * @param {string} password - Senha informada pelo usuário.
 *
 * @returns {string} Mensagem indicando se o acesso foi permitido ou negado.
 *
 * @throws {Error} Quando login ou password não forem textos válidos.
 *
 * @example
 * // Retorno esperado:
 * login("userTeste", "admin")
 * // "Acesso Permitido!"
 */

export function login(password) {
  if (typeof password !== "string" || password.trim().length === 0) {
    throw new Error("A senha deve ser um texto válido.");
  }

  const senhaAcesso = "admin";

  return password === senhaAcesso ? "Acesso Permitido!" : "Acesso Negado!";
}
