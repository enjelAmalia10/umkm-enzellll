/* =========================
   MENU NAVIGASI HP
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});


/* TUTUP MENU SETELAH DIKLIK */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


/* =========================
   ANIMASI SAAT SCROLL
========================= */

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".reveal").forEach(function (element) {
    observer.observe(element);
});


/* =========================
   TAHUN OTOMATIS FOOTER
========================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================
   ANIMASI SAAT HALAMAN DIBUKA
========================= */

window.addEventListener("load", function () {
    document.querySelectorAll(".hero .reveal").forEach(function (element) {
        element.classList.add("show");
    });
});
