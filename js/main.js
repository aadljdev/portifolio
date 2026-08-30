const projects = [
  {
    name: "Menuzo",
    tag: "SaaS",
    filter: "saas",
    featured: true,
    url: "https://www.menuzo.com.br",
    host: "menuzo.com.br",
    blurb: "Sistema completo para restaurantes com cardápio digital, pedidos e gestão da operação.",
    tech: ["Next.js", "React", "Firebase", "Mercado Pago"],
    features: ["Cardápio digital", "Pedidos online", "Pagamento", "Painel administrativo", "Gestão de delivery"],
    poster: "menuzo",
  },
  {
    name: "SofiMind",
    tag: "SaaS",
    filter: "saas",
    featured: true,
    url: "https://www.sofimind.com.br",
    host: "sofimind.com.br",
    blurb: "Plataforma de treinos com IA para estudo, com área do aluno e acompanhamento de desempenho.",
    tech: ["Next.js", "React", "Firebase", "IA"],
    features: ["Treinos com IA", "Área do aluno", "Autenticação", "Acompanhamento"],
    poster: "sofimind",
  },
  {
    name: "Avizap",
    tag: "SaaS",
    filter: "saas",
    featured: true,
    url: "https://www.avizap.app.br",
    host: "avizap.app.br",
    blurb: "Agenda de follow-up no WhatsApp para o comerciante não esquecer de falar com o cliente.",
    tech: ["Next.js", "React", "Firebase", "PWA"],
    features: ["Lembretes no WhatsApp", "Agenda de follow-up", "Avisos no horário", "Aplicativo PWA"],
    poster: "avizap",
  },
  {
    name: "Meu Cartão Virtual",
    tag: "SaaS",
    filter: "saas",
    featured: true,
    url: "https://www.meucartaovirtualonline.com.br",
    host: "meucartaovirtualonline.com.br",
    blurb: "Plataforma para criar, personalizar e enviar cartões virtuais — do layout à entrega.",
    tech: ["Next.js", "React", "Firebase"],
    features: ["Criação de cartões", "Personalização", "Envio digital", "Painel administrativo"],
    poster: "cartao",
  },
  {
    name: "Corretora Sanches",
    tag: "Site",
    filter: "site",
    url: "https://www.corretorasanches.com.br",
    host: "corretorasanches.com.br",
    blurb: "Site institucional de corretora de seguros em Rio Claro, com páginas de serviços e contato.",
    tech: ["Next.js", "React"],
    features: ["Site institucional", "Páginas de seguros", "Contato", "SEO"],
    poster: "sanches",
  },
  {
    name: "Infused Energy",
    tag: "E-commerce",
    filter: "commerce",
    url: "https://www.infused.com.br",
    host: "infused.com.br",
    blurb: "Loja de energia natural com catálogo, checkout, frete e operação completa.",
    tech: ["Next.js", "React", "Firebase", "Mercado Pago"],
    features: ["Catálogo", "Checkout", "Frete", "Painel administrativo"],
    poster: "infused",
  },
  {
    name: "Mimo Digital",
    tag: "SaaS",
    filter: "saas",
    url: "https://www.mimodigital.com.br",
    host: "mimodigital.com.br",
    blurb: "SaaS de presentes digitais com mensagem, visual e entrega instantânea.",
    tech: ["Next.js", "React", "Firebase"],
    features: ["Presentes digitais", "Mensagens personalizadas", "Entrega instantânea", "Painel"],
    poster: "mimo",
  },
  {
    name: "UHTech UHMW",
    tag: "Site",
    filter: "site",
    url: "https://www.uhtech-uhmw.com.br",
    host: "uhtech-uhmw.com.br",
    blurb: "Site institucional para peças e soluções industriais em UHMW.",
    tech: ["Next.js", "React"],
    features: ["Landing institucional", "Apresentação de produtos", "Contato"],
    poster: "uhtech",
  },
  {
    name: "PH Beachwear",
    tag: "E-commerce",
    filter: "commerce",
    url: "https://phbeachwear.com.br",
    host: "phbeachwear.com.br",
    blurb: "Loja de beachwear feminino com vitrine, catálogo e jornada de compra.",
    tech: ["Nuvemshop"],
    features: ["Catálogo", "Checkout", "Frete", "Vitrine de coleção"],
    poster: "beach",
  },
  {
    name: "Corrida Cidade Azul",
    tag: "Site",
    filter: "site",
    url: "https://cidadeazulcorrida.vercel.app",
    host: "cidadeazulcorrida.vercel.app",
    blurb: "Site do evento de Trail Run e MTB, com provas, inscrições e percursos.",
    tech: ["Next.js", "React"],
    features: ["Inscrições", "Modalidades e provas", "Percursos", "Regulamento"],
    poster: "cidade",
  },
  {
    name: "Madri Presentes",
    tag: "E-commerce",
    filter: "commerce",
    url: "https://maripresentes.vercel.app",
    host: "maripresentes.vercel.app",
    blurb: "Marketplace de presentes com pagamento, frete e operação de loja.",
    tech: ["Next.js", "React", "Firebase", "Mercado Pago"],
    features: ["Catálogo", "Pagamento", "Frete", "Painel da loja"],
    poster: "madri",
  },
  {
    name: "Tabuadinha",
    tag: "SaaS",
    filter: "saas",
    url: "https://matematica-74qp.vercel.app",
    host: "matematica-74qp.vercel.app",
    blurb: "Aplicação gamificada para crianças aprenderem tabuada e operações matemáticas.",
    tech: ["Next.js", "React"],
    features: ["Jogos de tabuada", "Operações básicas", "Progresso", "Recompensas"],
    poster: "tabuada",
  },
];

const featuredEl = document.getElementById("featured");
const galleryEl = document.getElementById("gallery");
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

function cardMarkup(p, i, featured) {
  const tech = p.tech.map((t) => `<li>${t}</li>`).join("");
  const features = p.features.map((f) => `<li>${f}</li>`).join("");
  const badge = featured ? `<span class="card__badge">Em destaque</span>` : "";

  return `
    <article class="card${featured ? " card--featured" : ""}" data-filter="${p.filter}" style="--d:${i * 70}ms">
      <a class="card__poster poster--${p.poster}" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${p.name}">
        <span class="card__chrome" aria-hidden="true">
          <span class="card__dots"></span>
          <span class="card__url">${p.host}</span>
        </span>
        <img
          class="card__shot"
          src="assets/previews/${p.poster}.jpg"
          alt="Página inicial de ${p.name}"
          width="1280"
          height="800"
          loading="lazy"
        />
      </a>
      <div class="card__body">
        <div class="card__meta">
          <span>${p.tag}</span>
          ${badge}
        </div>
        <h3><a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.name}</a></h3>
        <p class="card__blurb">${p.blurb}</p>
        <div class="card__block">
          <p class="card__label">Tecnologias</p>
          <ul class="card__tech">${tech}</ul>
        </div>
        <div class="card__block">
          <p class="card__label">Funcionalidades</p>
          <ul class="card__features">${features}</ul>
        </div>
        <a class="card__open" href="${p.url}" target="_blank" rel="noopener noreferrer">
          Abrir projeto
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12L12 4M12 4H6.5M12 4V9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </article>
  `;
}

function render() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  featuredEl.innerHTML = featured.map((p, i) => cardMarkup(p, i, true)).join("");
  galleryEl.innerHTML = rest.map((p, i) => cardMarkup(p, i + featured.length, false)).join("");
}

render();

function applyFilter(key) {
  document.querySelectorAll(".card").forEach((card) => {
    const show = key === "all" || card.dataset.filter === key;
    card.hidden = !show;
    if (show) card.classList.add("is-in");
  });

  const featuredVisible = [...featuredEl.querySelectorAll(".card")].some((c) => !c.hidden);
  const restVisible = [...galleryEl.querySelectorAll(".card")].some((c) => !c.hidden);
  document.getElementById("featured-label").hidden = !featuredVisible;
  document.getElementById("more-label").hidden = !restVisible;
  featuredEl.hidden = !featuredVisible;
  galleryEl.hidden = !restVisible;
}

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");
    applyFilter(btn.dataset.filter);
  });
});

const toggle = document.querySelector(".nav__toggle");
const nav = document.getElementById("nav-menu");

function closeMenu() {
  document.body.classList.remove("nav-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menu");
}

function openMenu() {
  document.body.classList.add("nav-open");
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Fechar menu");
}

toggle.addEventListener("click", () => {
  if (document.body.classList.contains("nav-open")) closeMenu();
  else openMenu();
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

const cursor = document.querySelector(".cursor");
if (cursor && window.matchMedia("(pointer:fine)").matches) {
  document.body.classList.add("has-cursor");
  window.addEventListener("pointermove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

document.body.addEventListener("pointerover", (e) => {
  if (e.target.closest("a, button")) cursor?.classList.add("is-on");
});
document.body.addEventListener("pointerout", (e) => {
  if (e.target.closest("a, button")) cursor?.classList.remove("is-on");
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-in");
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".card, .section-head, .about__grid, .contact__cards, .hero__title, .hero__lead, .hero__actions, .stack__list, .services__grid").forEach((el) => {
  io.observe(el);
});
