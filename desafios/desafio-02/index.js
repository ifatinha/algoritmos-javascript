import scanner from 'readline-sync'

let numero = scanner.questionInt("Digite um numero entre 0 e 1000: ");

while (numero < 0 || numero > 10000) {
    numero = scanner.questionInt("Opção inválida! Digite um numero entre 1 e 1000: ");
};

console.log(numero + " = " + numeroPorExtenso(numero));

function numeroPorExtenso(numero) {
    const unidade = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
        "onze", "doze", "treze", "quartoze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centena = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos",
        "oitocentos", "novecentos"];
    const qualificacoes = ["cem", "mil"];

    let tamanhoNumero = numero.toString().length;
    let numeroString = numero.toString();
    let primeiroDigito = parseInt(numeroString.substr(0, 1));
    let segundoDigito = parseInt(numeroString.substr(1, 2));

    if (tamanhoNumero === 1 || (tamanhoNumero === 2 && numero < 20)) {
        return unidade[numero];
    } else if (tamanhoNumero === 2) {

        if (segundoDigito === 0) {
            return dezena[primeiroDigito];
        } else {
            return dezena[primeiroDigito] + " e " + unidade[segundoDigito];
        }
    } else if (tamanhoNumero === 3) {
        let terceiroDigito = parseInt(numeroString.substr(2, 3));
        let segundaDezena = parseInt(numeroString.substr(1, 3));

        if (numero === 100) {
            return qualificacoes[0];
        } else {
            if (segundoDigito === 0 && terceiroDigito === 0) {
                return centena[primeiroDigito];
            } else if (segundoDigito === 0) {
                return centena[primeiroDigito] + " e " + unidade[terceiroDigito];
            } else if (segundaDezena >= 10 && segundaDezena < 20) {
                return centena[primeiroDigito] + " e " + unidade[segundaDezena];
            } else {
                return centena[primeiroDigito] + " e " + dezena[segundoDigito] + " e " + unidade[terceiroDigito];
            }
        }
    } else if (tamanhoNumero === 4) {
        let terceiroDigito = parseInt(numeroString.substr(3, 3));
        let quartoDigito = parseInt(numeroString.substr(3, 4));
        let segundaDezena = parseInt(numeroString.substr(1, 3));

        
        if (numero === 1000) {
            return qualificacoes[1];
        } else if (primeiroDigito === 1) {
            return qualificacoes[primeiroDigito] + " " + centena[segundoDigito] + " e " +
                dezena[terceiroDigito] + " e " + unidade[quartoDigito];
        }
    }
}