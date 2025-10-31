const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "🌞";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  themeToggle.textContent = theme === "dark" ? "🌞" : "🌙";
  localStorage.setItem("theme", theme);
});

// Show button on scroll
const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // show after scrolling 300px
    goTop.style.opacity = "1";
    goTop.style.pointerEvents = "auto";
  } else {
    goTop.style.opacity = "0";
    goTop.style.pointerEvents = "none";
  }
});
