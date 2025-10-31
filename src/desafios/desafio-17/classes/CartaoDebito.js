export default class CartaoDebito {

    constructor() {
        this.numero = this.criarNumeroCartao();
        this.bandeira = this.criarBandeira();
        this.validade = this.criarValidadeCartao();
        this.cvv = this.criarCodigoSeguranca();
    }

    toString() {
        return ("Número: " + this.numero + "\n" +
            "Bandeira: " + this.bandeira + "\n" +
            "Validade: " + this.validade.toLocaleDateString() + "\n" +
            "CVV: " + this.cvv);
    }

    criarBandeira() {
        const bandeiras = ["MasterCard", "Visa", "American Express", "Diners Club", "Discover",
            "EnRoute", "JCB", "Voyager", "Hipercard", "Elo", "Aura"];

        return bandeiras[Math.floor((Math.random() * 10) + 0)];

    }

    criarNumeroCartao() {
        let parte1 = Math.floor((Math.random() * 8999) + 1000);
        let parte2 = Math.floor((Math.random() * 8999) + 1000);
        let parte3 = Math.floor((Math.random() * 8999) + 1000);
        let parte4 = Math.floor((Math.random() * 8999) + 1000);

        return (parte1 + " " + parte2 + " " + parte3 + " " + parte4);

    }

    criarValidadeCartao() {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 5);
        return date;
    }

    criarCodigoSeguranca() {
        return Math.floor((Math.random() * 899) + 100);
    }
}