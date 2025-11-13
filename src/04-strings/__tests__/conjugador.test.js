import { conjugarVerboPresenteIndicativo } from "../conjugador.js";

describe("Função conjugarVerboPresenteIndicativo", () => {
  test("deve conjulgar verbo -ar corretamente", () => {
    expect(conjugarVerboPresenteIndicativo("amar")).toEqual([
      "Eu amo",
      "Tu amas",
      "Ele(a) ama",
      "Nós amamos",
      "Vós amais",
      "Eles(as) amam",
    ]);
  });

  test("deve conjulgar verbo -er corretamente", () => {
    expect(conjugarVerboPresenteIndicativo("vender")).toEqual([
      "Eu vendo",
      "Tu vendes",
      "Ele(a) vende",
      "Nós vendemos",
      "Vós vendeis",
      "Eles(as) vendem",
    ]);
  });

  test("deve conjulgar verbo -ir corretamente", () => {
    expect(conjugarVerboPresenteIndicativo("partir")).toEqual([
      "Eu parto",
      "Tu partes",
      "Ele(a) parte",
      "Nós partimos",
      "Vós partis",
      "Eles(as) partem",
    ]);
  });

  test("remove espaços extras e ignora caixa de terminação", () => {
    expect(conjugarVerboPresenteIndicativo("   AmAR   ")).toEqual([
      "Eu amo",
      "Tu amas",
      "Ele(a) ama",
      "Nós amamos",
      "Vós amais",
      "Eles(as) amam",
    ]);
  });

  test("deve lançar erro para entradas inválidas", () => {
    expect(() => conjugarVerboPresenteIndicativo("")).toThrow(
      "A entrada deve ser uma string válida."
    );

    expect(() => conjugarVerboPresenteIndicativo(123)).toThrow(
      "A entrada deve ser uma string válida."
    );

    expect(() => conjugarVerboPresenteIndicativo("1234")).toThrow(
      "Verbo deve terminar em -ar, -er, -ir (regulares)"
    );

    expect(() => conjugarVerboPresenteIndicativo(null)).toThrow(
      "A entrada deve ser uma string válida."
    );
  });
});
