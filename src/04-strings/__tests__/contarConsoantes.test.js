import { contarConsoantes } from "../contarConsoantes.js";

describe("Função contarConsoantes", () => {
  test("deve contar consoantes corretamente em uma frase", () => {
    expect(contarConsoantes("Hello world")).toBe(7);
  });

  test("deve retornar zero se não houver consoante", () => {
    expect(contarConsoantes("aeiou")).toBe(0);
  });

  test("deve ignorar letras maiúsculas/minúsculas", () => {
    expect(contarConsoantes("Xique Xique")).toBe(4);
  });

  test("deve lançar erro para parâmetros inválidos", () => {
    expect(() => contarConsoantes("")).toThrow(
      "O texto deve ser uma string válida"
    );

    expect(() => contarConsoantes(1345)).toThrow(
      "O texto deve ser uma string válida"
    );
  });
});
