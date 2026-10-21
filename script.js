
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close menu" : "Open menu"
  );
  menuToggle.textContent = open ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    menuToggle.textContent = "☰";
  });
});

// Reveal elements as they enter the screen
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
