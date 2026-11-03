# Guia de edição: Serralheria Luccas

> Os arquivos do site ficam na pasta `public/`. A pasta `docs/` (este guia, persona, copy) não é publicada.

## 1. Telefones, WhatsApp, nota do Google e links → `public/js/config.js`
Abra o arquivo, troque só o texto entre aspas e salve. Exemplos:
- `whatsapp: "5516999676332"`: só números, com 55 e o DDD.
- `whatsappMensagem`: a mensagem que já chega escrita no WhatsApp.
- `nota: "4,9"` e `totalAvaliacoes: "87"`: atualize de vez em quando com os números do Google.
- `metaPixel`, `googleTag`, `clarity`: cole os IDs se um dia houver anúncios ou medição.

## 2. Textos → `public/index.html`, entre as marcações ✏️
Cada trecho editável fica entre `<!-- ✏️ EDITÁVEL: ... -->` e `<!-- ✏️ FIM -->`, com o limite de caracteres indicado.
Troque só o texto entre as tags (por exemplo, o que está entre `<p>` e `</p>`). Não apague os sinais `<` e `>`.

## 3. Imagens → `public/assets/img/`
- Mantenha **o mesmo nome e a mesma proporção** da imagem que vai substituir.
- Converta para WebP no [Squoosh](https://squoosh.app) (qualidade de 70 a 75), nas larguras do nome do arquivo (ex.: `-960.webp`, `-1920.webp`).
- Atualize o texto `alt` da imagem no `index.html` descrevendo a nova foto.

## 4. Publicar
Pelo site do GitHub: edite o arquivo e clique em **Commit changes**. A Cloudflare Pages publica sozinha em cerca de 1 minuto.
Se algo quebrar: no GitHub, abra o histórico do arquivo e volte para a versão anterior. A Cloudflare republica.

## 5. Ao sair da demonstração (versão final)
- [ ] `public/index.html`: remover `<meta name="robots" content="noindex, nofollow">`
- [ ] `public/_headers`: remover a linha `X-Robots-Tag: noindex`
- [ ] Trocar `https://serralheria-luccas.pages.dev/` por `https://serralherialuccas.com/` em: `public/index.html` (canonical, og:url, og:image e dados estruturados), `public/robots.txt` e `public/sitemap.xml`
- [ ] Trocar as fotos de banco pelas fotos reais (mesmo nome e proporção) e revisar os `alt`
- [ ] Pedir o logo original em boa resolução e regerar `logo-serralheria-luccas-160/280.webp`
- [ ] Confirmar os dados pendentes (`docs/briefing.md`) e o texto "Sobre"
- [ ] Domínio: antes de mexer no DNS, anotar os registros atuais (principalmente MX, se ele usa e-mail @serralherialuccas.com). Depois, em Cloudflare Pages > Custom domains, adicionar serralherialuccas.com e www
- [ ] Cancelar a hospedagem antiga só depois que o novo site estiver no ar no domínio
- [ ] Enviar o sitemap no Google Search Console e conferir o site no Perfil da Empresa no Google

## Não mexer
`public/css/reset.css`, `public/js/main.js`, `public/js/tracking.js`, `public/_headers` e os dados estruturados (`application/ld+json`) do `index.html`, salvo se o endereço ou os telefones mudarem.
