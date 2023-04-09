import scanner from 'readline-sync';
import Carro from '../classes/carro.js';

function menu() {
    return scanner.questionInt("Menu de opções \n" +
        "1 - Cadastrar carro\n" +
        "2 - Carros cadastrados\n" +
        "3 - Total de Impostos\n" +
        "4 - Carros que não pagam impostos\n" +
        "5 - Sair\n" +
        "Opção: ");
}

function cadastrarCarro(carros) {

    let placa = scanner.question("Placa: ");
    let anoFabricaca = scanner.questionInt("Ano de Fabricação: ");
    const carro = new Carro(placa, anoFabricaca);
    carro.calcularImposto();
    carros.push(carro);
    console.log("Carro cadastrado!");

    return carros;
}

function listarCarros(carros) {
    carros.forEach(function (carro) {
        carro.toString();
    });
}

function totalImpostos(carros) {
    const total = carros.reduce(function (total, carro) {
        return total + carro.totalImposto;
    }, 0)

    return total;
}

function carrosQueNaoPagamImpostos(carros) {
    const carrosSemImposto = carros.filter(function (carro) {
        let idade = new Date().getFullYear() - carro.anoFabricacao
        return idade > 10;
    });

    return carrosSemImposto;
}

export default { menu, cadastrarCarro, listarCarros, totalImpostos, carrosQueNaoPagamImpostos };