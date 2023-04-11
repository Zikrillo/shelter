const burgershadow = document.querySelector(".burger--shadow");
const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".start-screen--burger");

burgerIcon.addEventListener("click", ()=>{
    burger.classList.toggle("burger_active");
    burgershadow.classList.toggle("shadow_active");
    burgerIcon.classList.toggle("rotate");
})