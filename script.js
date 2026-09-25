const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const menuIsOpen = navLinks.classList.contains("show");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});

navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        navLinks.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
    }
});

year.textContent = new Date().getFullYear();
