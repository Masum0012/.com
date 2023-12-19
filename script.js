
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    if (menu.className === "navbar") {
        menu.classList.remove("navbar");
    } else {
        menu.classList.add("navbar");
    }
});
