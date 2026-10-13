/* =========================
VANTA SCRIPT
Nav state, smooth scroll, scroll reveal, demo window system
========================= */


/* =========================
NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

if (navbar) {
  const updateNav = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  };

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
}


/* =========================
SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    const target = href.length > 1 ? document.querySelector(href) : document.body;

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


/* =========================
DEMO OPEN SYSTEM
========================= */

document.querySelectorAll(".demo-card").forEach(card => {
  card.addEventListener("click", () => openDemo(card.dataset.demo));

  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDemo(card.dataset.demo);
    }
  });
});


function openDemo(type) {
  const overlay = document.createElement("div");
  overlay.className = "demo-overlay";

  overlay.innerHTML = `
    <div class="demo-window">
      <div class="window-controls">
        <button class="window-btn close" aria-label="Close demo"></button>
        <button class="window-btn minimize" aria-label="Minimise demo"></button>
        <button class="window-btn fullscreen" aria-label="Toggle fullscreen"></button>
      </div>

      <div class="demo-browser">
        <div class="demo-content">
          ${loadDemo(type)}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  setTimeout(() => overlay.classList.add("active"), 50);

  const windowBox = overlay.querySelector(".demo-window");


  /* CLOSE */
  function closeDemo() {
    overlay.classList.remove("active");
    document.removeEventListener("keydown", onKey);

    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = "";
    }, 400);
  }

  function onKey(e) {
    if (e.key === "Escape") closeDemo();
  }

  document.addEventListener("keydown", onKey);

  overlay.querySelector(".close").onclick = closeDemo;


  /* MINIMIZE */
  overlay.querySelector(".minimize").onclick = () => {
    windowBox.classList.toggle("minimized");
  };


  /* FULLSCREEN */
  overlay.querySelector(".fullscreen").onclick = () => {
    windowBox.classList.toggle("fullscreen");
  };


  /* DEMO BUTTON HANDLERS */
  setTimeout(() => {
    overlay.querySelectorAll(".demo-action").forEach(button => {
      button.onclick = () => {
        const section = overlay.querySelector(button.dataset.target);

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    });
  }, 100);
}


/* =========================
LOAD DEMOS
========================= */

function loadDemo(type) {
  if (type === "harrison") return harrisonDemo;
  if (type === "amelia") return ameliaDemo;
  if (type === "primeflow") return primeflowDemo;
  return "";
}
