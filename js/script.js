let menu__close = document.querySelector("#menu__close")
let menu__open = document.querySelector("#menu__open")
let menu = document.querySelector("#menu")

menu__open.addEventListener("click", () => {
    menu.classList.add("menu--open")
    document.body.classList.add("body-block")
})

menu__close.addEventListener("click", () => {
    menu.classList.remove("menu--open")
    document.body.classList.remove("body-block")
})

const header = document.querySelector(".header__layout");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 30);
});
