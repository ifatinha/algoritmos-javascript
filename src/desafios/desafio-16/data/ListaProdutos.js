const listaProdutos = ["Arroz;", "Azeite;", "Bolachas e biscoitos;", "Café;", "Chá;", "Atum;",
    "Sardinha;", "Milho;", "Ervilha;", "Extrato de tomate;", "Farinhas;", "farofas;", "Feijão;",
    "Leite;", "Macarrão;", "Maionese;", "Óleo;", "Tempero pronto;", "Batata palito;", "Frango;",
    "Hambúrguer;", "Lasanha;", "Linguiça;", "Pão de queijo;", "Petiscos;", "Pizza;", "Salsicha;",
    "Apresuntado;", "Iogurtes", "Leite fermentado;", "Manteiga;", "Margarina;", "Mortadela;",
    "Peito de peru;", "Presunto;", "Queijo;", "Requeijão;", "Salame;", "Achocolatados;", "Água;",
    "Cervejas;", "Energéticos;", "Refrigerantes;", "Sucos;", "Vinhos;", "Vitaminas;", "Vodka;",
    "Biscoitos;", "Bisnaguinha;", "Broinha de milho;", "Pães de queijo;", "Pão de cachorro-quente;",
    "Pão de forma;", "Pão de hambúrguer;", "Absorvente;", "Algodão;", "Condicionador;",
    "Cotonete;", "Escova de dentes;", "Hidratantes;", "Lâmina de barbear;", "Papel higiênico;",
    "Pasta de dente;", "Sabonetes;", "Shampoo.", "Água sanitária;", "Alvejante;", "Amaciante;",
    "Desinfetante;", "Detergente;", "Escovinhas;", "Esponja de aço;", "Luvas de borracha.",
    "Pá;", "Pano de chão;", "Pano de prato;", "Rodo;", "Sabão em barra;", "Sabão em pó;",
    "Vassoura;"];

function gerarNomeProduto() {
    return listaProdutos[Math.floor((Math.random() * 79) + 0)];
}

function gerarCodigoProduto() {
    const letras = ["A", "B", "C", "D", "E"];
    const codigo = (letras[Math.floor((Math.random() * 4) + 0)]) + "-" +
        (Math.floor((Math.random() * 8999) + 1000));

    return codigo;
}


export default {
    gerarNomeProduto, gerarCodigoProduto
}