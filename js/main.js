document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MOBILE NAVIGATION
    ================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const expanded =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", String(!expanded));
        });

        /* Close menu after clicking a link */
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        /* Close menu when clicking outside */
        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }


    /* ================================
       CURRENT YEAR
    ================================= */

    const yearElements =
        document.querySelectorAll(".current-year");

    const currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });


    /* ================================
       CONTACT FORM
    ================================= */

    const contactForm =
        document.querySelector("#contactForm");

    const formMessage =
        document.querySelector("#formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (formMessage) {
                formMessage.textContent =
                    "Thank you. Your message has been received.";
                formMessage.classList.add("show");
            }

            contactForm.reset();
        });
    }


    /* ================================
       ACTIVE NAVIGATION LINK
    ================================= */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navigationLinks =
        document.querySelectorAll(".nav-menu a");

    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

        /* Homepage handling */
        if (
            (currentPage === "" || currentPage === "index.html") &&
            linkPage === "index.html"
        ) {
            link.classList.add("active");
        }
    });

});
