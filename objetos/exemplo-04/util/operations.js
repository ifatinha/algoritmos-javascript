import scanner from 'readline-sync';

import House from '../classes/house.js';
import Ground from '../classes/ground.js';

function menuPrincipal() {
    return scanner.questionInt("1 - Cadastrar novo imóvel\n" +
        "2 - Listar imóveis cadastrados\n" +
        "3 - Alterar Situação de imóvel\n" +
        "4 - Somatório do valor dos imóveis\n" +
        "5 - Somatório do valor das comissões\n" +
        "6 - Sair\n " +
        "Escolha uma das opções: ");
}

function menuImovel() {
    return scanner.questionInt(
        "1 - Terreno\n" +
        "2 - Casa\n" +
        "Tipo de imóvel: ");
}

function cadastrarImovel() {
    let tipoImovel = menuImovel();
    const proprietario = scanner.question("Proprietário: ");
    const quadra = scanner.question("Quadra: ");
    const lote = scanner.question("Lote: ");
    const area = scanner.questionFloat("Area em m²: ");
    const valorVenda = scanner.questionFloat("Valor da venda: ");

    if (tipoImovel === 2) {
        const areaConstruida = scanner.questionFloat("Área construida: ");
        const house = new House(areaConstruida, proprietario, quadra, lote, area, valorVenda);
        console.log(house);
        return house;
    } else {
        const ground = new Ground(proprietario, quadra, lote, area, valorVenda);
        return ground;
    }
}

function imoveisCadastrados(imoveis) {
    imoveis.forEach(function (imovel) {
        console.log("Proprietário: " + imovel.proprietario + "\n" +
            "Area: " + imovel.area + "\n" +
            "Situação: " + imovel.situacao + "\n" +
            "Valor Venda: " + imovel.valorVenda + "\n" +
            "Porcentagem Comissão: " + imovel.porcentagemComissao + "%\n" +
            "Valor Comissão de Venda: R$" + imovel.valorComissao + "\n" +
            "IPTU: R$" + imovel.calcularIPTU().toFixed(2) + "\n\n");
    });
}

function alterarSituacaoImovel(index, imoveis) {
    if (index >= 0 && index < imoveis.length) {
        let novaSituacao = scanner.questionInt("A situação do imóvel é " + imoveis[index].situacao + "\n" +
            "Digite a nova situação \n" +
            "1 - Á venda\n" +
            "2 - Vendido\n" +
            "3 - Em negociação\n" +
            "Opção: ");

        while (novaSituacao !== 1 && novaSituacao !== 2 && novaSituacao !== 3) {
            novaSituacao = scanner.question("Opção Inválida! \n" +
                "Digite a nova situação \n" +
                "1 - Á venda\n" +
                "2 - Vendido\n" +
                "3 - Em negociação\n" +
                "Opção: ");
        }

        if (novaSituacao === 1) {
            imoveis[index].situacao = "À Venda";
        } else if (novaSituacao === 2) {
            imoveis[index].situacao = "Vendido";
        } else {
            imoveis[index].situacao = "Em Negociação";
        }

        if (novaSituacao === 2) {
            let porcentagem = scanner.questionFloat("Digite o valor da comissão de venda: ");
            imoveis[index].porcentagemComissao = porcentagem;
            imoveis[index].calcularComissao();
        } else {
            imoveis[index].porcentagemComissao = 0;
            imoveis[index].valorComissao = 0;
        }
    } else {
        console.log("Index inválido!");
    }

    return imoveis;
}

function totalImoveis(imoveis) {
    let total = imoveis.reduce(function (total, imovel) {
        return total + imovel.valorVenda;
    }, 0);

    return total;
}

function totalComissoes(imoveis) {
    let total = imoveis.reduce(function (total, imovel) {
        return total + imovel.valorComissao;
    }, 0);

    return total;
}

export default { menuPrincipal, cadastrarImovel, imoveisCadastrados, alterarSituacaoImovel, totalImoveis, totalComissoes };