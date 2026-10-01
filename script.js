// Smooth reveal animation while scrolling

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});
/* =========================
   ACTIVE NAVIGATION ON SCROLL
========================= */

const navLinks = document.querySelectorAll(".navbar nav a");

const sectionsForNav = document.querySelectorAll(
    "#home, #about, #learning, #skills, #projects, #experience, #education, #contact"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sectionsForNav.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});