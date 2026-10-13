/* =========================
VANTA SCRIPT
Nav (incl. mobile menu), smooth scroll, scroll reveal
========================= */


/* =========================
NAVBAR
========================= */

const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");

function setMenu(open) {
  if (!navbar || !navToggle) return;
  navbar.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

if (navbar) {
  const updateNav = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  };

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    setMenu(!navbar.classList.contains("open"));
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
  });

  // close the menu when tapping outside it, or when the screen grows past mobile
  document.addEventListener("click", e => {
    if (!navbar.contains(e.target)) setMenu(false);
  });

  window.matchMedia("(min-width: 721px)").addEventListener("change", e => {
    if (e.matches) setMenu(false);
  });
}


/* =========================
SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    const target = href.length > 1 ? document.querySelector(href) : document.body;

    setMenu(false);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* =========================
SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  revealItems.forEach(el => observer.observe(el));
} else {
  revealItems.forEach(el => el.classList.add("in"));
}
