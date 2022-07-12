const burger = document.querySelector(".burger");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-menu");

// const line1 = document.querySelector(".line1");
// const line2 = document.querySelector(".line2");
// const line3 = document.querySelector(".line3");

burger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    closeIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    // line2.style.transform = "scaleY(0)";
    // line1.style.transform = "rotate(45deg)";
    // line3.style.transform = "rotate(-45deg)";
})
// "rotate(45deg)"