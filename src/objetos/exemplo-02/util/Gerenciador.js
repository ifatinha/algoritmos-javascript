import Tipo from '../classes/Tipo.js'
import Produto from '../classes/Produto.js'
import scanner from 'readline-sync';

function fillTheType() {
    const types = [];
    const type1 = new Tipo();
    const type2 = new Tipo();

    type1._code = 1;
    type1._percentual = 10;
    types.push(type1);

    type2._code = 2;
    type2._percentual = 20;
    types.push(type2);

    return types;
}

function registerProduct(types) {
    const product = new Produto();
    product._description = scanner.question("Digite a descrição do produto: ");
    product._price = scanner.questionFloat("Digite o preço do produto: ");
    let typeCode = scanner.questionInt("Digite o tipo do produto: (1 - Limpeza / 2 - Alimentação): ");

    while (typeCode !== types[0]._code && typeCode !== types[1]._code) {
        typeCode = scanner.questionInt("Código inválida! Digite o tipo do produto novamente: (1 - Limpeza / 2 - Alimentação): ");
    }
    product._type = types[typeCode - 1];
    return product;
}

function averagePrice(products) {
    let result = products.reduce(function (total, product) {
        return total + product.calculateFinalPrice();
    }, 0);
    
    return result / products.length;
}

function quantityOfProducts(products) {
    const temp = products.filter(function (product) {
        return product.calculateFinalPrice() > 40;
    })

    return temp;
}

export default { fillTheType, registerProduct, averagePrice, quantityOfProducts };