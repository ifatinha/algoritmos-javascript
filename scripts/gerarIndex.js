import fs from "fs";
import path from "path";

const docsPath = path.join("docs");
const apiPath = path.join(docsPath, "api");
const exemplosPath = path.join(docsPath, "exemplos");

// Função para listar arquivos .md em uma pasta
function listarArquivosMD(pasta) {
  return fs
    .readdirSync(pasta)
    .filter((file) => file.endsWith(".md"))
    .sort();
}

// Cria a seção de links para uma pasta
function criarSecao(titulo, pasta) {
  const arquivos = listarArquivosMD(pasta);
  let conteudo = `## ${titulo}\n\n`;
  conteudo += "| Arquivo | Link |\n|---------|------|\n";
  arquivos.forEach((arquivo) => {
    conteudo += `| ${arquivo.replace(".md", "")} | [Abrir](./${path.relative(docsPath, path.join(pasta, arquivo))}) |\n`;
  });
  conteudo += "\n";
  return conteudo;
}

// Monta o index.md
let indexContent = `# 📘 Algoritmos em JavaScript — Documentação Automática

Bem-vindo(a) à documentação automática do projeto **Algoritmos em JavaScript**.  
Aqui estão todos os módulos e exemplos disponíveis.

`;

indexContent += criarSecao("Módulos", apiPath);
indexContent += criarSecao("Exemplos", exemplosPath);

// Adiciona seção de testes
indexContent += `## Testes

Todos os testes unitários estão na pasta \`/tests\`. Execute com:

\`\`\`bash
npm test
\`\`\`

`;

// Escreve o arquivo index.md
fs.writeFileSync(path.join(docsPath, "index.md"), indexContent);
console.log("✅ index.md gerado com sucesso!");
