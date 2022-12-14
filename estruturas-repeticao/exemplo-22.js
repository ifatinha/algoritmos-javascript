/** Capitulo 05 - estruturas de repetição: Exemplo 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let idade;
let sexo;
let experiencia;
let qtdFeminino = 0;
let qtdMasculino = 0;
let mediaIdadeMasculino = 0;
let qtdExperienciaM = 0;
let percHomens45 = 0;
let qtdHomens45 = 0;
let qtdMulheres21 = 0;
let menorIdadeMulherExpe;

do {
    console.log("Bem-vindo! Para encerrar a aplicação digite 0 para idade.");

    idade = scanner.questionInt("Digite a idade do candidato: ");

    if (idade > 0) {
        sexo = scanner.question("Digite o sexo do candidato (m - masculino; f - feminino): ");
        while (sexo !== "f" && sexo !== "m") {
            sexo = scanner.question("Opcao invalida! Digite (m - masculino; f - feminino): ");
        }

        experiencia = scanner.question("Candidato possui experiencia (s - sim; n - nao): ");
        while (experiencia !== "s" && experiencia !== "n") {
            experiencia = scanner.question("Opcao invalida! Digite (s - sim; n - nao): ");
        }

        if (sexo === "f") {
            qtdFeminino++;

            if (experiencia === "s") {

                if (idade < 21) {
                    qtdMulheres21++;
                }

                if (qtdFeminino === 1) {
                    menorIdadeMulherExpe = idade;
                }

                if (menorIdadeMulherExpe > idade) {
                    menorIdadeMulherExpe = idade;
                }
            }
        } else {
            qtdMasculino++;

            if (experiencia === "s") {
                mediaIdadeMasculino += idade;
                qtdExperienciaM++;
            }

            if (idade >= 45) {
                qtdHomens45++;
            }
        }

    } else {
        console.log("A aplicação será encerrada! Você digitou idade 0.")
    }


} while (idade != 0);

console.clear();

if (qtdFeminino === 0) {
    console.log("Não houve inscritos com o sexo feminino;");
} else {
    console.log("O número de participantes do sexo feminino foi " + qtdFeminino + ".");
    console.log("A menor idade entres as mulheres com experiência foi de " + menorIdadeMulherExpe + " anos.");

    if (qtdMulheres21 === 0) {
        console.log("Não houve nenhuma candidata do sexo feminino com menos 21 anos.");
    } else {
        console.log("O número de mulheres com menos de 21 anos com experiência no trabalho foi de " +
            qtdMulheres21 + " mulheres.");
    }
}

if (qtdMasculino === 0) {
    console.log("Não houve inscritos com o sexo masculino;");
} else {
    console.log("O número de participantes do sexo masculino foi " + qtdMasculino + ".");

    if (qtdExperienciaM === 0) {
        console.log("Não houve candidatos do sexo masculino inscritos!");
    } else {
        mediaIdadeMasculino = mediaIdadeMasculino / qtdExperienciaM;
        console.log("A média de idades dos participantes do sexo masculino com experiência foi de " +
            mediaIdadeMasculino + " anos.");
    }

    if (qtdHomens45 === 0) {
        console.log("Não houve nenhum candidato com mais de 45 anos inscritos!");
    } else {
        percHomens45 = (qtdHomens45 * 100) / qtdMasculino;
        console.log("A porcentagem de homens inscritos com mais de 45 anos foi de " + percHomens45 + "%.");
    }
}