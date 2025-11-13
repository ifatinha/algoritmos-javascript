import { criptografarTexto } from "../criptografarTexto.js";

describe("Função criptografarTexto", () => {
  test("deve inverter as palavras e suas letras corretamente", () => {
    expect(criptografarTexto("Aprender JavaScript é divertido")).toBe(
      "oditrevid é tpircSavaJ rednerpA"
    );
  });

  test("deve lidar com muitos espaçoes e removê-los corretamente", () => {
    expect(criptografarTexto("    Casa     Azul     Bonita")).toBe(
      "atinoB luzA asaC"
    );
  });

  test("deve funcionar com apenas uma palavra", () => {
    expect(criptografarTexto("banana")).toBe("ananab");
  });

  test("deve lançar erros para entradas inválidas", () => {
    expect(() => criptografarTexto("")).toThrow(
      "A entrada deve ser uma string válida."
    );

    expect(() => criptografarTexto(12345)).toThrow(
      "A entrada deve ser uma string válida."
    );

    expect(() => criptografarTexto(null)).toThrow(
      "A entrada deve ser uma string válida."
    );
  });
});
