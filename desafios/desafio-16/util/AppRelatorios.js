import scanner from 'readline-sync'
import AppItemVenda from './AppItemVenda.js';
import AppVendas from './AppVendas.js';
import AppProduto from './AppProduto.js';
import AppCliente from './AppCliente.js';

function menu() {
    return scanner.questionInt("Relatorios\n" +
        "1 - Todas as vendas\n" +
        "2 - Vendas por cliente\n" +
        "3 - Produtos com baixo estoque\n" +
        "4 - Voltar ao menu principal: ");
}

function listarTodasAsVendas() {
    AppItemVenda.listarVendas();
}

function produtosComEstoqueBaixo() {
    const produtosBaixoEstoque = AppProduto.produtos.filter((produto) => {
        return produto.estoqueAtual < produto.estoqueMinimo;
    });

    if (produtosBaixoEstoque.length > 0) {
        console.log("Produtos com estoque abaixo do estoque mínimo");
        produtosBaixoEstoque.forEach((produto) => {
            console.log(produto.toString());
        })
    } else {
        console.log("Nenhum produto com estoque inferior ao estoque mínimo.")
    }


}

function vendasPorCliente() {
    let cpf = scanner.question("Digite o CPF do cliente: ");
    let index = AppCliente.retornarIndexCliente(cpf);

    if (index !== -1) {
        let vendasCliente = AppVendas.vendas.filter((venda) => {
            if (venda.cliente !== undefined) {
                return venda.cliente.cpf === cpf;
            }
        });

        if (vendasCliente.length > 0) {
            vendasCliente.forEach((venda) => {
                console.log(venda.toString());

                const itens = AppVendas.itensVendas.filter((item) => {
                    return item.venda.codVenda === venda.codVenda;
                })

                itens.forEach((item) => {
                    console.log(item.toString() + "\n");
                })
            })
        } else {
            console.log("");
        }

    } else {
        console.log("Nenhum cliente encontrado.");
    }
}

function gerenciarRelatorios() {
    let opcao;

    do {
        opcao = menu();
        console.clear();

        switch (opcao) {
            case 1:
                listarTodasAsVendas();
                break;

            case 2:
                vendasPorCliente();
                break;

            case 3:
                produtosComEstoqueBaixo();
                break;

            case 4:
                console.clear();
                break;

            default:
                console.log("Opção inválida!");
                break;
        }
    } while (opcao !== 4)
}

export default { gerenciarRelatorios }