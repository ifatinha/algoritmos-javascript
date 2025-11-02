import { calcularIdadeCompleta } from "../calculcarIdadeCompleta.js";

describe("Função calcularIdadeCompleta", () => {
  test("deve calcular corretamente a idade em diferentes unidades", () => {
    expect(calcularIdadeCompleta(2000, 2025)).toEqual({
      anos: 25,
      meses: 300,
      dias: 9125,
      semanas: 1303,
    });
    expect(calcularIdadeCompleta(1990, 2020)).toEqual({
      anos: 30,
      meses: 360,
      dias: 10950,
      semanas: 1564,
    });
  });

  test("deve usar o ano atual por padrão", () => {
    expect(calcularIdadeCompleta(1994)).toEqual({
      anos: 31,
      meses: 372,
      dias: 11315,
      semanas: 1616,
    });
  });

  test("deve lançar erro se o ano de nascimento não for numérico", () => {
    expect(() => calcularIdadeCompleta("2005")).toThrow(
      "O ano de nascimento deve ser um número válido."
    );

    expect(() => calcularIdadeCompleta(NaN)).toThrow(
      "O ano de nascimento deve ser um número válido."
    );
  });

  test("deve lançar erro se o ano de nascimento for maior que o ano atual", () => {
    expect(() => calcularIdadeCompleta(2050)).toThrow(
      "O ano de nascimento não pode ser maior que o ano atual."
    );
  });
});
