/**
 * @category Objetos
 * @class Tipo
 * @description
 * Representa o tipo de um produto, contendo:
 * - `code`: número inteiro identificador
 * - `percentual`: percentual de imposto aplicado sobre o preço do produto
 *
 * @example
 * const t = new Tipo({ code: 1, percentual: 15 });
 * t.percentual; // 15
 */

export class Tipo {
  #code;
  #percentual;

  constructor({ code = 0, percentual = 0 } = {}) {
    this.code = code;
    this.percentual = percentual;
  }

  /* -------------------------
  Getters / Setters públicos
  ------------------------- */

  get code() {
    return this.#code;
  }

  set code(value) {
    if (
      typeof value !== "number" ||
      !Number.isInteger(value) ||
      Number.isNaN(value)
    ) {
      throw new Error("O campo 'code' deve ser um número inteiro válido");
    }

    this.#code = value;
  }

  get percentual() {
    return this.#percentual;
  }

  set percentual(value) {
    if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
      throw new Error("O campo 'percentual' deve ser um número válido >= 0");
    }

    this.#percentual = value;
  }

  /* -------------------------
  Representações públicas
  ------------------------- */

  toString() {
    return `Tipo => Código: ${this.#code}, Imposto: ${this.#percentual}%`;
  }

  toJSON() {
    return {
      code: this.#code,
      percentual: this.#percentual,
    };
  }
}
