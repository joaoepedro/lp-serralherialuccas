/* =========================================================
   Rastreamento: Meta Pixel, tag do Google e Clarity, só se houver ID
   no config.js. Expõe window.rastrear(evento, dados); sem IDs, não faz nada.
   ========================================================= */
(function () {
  "use strict";
  const ids = window.CONFIG.rastreamento;

  function carregarScript(src) {
    const s = document.createElement("script");
    s.async = true; s.src = src; document.head.appendChild(s);
  }

  // Meta Pixel (código base oficial, carregado só com ID)
  if (ids.metaPixel) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq("init", ids.metaPixel);
    window.fbq("track", "PageView");
  }

  // Tag do Google (GA4 ou Google Ads)
  if (ids.googleTag) {
    carregarScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ids.googleTag));
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", ids.googleTag);
  }

  // Microsoft Clarity (mapa de calor), se o cliente aceitar
  if (ids.clarity) {
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",ids.clarity);
  }

  // Evento único para todas as plataformas
  window.rastrear = function (evento, dados) {
    dados = dados || {};
    if (window.fbq) window.fbq("track", evento, dados);
    if (window.gtag) window.gtag("event", evento === "Contact" ? "contato" : evento, dados);
  };
})();
