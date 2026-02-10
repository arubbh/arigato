const PROJECTS = {
  goat: {
    year: "2025",
    title: "GOAT",
    desc:
      "Music magazine dedicated to the artists and creative teams who dare to imagine beyond the ordinary, redefining what pop can look, sound and feel like a digital world.",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/GOAT_pages-to-jpg-0016.jpg",
        alt: "GOAT Spread 30-31",
        caption: "Pages 30-31 | The Rise of Fashion Icons",
        full: true
      },
      {
        src: "imagenes_proyectos/GOAT_pages-to-jpg-0017.jpg",
        alt: "GOAT Spread 32-33",
        caption: "Pages 32-33 | The Rise of Fashion Icons",
        full: true
      },
      {
        src: "imagenes_proyectos/GOAT_pages-to-jpg-0022.jpg",
        alt: "K-pop albums spread",
        caption: "Pages 42-43 | KPOP Albums that broke the mole",
        full: true
      }
    ]
  },

  "manifiesto": {
    year: "2024",
    title: "INCOMPLETE MANIFESTO FOR GROWTH",
    desc:
      "Based on the work of Bruce Mau. The layout and image retouching, as well as the graphic trends betamax, double exposure and electric gradient, were designed by me.",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/manifieste mockup.png",
        alt: "UI mockup",
        full: true
      },
      {
        src: "imagenes_proyectos/manifesto mock up tode.png",
        alt: "UI section",
        caption: "Mockups",
        full: true
      },
      {
        src: "imagenes_proyectos/Manifiesto.jpg",
        alt: "UI detail",
        caption: "Page 16-17",
        full: true
      }
    ]
  },

  "coddix": {
    year: "2025",
    title: "CODDIX",
    desc:
      "Kit de Robótica",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/coddix nuevo.png",
        alt: "C1", 
        full: true
      }
    ]
  },

  "arigato": {
    year: "2025",
    title: "ARIGATO",
    desc:
      "Marca Personal",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/Mesa de trabajo 1-100 1.png",
        alt: "M1", 
        full: true
      },
      {
        src: "imagenes_proyectos/Mesa de trabajo 1-100 2.png",
        alt: "M2", 
        full: true
      }
    ]
  },

  "mooc": {
    year: "2025",
    title: "MEDIA LEADERS",
    desc:
      "Interfaz del MOOC | Vista previa, módulos, inicio",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/Inicio.png",
        alt: "Mo1"
      },
      {
        src: "imagenes_proyectos/Módulo 1.png",
        alt: "Mo2"
      },
      {
        src: "imagenes_proyectos/Cápsulas Especializadas.png",
        alt: "Mo3"
      },
      {
        src: "imagenes_proyectos/Mis Insignias.png",
        alt: "Mo4"
      }
    ]
  },

  "portafolio": {
    year: "2026",
    title: "MI PORTAFOLIO",
    desc:
      "Interfaz del website | Vista previa, inicio, galería de proyectos",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/interfaz_inicio.png",
        alt: "P1",
        full: true
      },
      {
        src: "imagenes_proyectos/interfaz_proyectos.png",
        alt: "P2",
        full: true
      },
      {
        src: "imagenes_proyectos/interfaz_yo.png",
        alt: "P3",
        full: true
      },
      {
        src: "imagenes_proyectos/interfaz_procedimiento.jpg",
        alt: "P4",
        full: true
      }
    ]
  },

  "flyers": {
    year: "2026",
    title: "BATALLA | TEAM REBEL",
    desc:
      "Creación de Flyer para su distribución en redes sociales como instagram y facebook.",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/FLYER tamaño post vertical.jpg",
        alt: "F1",
        full: true
      }
    ]
  },

  "fiec": {
    year: "2026",
    title: "TALLERES | FIEC",
    desc:
      "Carrusel para Instagram sobre diversos talleres que ofrece la Facultad de Ingeniería en Electricidad y Computación, ESPOL a estudiantes de colegio.",
    layout: "two-col",
    images: [
      {
        src: "imagenes_proyectos/ig stories fiec.png",
        alt: "Fi1",
        full: true
      },
      {
        src: "imagenes_proyectos/1.png",
        alt: "Fi2"
      },
      {
        src: "imagenes_proyectos/2.png",
        alt: "Fi3"
      },
      {
        src: "imagenes_proyectos/3.png",
        alt: "Fi4"
      },
      {
        src: "imagenes_proyectos/4.png",
        alt: "Fi5"
      },
      {
        src: "imagenes_proyectos/5.png",
        alt: "Fi6"
      },
      {
        src: "imagenes_proyectos/6.png",
        alt: "Fi7"
      }
    ]
  }
};

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

// ========= Render =========
document.addEventListener("DOMContentLoaded", () => {
  const id = (getQueryParam("id") || "goat").toLowerCase();
  const project = PROJECTS[id] || PROJECTS["goat"];

  // Header content
  document.title = `${project.title} | AG`;
  document.getElementById("pYear").textContent = project.year || "";
  document.getElementById("pTitle").textContent = project.title || "";
  document.getElementById("pDesc").textContent = project.desc || "";

  // Gallery
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  // Layout class
  gallery.classList.toggle("is-one-col", project.layout === "one-col");

  project.images.forEach((imgObj) => {
    const figure = el("figure", "gallery-item");

    // full width override
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
});