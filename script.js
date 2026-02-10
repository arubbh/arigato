document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector("#nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
});