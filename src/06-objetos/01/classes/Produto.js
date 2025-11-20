/**
 * @category Objetos
 * @class Produto
 * @description
 * Representa um produto com descrição, tipo (objeto com código e percentual de imposto),
 * preço, imposto calculado automaticamente e preço final.
 *
 * Regras e contrapartidas:
 * - `type` deve ser um objeto com pelo menos as propriedades `{ code: number, percentual: number }`.
 * - `percentual` é aplicado sobre o `price` para calcular `tax`.
 * - Ao alterar `price` ou `type`, o imposto (`tax`) e `finalPrice` são recalculados automaticamente.
 *
 * @example
 * const tipo = { code: 1, percentual: 10 }; // 10%
 * const p = new Produto({ description: "Camiseta", type: tipo, price: 100 });
 * p.tax // 10
 * p.finalPrice // 110
 */

export class Produto {
  #description;
  #type;
  #price;
  #tax;

  /**
   * Cria uma nova instância de Produto.
   * @param {Object} [opts] Opções iniciais.
   * @param {string} opts.description Descrição do produto.
   * @param {{code:number, percentual:number}} opts.type Tipo do produto (código e percentual de imposto).
   * @param {number} opts.price Preço base (número >= 0).
   */

  constructor({ description = "", type = null, price = 0 } = {}) {
    this.description = description;
    if (type !== null) this.type = type;
    this.price = price;
    this.#tax = this.#computeTax();
  }

  /* -------------------------
  Getters / Setters públicos
  ------------------------- */

  get description() {
    return this.#description;
  }

  set description(value) {
    if (typeof value !== "string") {
      throw new Error("O campo 'description' deve ser uma string.");
    }

    this.#description = value;
  }

  /**
   * Retorna o objeto type (cópia superficial para evitar mutação indesejada).
   */

  get type() {
    return this.#type ? { ...this.#type } : null;
  }

  /**
   * Define o type do produto.
   * Espera um objeto com pelo menos: { code: number, percentual: number }.
   */
  set type(value) {
    if (typeof value !== "object" || value === null) {
      throw new Error("O campo 'type' deve ser um objeto válido");
    }

    const { code, percentual } = value;

    if (
      typeof code !== "number" ||
      !Number.isInteger(code) ||
      Number.isNaN(code)
    ) {
      throw new Error("O campo 'type.code' deve ser um número inteiro.");
    }

    if (
      typeof percentual !== "number" ||
      Number.isNaN(percentual) ||
      percentual < 0
    ) {
      throw new Error(
        "O campo 'type.percentual' deve ser um número válido >= 0."
      );
    }

    this.#type = { code, percentual };
    this.#tax = this.#computeTax();
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (typeof value !== "number" || isNaN(value) || value < 0) {
      throw new Error("O campo 'price' deve ser um número válido >= 0");
    }

    this.#price = value;
    this.#tax = this.#computeTax();
  }

  get tax() {
    return this.#tax;
  }

  get finalPrice() {
    return this.#price + this.#tax;
  }

  /* -------------------------
  Métodos auxiliares privados
  ------------------------- */

  #computeTax() {
    if (!this.#type || typeof this.#price !== "number") return 0;

    return (this.#type.percentual / 100) * this.#price;
  }

  computerTax() {
    if (!this.#type || typeof this.#price !== "number") return 0;

    return (this.#type.percentual / 100) * this.#price;
  }

  /* -------------------------
  Representações públicas
  ------------------------- */
  toString() {
    const tipoDesc = this.#type
      ? `Code ${this.#type.code} (${this.#type.percentual}%)`
      : "N/A";

    const precoFmt =
      typeof this.#price === "number" ? this.#price.toFixed(2) : "N/A";

    const impostoFmt =
      typeof this.#tax === "number" ? this.#tax.toFixed(2) : "N/A";

    const finalFmt =
      typeof this.#price === "number" ? this.finalPrice.toFixed(2) : "N/A";

    return [
      "Dados do produto",
      `Descrição: ${this.#description}`,
      `Tipo: ${tipoDesc}`,
      `Preço: ${precoFmt}`,
      `Imposto: ${impostoFmt}`,
      `Preço final: ${finalFmt}`,
    ].join("\n");
  }

  /**
   * Retorna representação serializável do produto.
   */

  toJson() {
    return {
      description: this.#description,
      type: this.#type ? { ...this.#type } : null,
      price: this.#price,
      tax: Number(this.#tax.toFixed(2)),
      finalPreco: this.finalPrice,
    };
  }
}
