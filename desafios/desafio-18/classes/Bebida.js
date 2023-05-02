export default class Bebida {

    constructor(nome, teorAlcool, valorUnitario) {
        this.nome = nome;
        this.teorAlcool = teorAlcool;
        this.valorUnitario = valorUnitario;
    }

    toString() {
        return (this.nome + " - R$" + this.valorUnitario.toFixed(2) + " (" + this.teorAlcool + "%)");
    }

    nomeBebida() {
        const nomes = ["Whisky", "Gim", "Vodka", "Vinho", "Cerveja", "Cachaça", "Energético", "Licor",
            "Rum", "Saquê", "Tequila", "Espumante", "Conhaque", "Refrigerante", "Suco"];

        return nomes[Math.floor((Math.random() * 14) + 0)];
    }
}