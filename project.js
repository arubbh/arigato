// ========= Helpers =========
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

// ========= Render del Proyecto Individual =========
document.addEventListener("DOMContentLoaded", () => {
  // Solo ejecutamos esto si estamos en la página project.html (verificando si existe el elemento 'gallery')
  const gallery = document.getElementById("gallery");
  if (!gallery) return; 

  if (typeof PROJECTS === "undefined") {
    console.error("No se encontró el objeto PROJECTS. Asegúrate de incluir data.js antes de project.js");
    return;
  }

  const id = (getQueryParam("id") || "goat").toLowerCase();
  const project = PROJECTS[id] || PROJECTS["goat"];

  // Rellenar textos del Header del proyecto
  document.title = `${project.title} | AG`;
  
  const pYear = document.getElementById("pYear");
  const pTitle = document.getElementById("pTitle");
  const pDesc = document.getElementById("pDesc");

  if (pYear) pYear.textContent = project.year || "";
  if (pTitle) pTitle.textContent = project.title || "";
  if (pDesc) pDesc.textContent = project.desc || "";

  // Galería de imágenes
  gallery.innerHTML = "";

  // Aplicar clase de layout si corresponde
  gallery.classList.toggle("is-one-col", project.layout === "one-col");

  // Validar si tiene imágenes
  if (project.images && project.images.length > 0) {
    project.images.forEach((imgObj) => {
      const figure = el("figure", "gallery-item");

      // Ancho completo si está especificado
      if (imgObj.full) figure.classList.add("is-full");

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.alt = imgObj.alt || project.title;
      img.loading = "lazy";

      figure.appendChild(img);

      if (imgObj.caption) {
        const cap = el("figcaption", "gallery-cap");
        cap.textContent = imgObj.caption;
        figure.appendChild(cap);
      }

      gallery.appendChild(figure);
    });
  }
});