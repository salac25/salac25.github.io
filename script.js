// Simple script for interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to John Patrick Salac’s GitHub Page!");

  // Smooth scroll for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
