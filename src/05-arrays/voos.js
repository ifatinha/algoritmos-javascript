/**
 * @category Array
 * @module voos
 *
 * Módulo para busca e reserva de voos (versão pura, sem I/O).
 * As funções não fazem leitura de console; retornam valores/objetos para o chamador.
 */

/**
 * Dados iniciais (seed) usados nos exemplos e testes.
 * Cada voo: { numero: number, origem: string, destino: string, lugares: number }
 */

export const seedFlights = [
  { numero: 1001, origem: "Rio Branco", destino: "São Paulo", lugares: 45 },
  { numero: 1002, origem: "Goiania", destino: "São Luís", lugares: 30 },
  { numero: 1003, origem: "Curitiba", destino: "João Pessoa", lugares: 10 },
  { numero: 1004, origem: "Porto Alegra", destino: "Macéio", lugares: 20 },
  { numero: 1005, origem: "Palmas", destino: "Aracajú", lugares: 85 },
  { numero: 1006, origem: "Curitiba", destino: "Rio de Janeiro", lugares: 60 },
  { numero: 1007, origem: "Belém", destino: "Salvador", lugares: 18 },
  { numero: 1008, origem: "Campo Grande", destino: "Teresina", lugares: 90 },
  { numero: 1009, origem: "Vitória", destino: "Recife", lugares: 48 },
  { numero: 1010, origem: "Brasilia", destino: "Porto Velho", lugares: 30 },
  { numero: 1011, origem: "Manaus", destino: "Fortaleza", lugares: 55 },
  { numero: 1012, origem: "Natal", destino: "Porto Alegre", lugares: 22 },
  { numero: 1013, origem: "Florianópolis", destino: "Belém", lugares: 40 },
  { numero: 1014, origem: "São Paulo", destino: "Belém", lugares: 75 },
  { numero: 1015, origem: "Teresina", destino: "Curitiba", lugares: 28 },
  { numero: 1016, origem: "Salvador", destino: "Campo Grande", lugares: 65 },
  { numero: 1017, origem: "Macapá", destino: "Goiânia", lugares: 33 },
  { numero: 1018, origem: "Recife", destino: "Manaus", lugares: 50 },
  { numero: 1019, origem: "João Pessoa", destino: "Vitória", lugares: 42 },
  { numero: 1020, origem: "Aracajú", destino: "Florianópolis", lugares: 38 },
  { numero: 1021, origem: "Fortaleza", destino: "Natal", lugares: 27 },
  { numero: 1022, origem: "São Luís", destino: "Brasília", lugares: 70 },
  { numero: 1023, origem: "Porto Velho", destino: "São Paulo", lugares: 58 },
  { numero: 1024, origem: "Maceió", destino: "Rio Branco", lugares: 25 },
  { numero: 1025, origem: "Boa Vista", destino: "Recife", lugares: 32 },
  { numero: 1026, origem: "Cuiabá", destino: "Porto Alegre", lugares: 44 },
  { numero: 1027, origem: "Rio de Janeiro", destino: "Curitiba", lugares: 80 },
  { numero: 1028, origem: "Salvador", destino: "Vitória", lugares: 36 },
  { numero: 1029, origem: "Goiânia", destino: "Belém", lugares: 52 },
  { numero: 1030, origem: "João Pessoa", destino: "Natal", lugares: 21 },
  { numero: 1031, origem: "Rio de Janeiro", destino: "Manaus", lugares: 47 },
  { numero: 1032, origem: "Curitiba", destino: "Belém", lugares: 29 },
  { numero: 1033, origem: "Recife", destino: "Goiânia", lugares: 56 },
  { numero: 1034, origem: "Fortaleza", destino: "São Paulo", lugares: 78 },
  { numero: 1035, origem: "Natal", destino: "Porto Alegre", lugares: 33 },
  { numero: 1036, origem: "João Pessoa", destino: "Salvador", lugares: 24 },
  { numero: 1037, origem: "Boa Vista", destino: "Brasília", lugares: 62 },
  { numero: 1038, origem: "Vitória", destino: "Florianópolis", lugares: 49 },
  { numero: 1039, origem: "Palmas", destino: "Fortaleza", lugares: 41 },
  { numero: 1040, origem: "Maceió", destino: "Rio de Janeiro", lugares: 34 },
];

/**
 * @category Array
 * @function buscarVooPorNumero
 * @description
 * Busca um voo por seu número (inteiro). Retorna o voo encontrado ou null.
 *
 * @param {Array} voos Array de objetos de voo.
 * @param {number} numero Número do voo a buscar.
 *
 * @throws {Error} Se `voos` não for array não vazio ou `numero` não for número inteiro.
 *
 * @returns {Object|null} Voo encontrado ou null se não existir.
 *
 * @example
 * buscarVooPorNumero(seedFlights, 1001);
 */

export function buscaVooPorNumero(voos, numero) {
  if (!Array.isArray(voos) || voos.length === 0) {
    throw new Error("O parâmetro 'voos' deve ser um array não vazio");
  }

  if (
    typeof numero !== "number" ||
    !Number.isInteger(numero) ||
    Number.isNaN(numero)
  ) {
    throw new Error("O parâmetro 'numero' deve ser um inteiro válido");
  }

  const index = voos.findIndex((voo) => voo.numero === numero);
  return index === -1 ? null : { ...voos[index] };
}

/**
 * @category Array
 * @function buscarVoosPorOrigem
 * @description
 * Retorna todos os voos cuja origem bate exatamente com o termo fornecido (comparação case-insensitive).
 *
 * @param {Array} voos Array de objetos de voo.
 * @param {string} origemTerm Termo de origem a pesquisar (exato, sem regex).
 *
 * @throws {Error} Se parâmetros inválidos.
 *
 * @returns {Array} Array de voos correspondentes (pode ser vazio).
 *
 * @example
 * buscarVoosPorOrigem(seedFlights, "Goiania");
 */

export function buscaVoosPorOrigem(voos, origemTerm) {
  if (!Array.isArray(voos) || voos.length === 0) {
    throw new Error("O parâmetro 'voos' deve ser um array não vazio");
  }

  if (typeof origemTerm !== "string" || origemTerm.trim().length === 0) {
    throw new Error("O parâmetro 'origemTerm' deve ser uma string válida");
  }

  const term = origemTerm.trim().toLowerCase();
  return voos
    .filter((voo) => voo.origem.toLowerCase() === term)
    .map((voo) => ({ ...voo }));
}

/**
 * @category Array
 * @function buscarVoosPorDestino
 * @description
 * Retorna todos os voos cujo destino bate exatamente com o termo fornecido (comparação case-insensitive).
 *
 * @param {Array} voos Array de objetos de voo.
 * @param {string} destinoTerm Termo de destino a pesquisar.
 *
 * @throws {Error} Se parâmetros inválidos.
 *
 * @returns {Array} Array de voos correspondentes (pode ser vazio).
 *
 * @example
 * buscarVoosPorDestino(seedFlights, "São Paulo");
 */

export function buscaVoosPorDestino(voos, destinoTerm) {
  if (!Array.isArray(voos) || voos.length === 0) {
    throw new Error("O parâmetro 'voos' deve ser um array não vazio");
  }

  if (typeof destinoTerm !== "string" || destinoTerm.trim().length === 0) {
    throw new Error("O parâmetro 'origemTerm' deve ser uma string válida");
  }

  const term = destinoTerm.trim().toLowerCase();

  return voos
    .filter((voo) => voo.destino.toLowerCase() === term)
    .map((voo) => ({ ...voo }));
}

/**
 * @category Array
 * @function formatarDetalhesVoo
 * @description
 * Gera uma string amigável contendo os detalhes do voo para exibição.
 *
 * @param {Object} voo Objeto de voo { numero, origem, destino, lugares }.
 *
 * @throws {Error} Se `voo` não for um objeto com os campos esperados.
 *
 * @returns {string} String formatada com os detalhes do voo.
 *
 * @example
 * formatarDetalhesVoo({ numero: 1001, origem: "X", destino: "Y", lugares: 10 });
 */

export function formataDetalhesVoo(voo) {
  if (!voo || typeof voo !== "object") {
    throw new Error("O parâmetro 'voo' deve ser um objeto válido");
  }

  const { numero, origem, destino, lugares } = voo;

  if (
    typeof numero !== "number" ||
    !Number.isInteger(numero) ||
    typeof origem !== "string" ||
    origem.trim().length === 0 ||
    typeof destino !== "string" ||
    destino.trim().length === 0 ||
    typeof lugares !== "number" ||
    !Number.isInteger(lugares)
  ) {
    throw new Error("O objeto 'voo' está incompleto ou com tipos incorretos");
  }

  return [
    `Numero`.padEnd(30, ".") + `${numero}`,
    `Origem`.padEnd(30, ".") + `${origem}`,
    `Destino`.padEnd(30, ".") + `${destino}`,
    `Assentos disponiveis`.padEnd(30, ".") + `${lugares}`,
  ];
}

/**
 * @category Array
 * @function reservarAssentos
 * @description
 * Tenta reservar uma quantidade de assentos para o voo especificado por número.
 * Não altera o array original — retorna uma cópia atualizada.
 *
 * @param {Array} voos Array de voos.
 * @param {number} numero Número do voo onde reservar.
 * @param {number} quantidade Quantidade de assentos a reservar (inteiro > 0).
 *
 * @throws {Error} Se parâmetros inválidos.
 *
 * @returns {{ success: boolean, message: string, voos: Array }} Objeto com o resultado da tentativa e o novo array de voos.
 *
 * @example
 * reservarAssentos(seedFlights, 1001, 2);
 */

export function reservarAssentos(voos, numero, quantidade) {
  if (!Array.isArray(voos) || voos.length === 0) {
    throw new Error("O parâmetro 'voos' deve ser um array não vazio");
  }

  if (typeof numero !== "number" || !Number.isInteger(numero) || numero < 0) {
    throw new Error("O parâmetro 'numero' deve ser um inteiro válido");
  }

  if (
    typeof quantidade !== "number" ||
    !Number.isInteger(quantidade) ||
    numero < 0
  ) {
    throw new Error("O parâmetro 'quantidade' deve ser um inteiro válido");
  }

  const idx = voos.findIndex((voo) => voo.numero === numero);

  if (idx === -1) {
    return {
      success: false,
      message: `Não foi encontrado nenhum voo com o número ${numero}`,
      voos: voos.map((voo) => ({ ...voo })),
    };
  }

  const voo = voos[idx];

  if (voo.lugares <= 0) {
    return {
      success: false,
      message: `Não há mais lugares disponíveis neste voo.`,
      voos: voos.map((voo) => ({ ...voo })),
    };
  }

  if (quantidade > voo.lugares) {
    return {
      success: false,
      message: `Desculpe! Você está tentando reservar ${quantidade} assentos, mas só ${voo.quantidade} estão disponíveis`,
      voos: voos.map((voo) => ({ ...voo })),
    };
  }

  const novoVoos = voos.map((voo) => ({ ...voo }));
  novoVoos[idx].lugares = novoVoos[idx].lugares - quantidade;

  return {
    success: true,
    message: "Assentos reservados com sucesso!",
    voos: novoVoos.map((voo) => ({ ...voo })),
  };
}
