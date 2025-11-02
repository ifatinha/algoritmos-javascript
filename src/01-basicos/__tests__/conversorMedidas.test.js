import { conversor } from "../conversorMedidas.js";

describe("Função conversor", () => {
  test("deve converter corretamente pés em polegadas, jardas e milhas", () => {
    const resultado = conversor(5280);
    expect(resultado.polegadas).toBe(63360);
    expect(resultado.jardas).toBe(1760);
    expect(resultado.milhas).toBe(1);
  });

  test("deve lançar um erro se valor não for número", () => {
    expect(() => conversor("5280")).toThrow(
      "O valor do pés deve ser um número válido."
    );
  });

  test("deve lançar erro se o valor for menor ou igual a 0", () => {
    expect(() => conversor(-1)).toThrow("O número deve ser maior que 0.");
  });
});
