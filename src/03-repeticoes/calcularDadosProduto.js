/**
 * @category Repetições
 * @function calcularDadosProduto
 * @description
 * Calcula imposto, transporte, seguro e preço final de um produto importado
 * com base em suas características.
 *
 * @param {number} preco - Preço unitário do produto (deve ser > 0)
 * @param {number} pais - Código do país (1 - EUA, 2 - México, 3 - Outros)
 * @param {"T"|"F"|"A"} meioTransporte - Meio de transporte
 * @param {"S"|"N"} cargaPerigosa - Se a carga é perigosa ou não
 *
 * @returns {{
 *  preco: number,
 *  pais: number,
 *  meioTransporte: string,
 *  cargaPerigosa: string,
 *  imposto: number,
 *  valorTransporte: number,
 *  valorSeguro: number,
 *  precoFinal: number
 * }}
 *
 * @throws {Error} Quando qualquer entrada é inválida
 *
 * @example
 * calcularDadosProduto(80, 1, "A", "S");
 */

export function calcularDadosProduto(produto) {
  const { preco, pais, meioTransporte, cargaPerigosa } = produto;

  if (typeof preco !== "number" || isNaN(preco) || preco <= 0) {
    throw new Error("Preço deve ser um número maior que zero");
  }

  if (![1, 2, 3].includes(pais)) {
    throw new Error("Código do país inválido");
  }

  if (!["T", "F", "A"].includes(meioTransporte)) {
    throw new Error("Transporte inválido");
  }

  if (!["S", "N"].includes(cargaPerigosa)) {
    throw new Error("Tipo de carga inválida");
  }

  let imposto = preco < 100 ? preco * 0.05 : preco * 0.1;
  let valorTransporte;

  if (cargaPerigosa === "S") {
    valorTransporte = pais === 1 ? 50 : pais === 2 ? 21 : 24;
  } else {
    valorTransporte = pais === 1 ? 12 : pais === 2 ? 21 : 60;
  }

  let seguro = pais === 2 && meioTransporte === "A" ? preco / 2 : preco / 5;
  const precoFinal = preco + imposto + valorTransporte + seguro;

  return {
    preco,
    pais,
    meioTransporte,
    cargaPerigosa,
    imposto: Number(imposto.toFixed(2)),
    valorTransporte: Number(valorTransporte.toFixed(2)),
    valorSeguro: Number(seguro.toFixed(2)),
    precoFinal: Number(precoFinal.toFixed(2)),
  };
}