/* =========================
VANTA SCRIPT
Nav state, smooth scroll, scroll reveal, cursor background effect
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
CURSOR BACKGROUND EFFECT
Soft spotlight and dot grid that follow the pointer.
Only on devices with a real mouse, and not for reduced-motion users.
========================= */

const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (hasMouse && !reduceMotion) {
  const fx = document.createElement("div");
  fx.className = "cursor-fx";
  fx.setAttribute("aria-hidden", "true");
  document.body.prepend(fx);

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 3;
  let x = targetX;
  let y = targetY;
  let frame = 0;

  const tick = () => {
    x += (targetX - x) * 0.12;
    y += (targetY - y) * 0.12;

    fx.style.setProperty("--x", x + "px");
    fx.style.setProperty("--y", y + "px");

    if (Math.abs(targetX - x) > 0.3 || Math.abs(targetY - y) > 0.3) {
      frame = requestAnimationFrame(tick);
    } else {
      frame = 0;
    }
  };

  window.addEventListener(
    "pointermove",
    e => {
      targetX = e.clientX;
      targetY = e.clientY;
      fx.classList.add("on");

      if (!frame) frame = requestAnimationFrame(tick);
    },
    { passive: true }
  );

  document.documentElement.addEventListener("mouseleave", () => {
    fx.classList.remove("on");
  });
}
