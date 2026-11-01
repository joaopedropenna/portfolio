// Menu no celular
const botaoMenu = document.querySelector(".menu-botao");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});

// Destaca no menu a seção que está na tela
const secoes = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".menu a");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("ativo", l.getAttribute("href") === "#" + entrada.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

secoes.forEach((s) => observador.observe(s));
