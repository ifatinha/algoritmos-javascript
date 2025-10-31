/** Capitulo 12 - objetos: Exemplo 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';
import gerenciador from "./util/Gerenciador.js";

let opcao;
let produtos = [];

do {
    opcao = gerenciador.menuPrincipal();

    switch (opcao) {
        case 1:
            console.clear();
            const produto = gerenciador.cadastrarProduto(produtos);
            if (produto !== undefined) {
                produtos.push(produto);
                console.log("Produto cadastrado com sucesso!");
            } else {
                console.log("Já existe um produto cadastrado com esse código!");
            }
            break;

        case 2:
            console.clear();
            console.log("Dados do produto mais caro encontrado\n");
            const produtoMaisCaro = gerenciador.retornarProdutoMaisCaro(produtos);
            produtoMaisCaro.toString();
            break;

        case 3:
            console.clear();
            console.log("Produtos cadastrados: " + produtos.length+"\n");
            gerenciador.listarTodosProdutos(produtos);
            break;

        case 4:
            console.clear();
            let codigo = scanner.question("Digite o código do produto: ");
            produtos = gerenciador.alterarProduto(produtos, codigo);
            break;

        case 5:
            console.clear();
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção Inválida! Tente novamente.");
            break;
    }

} while (opcao !== 5);
