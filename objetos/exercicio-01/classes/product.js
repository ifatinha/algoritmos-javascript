class Product {

    #description;
    #type;
    #price;
    #tax;

    constructor() { }

    get _description() {
        return this.#description;
    }

    set _description(description) {
        this.#description = description;
    }

    get _type() {
        return this.#type;
    }

    set _type(type) {
        this.#type = type;
        this._tax = (this.#type._percentual / 100) * this.#price;
    }

    get _price() {
        return this.#price;
    }

    set _price(price) {
        this.#price = price;
    }

    get _tax() {
        return this.#tax;
    }

    set _tax(tax) {
        this.#tax = tax;
    }

    #calculateFinalPrice() {
        return (this.#price + this.#tax);
    }

    toString() {
        return ("Dados do produto\n" +
            "Descrição: " + this.#description + "\n" +
            "Tipo: " + (this.#type._code === 1 ? "Limpeza" : "Alimentação") + "\n" +
            "Preço: " + this.#price + "\n" +
            "Imposto: " + this.#tax.toFixed(2) + "\n" +
            "Preço final: " + this.#calculateFinalPrice());
    }
}

export default Product