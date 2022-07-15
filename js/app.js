const closeIcon = document.querySelector(".close-icon");
const burgerIcon = document.querySelector(".burger");
const menu = document.querySelector(".nav-links__container");

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    menu.classList.toggle("active");
})
closeIcon.addEventListener("click", () => {
    closeIcon.classList.toggle("active");
    menu.classList.toggle("active");
});