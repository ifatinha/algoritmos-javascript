import scanner from 'readline-sync'
import AppProduto from './AppProduto.js';

function buscarProduto() {
    let codProduto = scanner.question("Codigo do produto: ");
    let index = AppProduto.retornarIndexProduto(codProduto);

    while (index === -1) {
        codProduto = scanner.question("Codigo do produto: ");
        index = AppProduto.retornarIndexProduto(codProduto);
    }

    return AppProduto.produtos[index];
}

export default { buscarProduto }