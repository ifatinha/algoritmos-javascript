/** Capitulo 12 - objetos: Exemplo 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';
import negocio from "./util/negocio.js";

let opcao;
let produtos = [];

do {
    opcao = negocio.menuPrincipal();

    switch (opcao) {
        case 1:
            console.clear();
            const produto = negocio.cadastrarProduto(produtos);
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
            const produtoMaisCaro = negocio.retornarProdutoMaisCaro(produtos);
            produtoMaisCaro.toString();
            break;

        case 3:
            console.clear();
            console.log("Produtos cadastrados: " + produtos.length+"\n");
            negocio.listarTodosProdutos(produtos);
            break;

        case 4:
            console.clear();
            let codigo = scanner.question("Digite o código do produto: ");
            produtos = negocio.alterarProduto(produtos, codigo);
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
