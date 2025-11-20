import { Tipo } from "../classes/Tipo.js";
import { Produto } from "../classes/Produto.js";

const tipoLimpeza = new Tipo({ code: 1, percentual: 12 });
const detergente = new Produto({
  description: "Detergente 500ml",
  type: tipoLimpeza,
  price: 8.5,
});

console.log(detergente.toString());
console.log(detergente.toJson());
