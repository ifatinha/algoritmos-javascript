export default class Cheque {

    constructor(numero, valor) {
        this.numero = numero;
        this.valor = valor;
    }

    toString() {
        return ("Numero: " + this.numero + "\n" +
            "Valor: R$" + this.valor.toFixed(2) + "\n");
    }
}