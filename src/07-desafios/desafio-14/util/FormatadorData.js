const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

function mostrarData(date) {
  return date.toLocaleString("pt-BR", options);
}

function montarData(stringData, stringHora) {
  const data = stringData.split("/");
  const hora = stringHora.split(":");

  const date = new Date(data[2], data[1] - 1, data[0], hora[0], hora[1], 0);

  return date;
}

function paternHora() {
  return /^([0-1]?[0-9]|2[0-3])[:][0-5][0-9]$/;
}

function paternData() {
  return /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[./-](0[0-9]|1[0-2])[./-](\d{2,4}$)/;
}

export default { mostrarData, montarData, paternData, paternHora };
