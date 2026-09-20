document.addEventListener("DOMContentLoaded", () => {
  // 1. Menú Hamburguesa (Código que ya tenías)
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector("#nav");

  if (btn && nav) {
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
  }

  // 2. Automatizar Index (Latest work - últimos 3 proyectos)
  const homeGrid = document.getElementById("latest-projects-grid");
  if (homeGrid && typeof PROJECTS !== "undefined") {
    const keys = Object.keys(PROJECTS);
    // Tomamos los últimos 3 proyectos del objeto
    const latestKeys = keys.slice(-3).reverse(); 

    homeGrid.innerHTML = "";
    latestKeys.forEach(key => {
      const p = PROJECTS[key];
      homeGrid.appendChild(createCard(key, p.title, p.meta, p.image));
    });
  }

  // 3. Automatizar Projects (Clasificados por categoría)
  const editorialGrid = document.getElementById("grid-editorial");
  if (editorialGrid && typeof PROJECTS !== "undefined") {
    // Limpiamos y poblamos cada grid según su categoría
    document.querySelectorAll(".proj-section").forEach(section => {
      const categoryId = section.id;
      const grid = section.querySelector(".proj-grid");
      if (!grid) return;

      grid.innerHTML = "";
      Object.keys(PROJECTS).forEach(key => {
        const p = PROJECTS[key];
        if (p.category === categoryId) {
          grid.appendChild(createCard(key, p.title, p.meta, p.image));
        }
      });
    });
  }
});

// Función auxiliar para reutilizar la estructura de las tarjetas <article class="card">
function andCreateCard(id, title, meta, imageSrc) {} // (referencia interna)
function createCard(id, title, meta, imageSrc) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <a class="card-media" href="project.html?id=${id}">
      <img src="${imageSrc}" alt="${title}" loading="lazy">
    </a>
    <div class="card-body">
      <h3 class="proj-name card-title">${title}</h3>
      <p class="proj-meta card-meta">${meta}</p>
    </div>
  `;
  return article;
}