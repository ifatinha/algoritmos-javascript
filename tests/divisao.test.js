import { dividir } from "../src/01-basicos/dividir.js";

describe("Função dividir", () => {
    test("deve dividir dois números corretamente", () => {
        expect(dividir(10,2)).toBe(5);
        expect(dividir(9, 3)).toBe(3);
    });

    test("deve lançar erro se algum parâmetro não for número", () => {
        expect(() => dividir("a", 10)).toThrow("Os parâmetros devem ser números.");
        expect(() => dividir(2, "a")).toThrow("Os parâmetros devem ser números.");
    });

    test("deve lançar erro se tentar dividir por zero", () => {
        expect(() => dividir(10, 0)).toThrow("Divisão por 0 não é permitida.");
    })
})