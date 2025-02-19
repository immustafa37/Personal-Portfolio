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