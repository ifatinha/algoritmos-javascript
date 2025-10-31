const cargos = [
  { categoria: "A", valor: 5500 },
  { categoria: "B", valor: 4500 },
  { categoria: "C", valor: 3500 },
  { categoria: "D", valor: 2500 },
  { categoria: "E", valor: 1500 },
];

function randomCargo() {
  return cargos[Math.floor(Math.random() * 5 + 0)];
}

export default { randomCargo };
