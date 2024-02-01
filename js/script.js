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

const btn_to_top = document.querySelector("#btn_to_top");
window.addEventListener("scroll", function () {
    btn_to_top.classList.toggle("btn-to-top--visible", window.scrollY > 200);
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('opacity-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.opacity-anim');
for (let elm of elements) {
    observer.observe(elm);
}

const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll()
    }, 100)
}
