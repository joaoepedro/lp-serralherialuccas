/* =========================================================
   Comportamentos da página: menu, links do WhatsApp e telefone,
   valores do config.js, mapa sob demanda e animação ao rolar.
   ========================================================= */
(function () {
  "use strict";
  const C = window.CONFIG;
  // Se o tracking.js falhar, os cliques continuam funcionando
  const rastrear = window.rastrear || function () {};

  /* 1. Preenche textos marcados com data-config="caminho.do.valor".
        O HTML já traz o mesmo valor escrito (reserva se o JS falhar). */
  document.querySelectorAll("[data-config]").forEach((el) => {
    const valor = el.dataset.config.split(".").reduce((o, k) => (o ? o[k] : undefined), C);
    if (valor !== undefined) el.textContent = valor;
  });

  /* 2. Links do WhatsApp: todos os elementos com data-whats recebem o link
        com a mensagem pronta. data-whats="texto" troca a mensagem. */
  const linkWhats = (msg) =>
    "https://wa.me/" + C.contato.whatsapp + "?text=" + encodeURIComponent(msg || C.contato.whatsappMensagem);
  document.querySelectorAll("[data-whats]").forEach((a) => {
    a.href = linkWhats(a.dataset.whats);
    a.addEventListener("click", () => rastrear("Contact", { metodo: "whatsapp", local: a.dataset.local || "" }));
  });

  /* 3. Links de telefone: ligam para o mesmo número do WhatsApp */
  document.querySelectorAll("[data-tel]").forEach((a) => {
    a.href = "tel:+" + C.contato.whatsapp;
    a.addEventListener("click", () => rastrear("Contact", { metodo: "telefone" }));
  });

  /* 4. Links do Google Maps e do Instagram */
  document.querySelectorAll("[data-maps]").forEach((a) => (a.href = C.google.perfilMaps));
  document.querySelectorAll("[data-instagram]").forEach((a) => (a.href = C.contato.instagram));

  /* 5. Menu do celular: abre e fecha, fecha com Esc e ao escolher um link */
  const botao = document.querySelector(".menu-botao");
  const menu = document.getElementById("menu");
  if (botao && menu) {
    const fechar = () => { menu.classList.remove("aberto"); botao.setAttribute("aria-expanded", "false"); };
    botao.addEventListener("click", () => {
      const aberto = menu.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", String(aberto));
    });
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) fechar(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("aberto")) { fechar(); botao.focus(); }
    });
  }

  /* 6. Mapa sob demanda: o iframe do Google só é criado depois do clique */
  const btnMapa = document.querySelector("[data-exibir-mapa]");
  if (btnMapa) {
    btnMapa.addEventListener("click", () => {
      const caixa = btnMapa.closest(".mapa");
      const iframe = document.createElement("iframe");
      iframe.src = C.google.mapaEmbed;
      iframe.title = "Mapa da Serralheria Luccas, Rua da Liberdade, 443, Jardim Califórnia, Franca-SP";
      caixa.querySelector(".mapa-capa").remove();
      caixa.appendChild(iframe);
      iframe.focus();
    });
  }

  /* 7. Animação ao rolar: só os blocos marcados com .revelar */
  const blocos = document.querySelectorAll(".revelar");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    blocos.forEach((b) => obs.observe(b));
  } else {
    blocos.forEach((b) => b.classList.add("visivel"));
  }

  /* 8. WhatsApp flutuante: aparece quando o botão da primeira tela sai da vista */
  const flutuante = document.querySelector(".whats-flutuante");
  const ctaHero = document.querySelector(".hero .btn-principal");
  if (flutuante && ctaHero && "IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => flutuante.classList.toggle("mostrar", !en.isIntersecting && en.boundingClientRect.top < 0))
      .observe(ctaHero);
  } else if (flutuante) {
    flutuante.classList.add("mostrar");
  }

  /* 9. Ano do rodapé */
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
