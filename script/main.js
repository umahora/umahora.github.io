// esse código é de um tutorial do canal  "Tiger Codes"
// link para o tutorial https://www.youtube.com/watch?v=bHRXRYTppHM
class NavbarBtn {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

   handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const menuBar = new NavbarBtn(
    ".btn-menu",
    ".nav-list",
    ".nav-list li",
);
menuBar.init();

// Fim do código do tutorial



// Esse código eu peguei do tutorial do site w3schools.com
// link para o tutorial https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
// fiz algumas modificações nele
const navbar = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const btnMenu = document.querySelector(".btn-menu");
let prevScrollPos = window.scrollY;

window.onscroll = () => {
    let currentScrollPos = window.scrollY;

    navbar.style = currentScrollPos == 0 ?
        "box-shadow: 0; " : "box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.25);"
   

    navbar.style.top = prevScrollPos > currentScrollPos ? "0" : "-80px"

    if(navList.classList.length == 2 && navbar.style.top  == "-80px"){
        navList.classList.remove("active");
        btnMenu.classList.remove("active");
    }
    console.log(navbar.style.top)
    prevScrollPos = currentScrollPos;
};
