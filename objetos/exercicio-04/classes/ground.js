import Property from "./property.js";

class Ground extends Property {

    calcularIPTU() {
        return (this.valorVenda * 0.02);
    }

}

export default Ground;