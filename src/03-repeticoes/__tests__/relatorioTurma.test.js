import { relatorioTurma } from "../relatorioTurma.js";

describe("Função relatorioTurma", () => {
  const alunosMock = [
    { nome: "Ana", notas: { nota1: 8, nota2: 7 } },
    { nome: "Pedro", notas: { nota1: 5, nota2: 6 } },
    { nome: "Lucas", notas: { nota1: 2, nota2: 3 } },
  ];

  test("deve retornar as estastísticas corretas da turma", () => {
    const resultado = relatorioTurma(alunosMock);
    expect(resultado).toEqual({
      totalAprovados: 1,
      totalExames: 1,
      totalReprovados: 1,
      mediaTurma: 5.17,
    });
  });

  test("deve lançar erro se o array estiver vazio", () => {
    expect(() => relatorioTurma([])).toThrow(
      "O parâmetro deve conter pelo menos um registo."
    );
  });

  test("deve lançar erro para nome inválido", () => {
    const alunosInvalidos = [{ nome: "", notas: { nota1: 8, nota2: 7 } }];
    expect(() => relatorioTurma(alunosInvalidos)).toThrow(
      "O nome do aluno deve ser válido."
    );
  });

  test("deve lançar erro para nota inválida", () => {
    const alunosInvalidos = [
      { nome: "Camila", notas: { nota1: "8", nota2: 7 } },
    ];
    expect(() => relatorioTurma(alunosInvalidos)).toThrow(
      "As notas devem ser números válidos maiores ou iguais que zero."
    );
  });
});
