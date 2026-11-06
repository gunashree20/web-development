// Find the HTML element with ID "year"
const yearElement = document.getElementById("year");

// Get the current year from the computer
const currentYear = new Date().getFullYear();

// Display the current year inside the footer
yearElement.textContent = currentYear;

/* ========================================
   2. MOBILE NAVIGATION
======================================== */

// Select all navigation links
const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);
// Select the Bootstrap navigation menu
const navMenu = document.getElementById("mainNav");

// Add a click event to every navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Check whether the screen is smaller than 992px
        if (window.innerWidth < 992) {
            // Get the Bootstrap collapse component
            const menu =
                bootstrap.Collapse.getOrCreateInstance(navMenu);
            // Close the mobile menu
            menu.hide();
        }
    });
});
