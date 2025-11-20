import { Tipo } from "../classes/Tipo.js";

describe("Classe Tipo", () => {
  test("deve crir uma instância de tipo corretamente", () => {
    const tipo = new Tipo({ code: 1, percentual: 10 });
    expect(tipo.code).toBe(1);
    expect(tipo.percentual).toBe(10);
  });

  test("deve validar dados corretamente", () => {
    const tipo = new Tipo();
    tipo.code = 1;
    expect(tipo.code).toBe(1);
    tipo.percentual = 20;
    expect(tipo.percentual).toBe(20);
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => new Tipo({ code: "1", percentual: 10 })).toThrow(
      "O campo 'code' deve ser um número inteiro válido"
    );

    expect(() => new Tipo({ code: 2, percentual: "10" })).toThrow(
      "O campo 'percentual' deve ser um número válido >= 0"
    );
  });

  test("deve retornar toString e toJSON corretamente", () => {
    const tipo = new Tipo({ code: 1, percentual: 15 });
    expect(typeof tipo.toString()).toBe("string");
    expect(tipo.toString()).toContain("Código: 1");
    expect(tipo.toJSON()).toEqual({ code: 1, percentual: 15 });
  });
});
