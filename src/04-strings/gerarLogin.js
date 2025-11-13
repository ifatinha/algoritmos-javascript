/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

export function gerarLogin(nome) {
  if (typeof nome !== "string" || nome.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida");
  }

  const partes = nome.trim().split(/\s+/);

  if (partes.length < 2) {
    throw new Error("A entrada deve ser de pelo menos dois partes.");
  }

  const iniciais = partes
    .slice(0, partes.length)
    .map((nome) => nome[0])
    .join("");
  const ultimoSobrenome = partes[partes.length - 1];

  return (iniciais + ultimoSobrenome).toLowerCase();
}

console.log(gerarLogin("Ethan Desmond Duncan Shepherd"));
