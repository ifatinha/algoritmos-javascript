import { login } from "../login.js";

describe("Função login", () => {
  test("deve permitir acesso com senha correta", () => {
    expect(login("admin")).toBe("Acesso Permitido!");
  });

  test("deve negar acesso com senha incorreta", () => {
    expect(login("admin123")).toBe("Acesso Negado!");
  });

  test("deve retornar erro com senha inválida", () => {
    expect(() => login("")).toThrow("A senha deve ser um texto válido.");
  });
});
