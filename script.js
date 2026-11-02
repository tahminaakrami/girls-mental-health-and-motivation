// =============================
// 1. MOBILE MENU
// =============================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");

  const isOpen = navbar.classList.contains("open");

  menuToggle.innerHTML = isOpen
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';

  lucide.createIcons();
});

// Close menu after clicking a link

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");

    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });
});

// =============================
// 2. ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
