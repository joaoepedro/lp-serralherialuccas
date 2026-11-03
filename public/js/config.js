/* =========================================================
   PAINEL DE CONTROLE: o único arquivo para trocar dados.
   Os outros scripts só leem daqui. Depois de editar, confira a página.
   ========================================================= */
window.CONFIG = Object.freeze({
  contato: Object.freeze({
    // WhatsApp e ligação usam o mesmo número: só números, com 55 + DDD
    whatsapp: "5516999676332",
    whatsappMensagem: "Olá! Vim pelo site e gostaria de um orçamento para: ",
    celularExibicao: "(16) 99967-6332",
    instagram: "https://www.instagram.com/serralherialuccas/"
  }),

  google: Object.freeze({
    nota: "4,9",
    totalAvaliacoes: "87",
    // Perfil da empresa no Google Maps (avaliações e rotas)
    perfilMaps: "https://maps.google.com/?cid=4253106511975867823",
    // Mapa incorporado: só carrega depois do clique em "Exibir mapa"
    mapaEmbed: "https://www.google.com/maps?q=Serralheria+Luccas,+R.+da+Liberdade,+443,+Franca+-+SP&output=embed"
  }),

  // IDs de rastreamento: deixe vazio ("") para não carregar nada.
  rastreamento: Object.freeze({
    metaPixel: "",
    googleTag: "",      // ex.: "G-XXXXXXX" (GA4) ou "AW-XXXXXXX"
    clarity: ""
  })
});
