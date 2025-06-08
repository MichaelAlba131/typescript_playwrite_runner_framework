<!DOCTYPE html>
<html lang="pt-BR">
<body>

<h1>🚀 TypeScript: Playwright Runner Framework</h1>

<p>
  <b>Framework de automação de testes end-to-end</b> para autenticação, construído com <a href="https://playwright.dev/">Playwright</a> em <b>TypeScript</b>.<br>
  Estrutura escalável, modular e ideal para projetos profissionais com suporte a CI/CD.
</p>

<hr>

<h2>📦 Recursos</h2>
<ul>
  <li>🔗 Estrutura modular com Page Object Model (POM)</li>
  <li>⚡ Testes paralelos usando Playwright Test Runner</li>
  <li>📊 Relatórios HTML automáticos</li>
  <li>🌐 Suporte a múltiplos navegadores</li>
  <li>🔒 Tipagem forte com TypeScript</li>
  <li>🚦 Pronto para pipelines de integração contínua (CI)</li>
</ul>

<h2>🗂️ Estrutura do Projeto</h2>
<pre>
tests/
└── login/
    ├── interactions/
    │   └── LoginInteractions.ts     # Métodos de interação para o login
    ├── login.spec.ts                # Testes de login
    └── pages/
        └── LoginPage.ts             # Page Object da tela de login
playwright-report/                   # Relatórios HTML gerados
test-results/                        # Resultados das execuções
</pre>

<h2>🔧 Pré-requisitos</h2>
<ul>
  <li>⚙️ <a href="https://nodejs.org/">Node.js</a> (18+ recomendado)</li>
  <li>📦 <a href="https://www.npmjs.com/">npm</a> ou <a href="https://yarnpkg.com/">yarn</a></li>
  <li>🟦 <a href="https://www.typescriptlang.org/">TypeScript</a></li>
</ul>

<h2>⚙️ Instalação</h2>
<pre>
git clone https://github.com/seu_usuario/typescript_playwright_runner_framework.git
cd typescript_playwright_runner_framework
npm install
</pre>

<h2>▶️ Executando os Testes</h2>
<pre><code>npx playwright test</code></pre>
<p>🔹 Isso executa todos os testes em <code>tests</code> e gera o relatório em <code>playwright-report</code>.</p>

<h3>📝 Executando testes de um arquivo específico</h3>
<pre><code>npx playwright test tests/login/login.spec.ts</code></pre>

<h3>📈 Abrindo o relatório de testes</h3>
<pre><code>npx playwright show-report</code></pre>

<h2>🛠️ Estrutura dos Testes</h2>
<ul>
  <li><b>LoginPage.ts</b> – Page Object com seletores e elementos</li>
  <li><b>LoginInteractions.ts</b> – Lógica de interação com a tela</li>
  <li><b>login.spec.ts</b> – Casos de teste com usuários/senhas diferentes</li>
</ul>

<h2>⚙️ Configuração</h2>
<p>
O arquivo <b>playwright.config.ts</b> define navegadores, paralelismo, trace e mais. Edite conforme suas necessidades.
</p>

<h2>✨ Personalização</h2>
<ul>
  <li>Crie novos testes com arquivos <code>.spec.ts</code> em <code>tests/</code></li>
  <li>Organize por funcionalidade: <code>tests/moduloNome/pages</code>, <code>interactions</code>, etc.</li>
</ul>

<h2>🪪 Licença</h2>
<p>
Distribuído sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais informações.
</p>

<hr>
<p>
  🤝 Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.<br><br>
</p>

</body>
</html>