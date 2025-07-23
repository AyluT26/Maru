window.open(
  "https://wa.link/k7io3f?text=Hola! Maru,Quiero agendar una sesión✨",
  "_blank"
);

// scroll.js
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const id = enlace.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const secciones = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

secciones.forEach((sec) => observer.observe(sec));
