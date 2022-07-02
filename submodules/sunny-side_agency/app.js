const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const navBox = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    if (navBox.classList.contains("hide")) {
        navBox.classList.remove("hide");
        closeIcon.style.display = "block";
        burgerIcon.style.display = "none";
    } else {
        navBox.classList.add("hide");
        closeIcon.style.display = "none";
        burgerIcon.style.display = "block";
    }
});


