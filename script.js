// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const body = document.body;

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    body.classList.toggle("menu-open");
});

// Close menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        body.classList.remove("menu-open");
    });
});
// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️"; // Change to sun icon for light mode
    } else {
        themeToggle.textContent = "🌙"; // Change to moon icon for dark mode
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Form Submission Handling
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message sent successfully!");
    event.target.reset();
});