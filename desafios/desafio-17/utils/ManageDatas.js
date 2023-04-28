const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
};

function mostrarData(date) {
    return date.toLocaleString("pt-BR", options);
}

function randomDate() {
    let day = Math.floor((Math.random() * 31) + 1);
    let month = Math.floor((Math.random() * 12) + 1);
    let year = Math.floor((Math.random() * 99) + 1910);

    return new Date(year, month, day);
}

export default { mostrarData, randomDate }