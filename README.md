# Serralheria Luccas: nova página (demonstração)

Proposta de novo site para a **Serralheria Luccas**, serralheria com 30 anos em Franca-SP (nota 4,9 com 87 avaliações no Google).
O site atual tem texto de modelo esquecido no código, letras trocadas, nenhum botão de WhatsApp, texto de 10px no celular e título "Serralherialuccas.com" no Google.
Esta página resolve isso com foco em **SEO local** e **pedido de orçamento pelo WhatsApp**.

Demonstração: https://lp-serralherialuccas.pages.dev/ (Cloudflare Pages; fora do Google até o cliente aprovar)

## Tecnologias
HTML, CSS e JavaScript puros: sem framework, sem biblioteca e sem etapa de build.

## Funcionalidades
- Botões de WhatsApp com mensagem pronta; botão flutuante no celular, que aparece depois da primeira tela
- Um único número para WhatsApp e ligação; ícones de WhatsApp, ligação e Instagram no rodapé
- Avaliações reais do Google com link para o perfil
- Galeria em mosaico (deslizar no celular) e perguntas frequentes com `<details>` exclusivos
- Mapa sob demanda: o Google Maps só carrega quando a pessoa clica em "Exibir mapa"
- Dados estruturados `HomeAndConstructionBusiness` (nome, endereço e telefone iguais aos do Perfil da Empresa no Google)
- Open Graph com imagem 1200×630 para a prévia do link no WhatsApp
- Painel único de dados em `js/config.js`; textos editáveis marcados com ✏️ no HTML
- Rastreamento pronto (Meta Pixel, tag do Google e Clarity), ativado só ao preencher os IDs

## Qualidade (testes de 03/11/2026, servidor local)
| | Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| Celular | 100 | 100 | 100 | 69* |
| Computador | 100 | 100 | 100 | 69* |

\* O único item de SEO que falha é o `noindex` proposital da demonstração. Sem ele, o SEO dá 100 (testado).

- Celular: LCP 1,2 s · CLS 0 · TBT 0 ms. Primeira tela com cerca de 120 KB (fotos, fontes e logo).
- axe (WCAG 2.2 AA + boas práticas): 0 problemas em 375, 768 e 1440px e na política de privacidade.
- Sem rolagem lateral em 13 tamanhos, de 320px a 1920px, incluindo iPads na vertical e na horizontal.
- Teclado: ordem lógica, foco visível, menu fecha com Esc, perguntas frequentes abrem com Enter.
- `prefers-reduced-motion`: todo o conteúdo visível, sem deslocamentos. Sem JavaScript: conteúdo e links funcionam.
- HTML validado (html-validate), nenhum erro no console, nenhum arquivo 404.

## Rodar localmente
```
cd public
python -m http.server 8000
```
Abra http://localhost:8000

## Estrutura
```
public/                      ← só esta pasta vai para o ar
  index.html · politica-de-privacidade.html · 404.html
  css/ reset.css · variables.css (cores e fontes) · style.css
  js/  config.js (dados) · tracking.js · main.js
  assets/img/ (WebP, ícones, imagem de compartilhamento) · assets/fonts/ (.woff2)
  robots.txt · sitemap.xml · _headers (cache e segurança)
docs/                        ← briefing, persona, copy, identidade visual, guia de edição
README.md
```

## Publicação (Cloudflare Pages)
Workers & Pages › Create › Pages › conectar o repositório. Framework preset: **None** · Build command: vazio · Build output directory: **public**.

## Créditos
Fotos de demonstração do Unsplash (licença livre). Ver `docs/fotos.md`.
