import { gerarLogin } from "../gerarLogin.js";

describe("Função gerarLogin", () => {
  test("deve gerar corretamente um login com nome completo", () => {
    expect(gerarLogin("Maria Fernanda da Silva")).toBe("mfdssilva");
    expect(gerarLogin("Fatima Ferreira de Sousa")).toBe("ffdssousa");
  });

  test("deve funcionar com dois nomes", () => {
    expect(gerarLogin("Ethan Desmond")).toBe("eddesmond");
  });

  test("deve ignorar múltiplos espaços", () => {
    expect(gerarLogin("   Ethan   Desmond   Duncan    Shepherd     ")).toBe(
      "eddsshepherd"
    );
  });

  test("deve funcionar com letras maiúsculas/minúsculas misturadas", () => {
    expect(gerarLogin("Ethan desmond duncan Shepherd")).toBe("eddsshepherd");
  });

  test("deve lançar erro para login com apenas um nome", () => {
    expect(() => gerarLogin("fatinha")).toThrow(
      "A entrada deve ser de pelo menos duas partes."
    );
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => gerarLogin("")).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => gerarLogin(12345)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => gerarLogin(null)).toThrow(
      "A entrada deve ser uma string válida"
    );

    expect(() => gerarLogin(NaN)).toThrow(
      "A entrada deve ser uma string válida"
    );
  });
});
