// Toggle between light and dark mode
function toggleTheme() {
  const htmlElement = document.querySelector("html");
  htmlElement.dataset.bsTheme =
    htmlElement.dataset.bsTheme === "light" ? "dark" : "light";
}
