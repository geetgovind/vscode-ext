// Toggle between light and dark mode
function toggleTheme() {
  const htmlElement = document.querySelector("html");
  htmlElement.dataset.bsTheme =
    htmlElement.dataset.bsTheme === "light" ? "dark" : "light";

    var body = document.body;
    body.style.backgroundColor = (body.style.backgroundColor === 'lightslategrey') ? 'lightgrey' :'lightslategrey' ;
  
}
