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


/* =========================
FEATURE SHOWCASE
Four tabs, each plays an animated scene; auto-advances with a sweep transition
========================= */

(function () {
  const root = document.querySelector("[data-showcase]");
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll(".sc-tab"));
  const panels = Array.from(root.querySelectorAll(".sc-panel"));
  const stage = root.querySelector(".sc-stage");
  const DUR = 7000;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let index = 0;
  let timer = null;
  let inView = false;
  let held = false;
  let swapTimer = null;

  function clear() {
    clearTimeout(timer);
    timer = null;
  }

  function schedule() {
    clear();
    if (reduce || held || !inView) return;
    timer = setTimeout(() => show((index + 1) % tabs.length, true), DUR);
  }

  function show(i, animate) {
    index = i;

    tabs.forEach((t, n) => {
      const on = n === i;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      if (on) {
        const bar = t.querySelector(".sc-bar i");
        if (bar) {
          bar.style.animation = "none";
          void bar.offsetWidth;
          bar.style.animation = "";
        }
      }
    });

    panels.forEach((p, n) => {
      const on = n === i;
      p.classList.toggle("is-active", on);
      p.setAttribute("aria-hidden", String(!on));
    });

    if (stage) {
      stage.classList.remove("swap");
      void stage.offsetWidth;
      stage.classList.add("swap");
      clearTimeout(swapTimer);
      swapTimer = setTimeout(() => stage.classList.remove("swap"), 1000);
    }

    schedule();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => show(i, false));
    tab.addEventListener("keydown", e => {
      let next = null;
      if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabs.length - 1;
      if (next !== null) {
        e.preventDefault();
        show(next, false);
        tabs[next].focus();
      }
    });
  });

  // pause while hovered / focused so people can watch a scene
  const hold = v => {
    held = v;
    root.classList.toggle("is-paused", v);
    if (v) clear();
    else show(index, false);
  };
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    root.addEventListener("mouseenter", () => hold(true));
    root.addEventListener("mouseleave", () => hold(false));
  }

  // only run while on screen
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const was = inView;
          inView = entry.isIntersecting;
          if (inView && !was) show(0, false);
          if (!inView) clear();
        });
      },
      { threshold: 0.35 }
    ).observe(root);
  } else {
    inView = true;
    show(0, false);
  }
})();
