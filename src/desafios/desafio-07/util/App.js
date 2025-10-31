import scanner from "readline-sync";

function menu() {
  return scanner.questionInt(
    "Bem-vindo! Escolha uma das opções abaixo \n" +
      "1 - Incluir numero\n" +
      "2 - Listar numeros\n" +
      "3 - Consultar um numero\n" +
      "4 - Excluir numero\n" +
      "5 - Deletar vetor\n" +
      "6 - Sair: "
  );
}

function buscarNumero(numeros, numero) {
  return numeros.some((n) => {
    return n === numero;
  });
}

function ordernarVetor(numeros) {
  numeros.sort((a, b) => {
    return a - b;
  });

  return numeros;
}

function addNumero(numeros) {
  console.log("Adicionando numeros ao vetor!");
  for (let i = 0; i < 10; i++) {
    if (numeros.length < 10) {
      let numero = Math.floor(Math.random() * 99 + 0);
      let jaExiste = buscarNumero(numeros, numero);

      while (jaExiste === true) {
        console.log("Erro! " + numero + " já existe no vetor");

        numero = Math.floor(Math.random() * 99 + 0);
        jaExiste = buscarNumero(numeros, numero);
      }

      numeros.push(numero);
      console.log("O numero " + numero + " foi adicionado no vetor!");
      numeros = ordernarVetor(numeros);
    } else {
      console.log("Vetor cheio!");
    }
  }

  return numeros;
}

function listarNumeros(numeros) {
  if (numeros.length > 0) {
    numeros.forEach((numero, index) => {
      console.log(index + ". " + numero);
    });
  } else {
    console.log("O vetor está vazio!");
  }
}

function pesquisarIndex(numeros, numero) {
  return numeros.findIndex((num) => {
    return num === numero;
  });
}

function pesquisarNumero(numeros) {
  let numero = scanner.questionInt(
    "Digite o numero que voce quer procurar no vetor: "
  );
  let index = pesquisarIndex(numeros, numero);

  if (index !== -1) {
    console.log("O numemro " + numero + " foi encontrado na posição " + index);
  } else {
    console.log("O numero " + numero + " não foi encontrado no vetor.");
  }
}

function removerNumero(numeros) {
  let numero = scanner.questionInt("Digite o numero que voce quer remover: ");
  let index = pesquisarIndex(numeros, numero);

  if (index !== -1) {
    numeros.splice(index, 1);
    console.log("O numero " + numero + " foi removido com sucesso!");
  } else {
    console.log("O numero " + numero + " não foi encontrado no vetor!");
  }

  return numeros;
}

function deletarVetor(numeros) {
  console.log("Removando numeros do vetor");
  for (let i = 0; i < 10; i++) {
    numeros.shift();
  }
  return numeros;
}

export default {
  menu,
  addNumero,
  listarNumeros,
  pesquisarNumero,
  removerNumero,
  deletarVetor,
};
