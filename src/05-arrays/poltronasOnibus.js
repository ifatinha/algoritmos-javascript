/**
 * @category Array
 * @module poltronasOnibus
 *
 * Utilitários para gerenciar ocupação de poltronas (lado janela / corredor)
 * em um ônibus. Todas as funções são puras e não realizam I/O.
 */

/**
 * @category Array
 * @function criarMapaPoltronas
 * @description
 * Cria um mapa de poltronas com dois arrays (janela e corredor) inicializados com zeros.
 *
 * @param {number} [quantidade=24] Quantidade de poltronas por fila (padrão 24).
 *
 * @throws {Error} Se `quantidade` não for um inteiro positivo.
 * @throws {Error} Se `quantidade` não for um inteiro positivo par.
 *
 * @returns {{janela: number[], corredor: number[]}} Objeto com os arrays de poltronas.
 *
 * @example
 * criarMapaPoltronas(10)
 * // retorno: { janela: [0,0,0,...], corredor: [0,0,0,...] }
 */

export function criarMapaPoltronas(quantidade = 24) {
  if (
    typeof quantidade !== "number" ||
    !Number.isInteger(quantidade) ||
    Number.isNaN(quantidade) ||
    quantidade <= 0
  ) {
    throw new Error("O parâmentro 'quantidade' deve ser um inteiro válido");
  }

  return {
    janela: Array.from({ length: quantidade }, () => 0),
    corredor: Array.from({ length: quantidade }, () => 0),
  };
}

/**
 * @category Array
 * @function validarMapaPoltronas
 * @description
 * Valida a estrutura do mapa de poltronas esperada ({ janela: number[], corredor: number[] }).
 *
 * @param {Object} mapa Mapa a ser validado.
 *
 * @throws {Error} Se o mapa não tiver a estrutura esperada ou conter valores inválidos.
 *
 * @returns {void}
 */

export function validarMapaPoltronas(mapa) {
  if (!mapa || typeof mapa !== "object") {
    throw new Error("Mapa de poltronas inválido");
  }

  const { janela, corredor } = mapa;

  if (
    !Array.isArray(janela) ||
    !Array.isArray(corredor) ||
    janela.length !== corredor.length ||
    janela.length === 0
  ) {
    throw new Error(
      "Mapa de poltronas deve conter arrays de 'janela' e 'corredor' do mesmo tamanho"
    );
  }

  for (let idx = 0; idx < janela.length; idx++) {
    if (typeof janela[idx] !== "number" || typeof corredor[idx] !== "number") {
      throw new Error(
        "Os valores do mapa de poltrona devem ser númericos (0 ou 1)"
      );
    }
  }
}

/**
 * @category Array
 * @function ehOnibusLotado
 * @description
 * Retorna true se todas as poltronas (janela e corredor) estiverem ocupadas (valor 1).
 *
 * @param {{janela:number[], corredor:number[]}} mapa Mapa de poltronas.
 *
 * @throws {Error} Se o mapa for inválido.
 *
 * @returns {boolean} true se lotado, false caso contrário.
 *
 * @example
 * ehOnibusLotado(mapa) // true|false
 */

export function ehOnibusLotado(mapa) {
  validarMapaPoltronas(mapa);
  const todos = [...mapa.janela, ...mapa.corredor];
  return todos.every((v) => v === 1);
}

/**
 * @category Array
 * @function venderPoltrona
 * @description
 * Tenta efetuar a venda de uma poltrona (janela ou corredor) no índice fornecido.
 * Retorna um objeto com sucesso/erro e o novo mapa (não muta o original).
 *
 * @param {{janela:number[], corredor:number[]}} mapa Mapa de poltronas atual.
 * @param {string} lado 'janela' ou 'corredor' (case-insensitive).
 * @param {number} indice Índice da poltrona (0-based).
 *
 * @throws {Error} Se parâmetros inválidos.
 *
 * @returns {{ success: boolean, message: string, mapa: {janela:number[], corredor:number[]} }}
 *
 * @example
 * venderPoltrona(mapa, 'janela', 3)
 */

export function venderPoltrona(mapa, lado, indice) {
  validarMapaPoltronas(mapa);

  if (
    typeof lado !== "string" ||
    (lado.toLowerCase() !== "janela" && lado.toLowerCase() !== "corredor")
  ) {
    throw new Error("O parâmetro 'lado' deve ser 'janela' ou 'corredor'");
  }

  if (
    typeof indice !== "number" ||
    !Number.isInteger(indice) ||
    Number.isNaN(indice) ||
    indice < 0 ||
    indice > mapa.janela.length
  ) {
    throw new Error(
      "O parâmetro 'indice' deve ser um inteiro dentro do intervalo válido"
    );
  }

  const side = lado.toLowerCase();
  const novoMapa = {
    janela: [...mapa.janela],
    corredor: [...mapa.corredor],
  };

  if (novoMapa[side][indice] === 1) {
    return {
      success: false,
      message: "Poltrona Ocupada!",
      mapa: novoMapa,
    };
  }

  novoMapa[side][indice] = 1;
  return {
    success: true,
    message: "Poltrona Reservada!",
    mapa: novoMapa,
  };
}

/**
 * @category Array
 * @function obterMapaOcupacao
 * @description
 * Retorna o mapa de ocupação (objetos com cópia dos arrays) pronto para exibição.
 *
 * @param {{janela:number[], corredor:number[]}} mapa Mapa de poltronas.
 *
 * @throws {Error} Se mapa inválido.
 *
 * @returns {{janela:number[], corredor:number[]}} Cópia do mapa para exibição.
 */
export function obterMapaOcupacao(mapa) {
  validarMapaPoltronas(mapa);
  return {
    janela: [...mapa.janela],
    corredor: [...mapa.corredor],
  };
}
