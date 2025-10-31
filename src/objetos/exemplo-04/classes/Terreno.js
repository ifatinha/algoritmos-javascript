import Propriedade from "./Propriedade.js";

class Terreno extends Propriedade {
  calcularIPTU() {
    return this.valorVenda * 0.02;
  }
}

export default Terreno;
