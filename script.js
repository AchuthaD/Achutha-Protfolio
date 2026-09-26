/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .certificate, .about-text, .education-card"
    );


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal", "show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   TERMINAL TYPING EFFECT
========================= */

const cursor = document.querySelector(".cursor");

setInterval(() => {

    if (cursor) {

        cursor.style.opacity =
            cursor.style.opacity === "0"
                ? "1"
                : "0";

    }

}, 500);