# 🧮 Módulo 01 — Fundamentos Básicos de Lógica e Programação

Este módulo contém uma série de **exercícios introdutórios** desenvolvidos em **JavaScript (Node.js)**, com foco em conceitos fundamentais de lógica, operações matemáticas e boas práticas de programação.

Os exemplos utilizam **boas práticas modernas**:

- ✅ Funções puras
- ✅ Validação de entrada
- ✅ Documentação com JSDoc
- ✅ Testes automatizados com Jest
- ✅ Código formatado com Prettier + ESLint

---

## 📁 Estrutura do módulo

```
01-basicos/
├── areaCirculo.js
├── areaLosango.js
├── areaTrapezio.js
├── calcularIngressosNecessarios.js
├── celsiusParaFahrenheit.js
├── decomporNumeroReal.js
├── idadeEmAnosMesesDiasSemanas.js
├── mediaPonderada.js
├── precoFabricaDistribuidor.js
├── quilowattResidencia.js
└── tests/ # Testes automatizados com Jest
```

---

---

## 📘 Exercícios incluídos

| #   | Exercício                           | Descrição                                                                |
| --- | ----------------------------------- | ------------------------------------------------------------------------ |
| 1   | **Área do Círculo**                 | Calcula a área de um círculo a partir do raio informado.                 |
| 2   | **Área do Trapézio**                | Usa a fórmula `A = ((B + b) * h) / 2` para calcular a área.              |
| 3   | **Área do Losango**                 | Calcula a área com `A = (D × d) / 2`.                                    |
| 4   | **Média Ponderada**                 | Calcula a média ponderada de notas com pesos personalizados.             |
| 5   | **Decompor Número Real**            | Retorna parte inteira, fracionária e arredondamentos de um número real.  |
| 6   | **Preço de Fábrica e Distribuidor** | Calcula o preço final com lucro e impostos.                              |
| 7   | **Quilowatt de Energia**            | Determina o custo do kWh e aplica desconto de 15%.                       |
| 8   | **Cálculo de Idade**                | Converte o ano de nascimento em idade (anos, meses, dias e semanas).     |
| 9   | **Cálculo de Ingressos**            | Determina quantos ingressos precisam ser vendidos para cobrir os custos. |
| 10  | **Conversão Celsius → Fahrenheit**  | Converte temperatura usando a fórmula `F = (C × 1.8) + 32`.              |

---

## ⚙️ Como executar

1. Certifique-se de ter o **Node.js** instalado.
2. No terminal, vá até a pasta do projeto e execute:

```bash
npm install
npm test
```

3. Para executar um arquivo isoladamente (exemplo: área do círculo):

```
node src/01-basicos/areaCirculo.js
```

---

## 🧪 Testes automatizados

Os testes estão organizados na pasta **tests**/ e usam Jest.

Rodar todos os testes:

```
npm test
```

Rodar um teste específico:

```
npm test -- areaCirculo
```

## 🧠 Conceitos abordados

- Declaração de variáveis e constantes
- Entrada e saída de dados com readline-sync
- Operações aritméticas básicas
- Estruturas condicionais simples
- Validação de dados de entrada
- Funções puras e reutilizáveis
- Modularização de código
- Testes unitários
- Documentação automática com **JSDoc**

## 📘 Autor: Fatinha

## 🗓️ Projeto educacional — Módulo 01 concluído 🚀
