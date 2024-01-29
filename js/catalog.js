let catalog__search__open = document.querySelector("#catalog__search__open")

let catalog__search = document.querySelector("#catalog__search")

let catalog__heading_mobile = document.querySelector("#catalog__heading-mobile")

let catalog__filter__checkboxes__items = document.querySelectorAll(".catalog__filter__checkboxes__item")

let catalog__filters__title = document.querySelector("#catalog__filters__title")

let catalog__filter__submenu = document.querySelector("#catalog__filter__submenu")

let catalog__item__more = document.querySelector("#catalog__item__more")

let catalog__item__more__popup = document.querySelector("#catalog__item__more__popup")

let catalog__item__more__popup__close = document.querySelector("#catalog__item__more__popup__close")

let catalog__item__more__popup__back = document.querySelector("#catalog__item__more__popup__back")


catalog__search__open.addEventListener("click", () => {
    catalog__search.classList.toggle("catalog__search--open")
    catalog__heading_mobile.classList.toggle("catalog__heading-mobile__padding")
    catalog__filter__submenu.classList.remove("catalog__submenu--open")
})

catalog__filters__title.addEventListener("click", () => {
    catalog__filter__submenu.classList.toggle("catalog__submenu--open")
    catalog__search.classList.remove("catalog__search--open")
    catalog__heading_mobile.classList.remove("catalog__heading-mobile__padding")
})

catalog__item__more.addEventListener("click", () => {
    catalog__item__more__popup.classList.toggle("catalog__item__more__popup--open")
    document.body.style.overflow = "hidden"
})

catalog__item__more__popup__close.addEventListener("click", () => {
    catalog__item__more__popup.classList.remove("catalog__item__more__popup--open")
    document.body.style.overflow = "auto"
})

catalog__item__more__popup__back.addEventListener("click", () => {
    catalog__item__more__popup.classList.remove("catalog__item__more__popup--open")
    document.body.style.overflow = "auto"
})

function toggleDropdown(id) {
    var submenu = document.getElementById(id);

    if (submenu.classList.contains('catalog__filter__checkboxes__items--open')) {
        submenu.classList.remove("catalog__filter__checkboxes__items--open");



    } else {
        submenu.classList.toggle("catalog__filter__checkboxes__items--open");

    }

}