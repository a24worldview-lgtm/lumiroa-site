const HOTPEPPER_URL = "https://beauty.hotpepper.jp/";

const opening = document.querySelector("[data-opening]");

if (opening) {
  const OPENING_SEEN_KEY = "lumiroaOpeningSeen";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let seen = false;
  try {
    seen = sessionStorage.getItem(OPENING_SEEN_KEY) === "1";
    if (!seen && !prefersReducedMotion) {
      sessionStorage.setItem(OPENING_SEEN_KEY, "1");
    }
  } catch (error) {
    seen = false;
  }

  if (prefersReducedMotion || seen) {
    opening.remove();
  } else {
    opening.classList.add("is-active");
    document.body.classList.add("is-opening");
    window.setTimeout(() => {
      opening.remove();
      document.body.classList.remove("is-opening");
    }, 3600);
  }
}

document.querySelectorAll("[data-reserve-link]").forEach((link) => {
  link.href = HOTPEPPER_URL;
});

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
