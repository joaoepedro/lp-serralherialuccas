# Identidade visual: Serralheria Luccas (direção "Oficina")

Escolhida entre 3 direções (as imagens estão em `docs/direcoes/`).
Ideia: a oficina de verdade, com o ferro, o aço e o bronze do logo; as faíscas das fotos trazem o calor. Os tokens ficam em `css/variables.css`.

## Paleta (revisada em 03/11: aço, azul-aço e bronze do logo)

A primeira versão (grafite marrom, laranja e creme) lembrava restaurante. A paleta nova parte das cores do logo (preto, branco e bronze #A78D71) e de referências da skill ui-ux-pro-max para serviços residenciais e construção (cinza industrial e azul de confiança).

**Proporção:** grafite/chumbo ~50% · gelo ~30% · azul-aço ~12% · bronze ~5%. As faíscas das fotos trazem o laranja quente.

| Nome | Cor | Função | Contraste |
|---|---|---|---|
| Grafite | `#15191D` | Fundo escuro principal | branco 16,0:1 |
| Chumbo | `#222930` | Cartões e rodapé | cinza 7,7:1 |
| Aço profundo | `#1C3242` | Faixa "Como funciona" e selo "30 anos" | branco 12,0:1 |
| Aço | `#2C5570` | Detalhes nas seções claras (chapéus, números, links) | sobre gelo 7,0:1 |
| Aço claro | `#8FB1C9` | Detalhes no escuro (títulos das dicas, filetes) | sobre grafite 7,8:1 |
| **Bronze** | `#C9A57F` | **Só o botão principal (WhatsApp)** | texto grafite 7,7:1 |
| Bronze detalhe | `#C9A57F` | Chapéus, estrelas e números no escuro | sobre grafite 7,7:1 |
| Branco | `#F2F4F5` | Texto no escuro | 16,0:1 |
| Cinza | `#B4BDC5` | Texto secundário no escuro | 9,3:1 |
| Gelo | `#EEF1F3` | Fundo das seções claras | (fundo) |
| Tinta | `#15191D` | Texto no claro | 15,6:1 |
| Tinta suave | `#4E5964` | Texto secundário no claro | 6,3:1 |

## Fontes (servidas pelo próprio site, em .woff2)
- **Barlow Condensed 700**, em maiúsculas: títulos, com cara de placa de oficina.
- **Source Sans 3** 400/600/700: textos. Corpo com 18px (o site atual usava 10px).
- Fontes reserva calibradas (`size-adjust`) evitam que o layout "pule" quando a fonte carrega.

## Elemento memorável
**Cordão de solda:** uma linha de pontos abaixo de cada chapéu, que lembra o cordão de uma solda.
Na seção "Sobre", o selo "30 anos em Franca" aparece sobre a foto.

## Componentes
| Componente | Padrão |
|---|---|
| Botão principal | Bronze, texto grafite, peso 700, raio 4px, altura mínima 56px, ícone do WhatsApp |
| Botão secundário | Contorno de 1,5px, transparente |
| Seções | Alternam escuro (grafite), claro (gelo) e uma faixa azul-aço para dar ritmo e facilitar a leitura |
| Avaliações | Cartões chumbo com filete alternando bronze e aço claro; a primeira avaliação em destaque |
| Galeria | Mosaico no computador; deslizar com o dedo no celular (`scroll-snap`) |
| Mapa | Fachada leve; o Google Maps só carrega com o clique em "Exibir mapa" |

## Fotos
Banco Unsplash (licença livre) na demonstração; origem de cada uma em `docs/fotos.md`.
Na versão final, trocar pelas fotos reais da serralheria.
