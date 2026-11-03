# Guia de edição: Serralheria Luccas

## 1. Telefones, WhatsApp, nota do Google e links → `js/config.js`
Abra o arquivo, troque só o texto entre aspas e salve. Exemplos:
- `whatsapp: "5516999676332"`: só números, com 55 e o DDD.
- `whatsappMensagem`: a mensagem que já chega escrita no WhatsApp.
- `nota: "4,9"` e `totalAvaliacoes: "87"`: atualize de vez em quando com os números do Google.
- `metaPixel`, `googleTag`, `clarity`: cole os IDs se um dia houver anúncios ou medição.

## 2. Textos → `index.html`, entre as marcações ✏️
Cada trecho editável fica entre `<!-- ✏️ EDITÁVEL: ... -->` e `<!-- ✏️ FIM -->`, com o limite de caracteres indicado.
Troque só o texto entre as tags (por exemplo, o que está entre `<p>` e `</p>`). Não apague os sinais `<` e `>`.

## 3. Imagens → `assets/img/`
- Mantenha **o mesmo nome e a mesma proporção** da imagem que vai substituir.
- Converta para WebP no [Squoosh](https://squoosh.app) (qualidade de 70 a 75), nas larguras do nome do arquivo (ex.: `-960.webp`, `-1920.webp`).
- Atualize o texto `alt` da imagem no `index.html` descrevendo a nova foto.

## 4. Publicar
Pelo site do GitHub: edite o arquivo, clique em **Commit changes**, e a Vercel publica sozinha em cerca de 1 minuto.
Se algo quebrar: no GitHub, vá ao histórico do arquivo, volte para a versão anterior e a Vercel republica.

## 5. Ao sair da demonstração (versão final)
- [ ] `index.html`: remover `<meta name="robots" content="noindex, nofollow">`
- [ ] `vercel.json`: remover a linha do cabeçalho `X-Robots-Tag`
- [ ] Trocar `https://serralheria-luccas.vercel.app/` por `https://serralherialuccas.com/` em: `index.html` (canonical, og:url, og:image e dados estruturados), `robots.txt` e `sitemap.xml`
- [ ] Trocar as fotos de banco pelas fotos reais (mesmo nome e proporção) e revisar os `alt`
- [ ] Pedir o logo original em boa resolução e regerar `logo-serralheria-luccas-160/280.webp`
- [ ] Confirmar os dados pendentes (`docs/briefing.md`) e o texto "Sobre"
- [ ] Apontar o domínio serralherialuccas.com para a Vercel e enviar o sitemap no Google Search Console
- [ ] No Perfil da Empresa no Google, conferir se o site aponta para o novo endereço

## Não mexer
`css/reset.css`, `js/main.js`, `js/tracking.js`, `vercel.json` e os dados estruturados (`application/ld+json`) do `index.html`, salvo se o endereço ou os telefones mudarem.
