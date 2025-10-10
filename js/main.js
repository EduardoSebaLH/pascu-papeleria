// ==============================
// 📦 Datos del catálogo
// ==============================
const productos = {
  agendas: [
    {
      title: "Agenda A5 personalizada",
      img: "img/agenda.png",
      desc: "Agenda con tapa dura, diseño pastel y cierre elástico.",
      price: 17990,
      features: ["Tapa dura", "100 hojas", "Diseño personalizado"]
    },
    {
      title: "Agenda floral",
      img: "img/agenda.png",
      desc: "Agenda con diseño floral, ideal para planificar tu mes.",
      price: 15990,
      features: ["Diseño floral", "Mensual", "Portada laminada"]
    },
    {
      title: "Agenda floral",
      img: "img/agenda.png",
      desc: "Agenda con diseño floral, ideal para planificar tu mes.",
      price: 15990,
      features: ["Diseño floral", "Mensual", "Portada laminada"]
    },
    {
      title: "Agenda floral",
      img: "img/agenda.png",
      desc: "Agenda con diseño floral, ideal para planificar tu mes.",
      price: 15990,
      features: ["Diseño floral", "Mensual", "Portada laminada"]
    }
  ],
  libros: [
    {
      title: "Libro impreso B/N",
      img: "img/libro.png",
      desc: "Impresión económica en blanco y negro, encuadernación rústica.",
      price: 24990,
      features: ["Hasta 100 páginas", "Encuadernación rústica", "Formato A5"]
    },
    {
      title: "Libro tapa dura",
      img: "img/libro.png",
      desc: "Ideal para tesis o publicaciones personales.",
      price: 34990,
      features: ["Tapa dura", "Color o B/N", "Formato personalizado"]
    },
    {
      title: "Agenda floral",
      img: "img/libro.png",
      desc: "Agenda con diseño floral, ideal para planificar tu mes.",
      price: 15990,
      features: ["Diseño floral", "Mensual", "Portada laminada"]
    }
  ],
  encuadernacion: [
    {
      title: "Encuadernación cosida",
      img: "img/encuadernacion.png",
      desc: "Encuadernación artesanal con hilo, ideal para cuadernos.",
      price: 7990,
      features: ["Cosedura", "80 hojas", "Portada personalizable"]
    },
    {
      title: "Encuadernación anillada",
      img: "img/encuadernacion.png",
      desc: "Encuadernación con espiral metálico, resistente y práctica.",
      price: 6990,
      features: ["Anillado metálico", "Formato A4", "Portada plástica"]
    },
    {
      title: "Agenda floral",
      img: "img/encuadernacion.png",
      desc: "Agenda con diseño floral, ideal para planificar tu mes.",
      price: 15990,
      features: ["Diseño floral", "Mensual", "Portada laminada"]
    }
  ]
};

// ==============================
// 🧱 Elementos del DOM
// ==============================
const grid = document.getElementById("grid");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalFeatures = document.getElementById("modalFeatures");
const modalPrice = document.getElementById("modalPrice");
const btnCerrar = document.getElementById("btnCerrar");

// ==============================
// 🖼️ Renderiza menú
// ==============================
function renderAgendas() {
  const grid = document.getElementById("gridAgendas");
  grid.innerHTML = "";
  productos.agendas.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img class="thumb" src="${p.img}" alt="${p.title}">
      <div class="title">${p.title}</div>
      <div class="meta">${p.desc}</div>
      <div class="price">$ ${p.price.toLocaleString("es-CL")}</div>
    `;
    card.addEventListener("click", () => openProduct(p));
    grid.appendChild(card);
  });
}

function renderLibros() {
  const grid = document.getElementById("gridLibros");
  grid.innerHTML = "";
  productos.libros.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img class="thumb" src="${p.img}" alt="${p.title}">
      <div class="title">${p.title}</div>
      <div class="meta">${p.desc}</div>
      <div class="price">$ ${p.price.toLocaleString("es-CL")}</div>
    `;
    card.addEventListener("click", () => openProduct(p));
    grid.appendChild(card);
  });
}

function renderEncuadernacion() {
  const grid = document.getElementById("gridEncuadernacion");
  grid.innerHTML = "";
  productos.encuadernacion.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img class="thumb" src="${p.img}" alt="${p.title}">
      <div class="title">${p.title}</div>
      <div class="meta">${p.desc}</div>
      <div class="price">$ ${p.price.toLocaleString("es-CL")}</div>
    `;
    card.addEventListener("click", () => openProduct(p));
    grid.appendChild(card);
  });
}

// ==============================
// 🔍 Abre el modal con detalles
// ==============================
function openProduct(p) {
  modalImg.src = p.img;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalFeatures.innerHTML = p.features.map(f => `<li>${f}</li>`).join("");
  modalPrice.textContent = `$ ${p.price.toLocaleString("es-CL")}`;
  modalBackdrop.classList.add("show");
}

// ==============================
// ❌ Cierra el modal
// ==============================
btnCerrar.addEventListener("click", () => {
  modalBackdrop.classList.remove("show");
});

modalBackdrop.addEventListener("click", e => {
  if (e.target === modalBackdrop) {
    modalBackdrop.classList.remove("show");
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modalBackdrop.classList.remove("show");
  }
});

// ==============================
// 📬 Formulario de contacto
// ==============================
function enviarContacto() {
  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const msg = document.getElementById("cmessage").value.trim();

  if (!name || !email || !msg) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Correo inválido. Verifica el formato.");
    return;
  }

  alert("Mensaje enviado correctamente. Francisca te responderá pronto.");
  document.getElementById("contactForm").reset();
}

// ==============================
// 🚀 Inicializa la página
// ==============================
renderAgendas();
renderLibros();
renderEncuadernacion();