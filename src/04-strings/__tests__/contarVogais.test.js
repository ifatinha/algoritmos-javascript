import { contarVogais } from "../contarVogais.js";

describe("Função contarVogais", () => {
  test("deve contar vogais corretamente em uma frase simples", () => {
    expect(contarVogais("Ola mundo")).toBe(4);
  });

  test("deve retornar zero se não houver vogais", () => {
    expect(contarVogais("rhythm")).toBe(0);
  });

  test("deve ignorar letras maiúsculas/minúsculas", () => {
    expect(contarVogais("As moedas do rei")).toBe(7);
  });

  test("deve lançar erro para parâmetro inválido", () => {
    expect(() => contarVogais("")).toThrow(
      "O parâmetro deve ser uma string válida."
    );
    expect(() => contarVogais(123)).toThrow(
      "O parâmetro deve ser uma string válida."
    );
  });
});
