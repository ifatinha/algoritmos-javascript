import Property from "./property.js";

class House extends Property {
    
    constructor(areaConstruida, proprietario, quadra, lote, area, valorVenda) {
        super(proprietario, quadra, lote, area, valorVenda);
        this.areaConstruida = areaConstruida;
    }

    calcularIPTU() {
        return (this.valorVenda * 0.01);
    }
    
}

export default House;