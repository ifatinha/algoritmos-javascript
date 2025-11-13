import { contaVerbos } from "../contaVerbos.js";

describe("Função contaVerbos", () => {
  test("deve contar corretamente verbos terminados em -r", () => {
    expect(contaVerbos("Amar, viver, sorrir.")).toBe(3);
  });

  test("deve ignorar palavras sem r no final", () => {
    expect(contaVerbos("Eu vou para casa agora")).toBe(0);
  });

  test("deve funcionar com frases misturadas", () => {
    expect(contaVerbos("Eu quero amar, viver e cantar muito")).toBe(3);
  });

  test("deve remover pontuação grudada", () => {
    expect(contaVerbos("amar, viver; sorrir. lutar?")).toBe(4);
  });

  test("deve funcionar com espaços múltiplos", () => {
    expect(contaVerbos("   comer   rezar    amar   ")).toBe(3);
  });

  test("deve lançar erros para entradas inválidas", () => {
    expect(() => contaVerbos("")).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => contaVerbos(12434)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => contaVerbos(null)).toThrow(
      "A entrada deve ser uma string válida"
    );
  });
});
