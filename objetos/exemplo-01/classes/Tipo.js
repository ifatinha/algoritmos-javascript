class Tipo {

    #code;
    #percentual;

    constructor() {
    }

    get _code() {
        return this.#code;
    }

    set _code(code) {
        this.#code = code;
    }

    get _percentual() {
        return this.#percentual;
    }

    set _percentual(percentual) {
        this.#percentual = percentual;
    }
}

export default Tipo