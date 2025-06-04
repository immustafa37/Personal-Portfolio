// Mobile Menu Toggle & Smooth Scroll + Close menu on nav click
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const body = document.body;
const navAnchorLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    body.classList.toggle("menu-open");
});

navAnchorLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Close mobile menu
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        body.classList.remove("menu-open");

        // Smooth scroll to section
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Form Submission Handling
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message sent successfully!");
    event.target.reset();
});
