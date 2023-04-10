/** Capitulo 12 - objetos: Exemplo 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';
import gerenciador from "./util/Gerenciador.js";

let imoveis = [];
let opcao;

programaPrincipal();

function programaPrincipal() {
    do {
        opcao = gerenciador.menuPrincipal();
        let tipoImovel;

        switch (opcao) {
            case 1:

                if (imoveis.length < 30) {
                    imoveis.push(gerenciador.cadastrarImovel());
                } else {
                    console.log("O imóvel não foi cadastrado. Você chegou ao número máximo de cadastrados permitido.");
                }
                console.clear();
                break;

            case 2:
                console.clear();
                console.log("Imóveis Cadastrados: " + imoveis.length + "\n");
                gerenciador.imoveisCadastrados(imoveis);
                break;

            case 3:
                console.clear();
                let index = scanner.questionInt("Digite o indice do imóvel que você deseja alterar: ");
                imoveis = gerenciador.alterarSituacaoImovel(index, imoveis);
                break;

            case 4:
                console.clear();
                console.log("Valor total dos imóveis: R$" + gerenciador.totalImoveis(imoveis).toFixed(2));
                break;

            case 5:
                console.clear();
                console.log("Valor total das comissões: R$" + gerenciador.totalComissoes(imoveis).toFixed(2));
                break;

            case 6:
                console.log("Encerrando aplicação!");
                console.clear();
                break;

            default:
                console.log("Opção inválida!");
                break;
        }

    } while (opcao !== 6);
}