import scanner from "readline-sync";

const palavras = [
  { palavra: "arara", dica: "é um animal" },
  { palavra: "cavalo", dica: "é um animal" },
  { palavra: "geladeira", dica: "é um objeto" },
  { palavra: "alemanha", dica: "é um país" },
  { palavra: "caneta", dica: "é um objeto" },
  { palavra: "rio de janeiro", dica: "é uma cidade" },
  { palavra: "cachorro", dica: "é um animal" },
  { palavra: "vermelho", dica: "é uma cor" },
  { palavra: "amarelo", dica: "é uma cor" },
  { palavra: "itaporanga", dica: "é uma cidade" },
];

function menu() {
  return scanner.questionInt("Vamos brincar de forca? \n(1 - Sim / 2 - Não): ");
}

function sortearPalavra() {
  return palavras[Math.floor(Math.random() * 10) + 0];
}

function esconderPalavra(palavra) {
  let novaPalavra = [];

  for (let i = 0; i < palavra.length; i++) {
    novaPalavra.push("_");
  }

  return novaPalavra;
}

function verificarPalpite(letra, palavraSorteada, palavraEscondida) {
  for (let i = 0; i < palavraSorteada.length; i++) {
    if (letra === palavraSorteada.at(i)) {
      palavraEscondida[i] = palavraSorteada.at(i);
    }
  }

  return palavraEscondida;
}

function verificarLetra(letrasJogadas, letra) {
  return letrasJogadas.includes(letra);
}

function verificarResposta(palavra) {
  let suaResposta = scanner.question("Digite seu chute: ");

  if (suaResposta === palavra) {
    console.log("Parabéns!!! Você acertou!");
    console.log(suaResposta + " = " + palavra);
    return true;
  } else {
    return false;
  }
}

function jogo(palavraSorteada) {
  let palavraEscondida = esconderPalavra(palavraSorteada.palavra);
  let letrasJogadas = [];
  let chances = 7;

  for (let i = 7; i > 0; i--) {
    console.log("Palavra escondida: " + palavraEscondida.join(" "));

    if (chances > 1) {
      console.log("Você tem " + chances + " chances");
    } else {
      console.log("Você só tem mais uma chance " + chances + " chance");
      console.log("Dica: " + palavraSorteada.dica);
    }

    let letra = scanner.question("Digite uma letra: ").toLowerCase();
    let jaExiste = verificarLetra(letrasJogadas, letra);

    while (jaExiste === true) {
      letra = scanner
        .question("Você já jogou essa letra! Digite outra letra: ")
        .toLowerCase();
      jaExiste = verificarLetra(letrasJogadas, letra);
    }

    letrasJogadas.push(letra);
    palavraEscondida = verificarPalpite(
      letra,
      palavraSorteada.palavra,
      palavraEscondida
    );

    console.log("Letras jogadas " + letrasJogadas.join(" "));
    console.log("Palavra escondida: " + palavraEscondida.join(" "));

    let chute = scanner.questionInt(
      "Você ja sabe a palavra? (1 - Sim/2 - Não): "
    );

    while (chute !== 1 && chute !== 2) {
      chute = scanner.questionInt(
        "Resposta invalida! Escolha (1 - Sim/2 - Não): "
      );
    }

    if (chute === 1) {
      let respota = verificarResposta(palavraSorteada.palavra);
      if (respota) {
        break;
      } else {
        console.log("Tente novamente na próxima!!!");
      }
    }

    chances--;
  }

  if (chances === 0) {
    console.log("Você foi enforcado!");
  }
}

function programaPrincipal() {
  let opcao;
  console.log("Programa principal");

  do {
    opcao = menu();

    switch (opcao) {
      case 1:
        let palavraSorteada = sortearPalavra();
        jogo(palavraSorteada);
        break;

      case 2:
        console.log("Saindo do jogo!");
        break;

      default:
        console.log("Opção inválida!");
        break;
    }
  } while (opcao !== 2);
}

export default { programaPrincipal };
