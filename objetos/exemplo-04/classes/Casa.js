import Propriedade from "./Propriedade.js";

class Casa extends Propriedade {
    
    constructor(areaConstruida, proprietario, quadra, lote, area, valorVenda) {
        super(proprietario, quadra, lote, area, valorVenda);
        this.areaConstruida = areaConstruida;
    }

    calcularIPTU() {
        return (this.valorVenda * 0.01);
    }
    
}

export default Casa;