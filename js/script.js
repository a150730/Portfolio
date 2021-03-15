document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLink = document.querySelectorAll(".nav-sidebar li a");
    let getContent = document.querySelector(".content");

    if (toggleNavStatus === false && window.scrollY < 1710) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "400px";
        getContent.style.opacity = "0.05";

        let arrayLength = getSidebarLink.length;
        for (let i = 0; i < arrayLength; i++) {

            getSidebarLink[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getContent.style.opacity = "1";

        getSidebar.style.width = "0px";
        // getSidebarTitle.style.opacity = "0";


        let arrayLength = getSidebarLink.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLink[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

console.log("This is Toggle Menu bar bottom");



function skrolEffect() {
    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY;
        let getSidebar = document.querySelector(".nav-sidebar");
        let getSidebarUl = document.querySelector(".nav-sidebar ul");
        let getSidebarLink = document.querySelectorAll(".nav-sidebar li a");
        let getSidebarImg = document.querySelector(".ta");
        let getContent = document.querySelector(".content");
        vW = window.innerWidth;
        vH = window.innerHeight;
        // console.log(scrolled);


        if (scrolled > 300 && scrolled < 1710) {
            getSidebar.style.width = "0px";
            getContent.style.opacity = "1";
            getSidebarImg.style.visibility = "hidden";

            let arrayLength = getSidebarLink.length;
            for (let i = 0; i < arrayLength; i++) {
                getSidebarLink[i].style.opacity = "0";
            }

            getSidebarUl.style.visibility = "hidden";

            toggleNavStatus = false;

        }
        if (scrolled > 1709) {
            getSidebarUl.style.visibility = "hidden";
            getSidebarImg.style.visibility = "visible";



        }
    });
}
skrolEffect();


// for the toggle of about page
let aboutToggleNavStatus = false;

let abtTogleOpen = function() {
    let getAbt = document.querySelector(".about-container");
    let getCnclBtn = document.querySelector(".about-container .cancel-btn");
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLink = document.querySelectorAll(".nav-sidebar li a");
    let getContent = document.querySelector(".content");

    if (aboutToggleNavStatus === false && toggleNavStatus === true) {
        getAbt.style.visibility = "visible";
        getCnclBtn.style.visibility = "visible";

        getContent.style.opacity = "1";
        getSidebar.style.width = "0px";

        let arrayLength = getSidebarLink.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLink[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
        aboutToggleNavStatus = true;
    }
}

let abtTogleClose = function() {
    let getAbt = document.querySelector(".about-container");
    let getCnclBtn = document.querySelector(".about-container .cancel-btn");

    if (aboutToggleNavStatus === true) {
        getAbt.style.visibility = "hidden";
        getCnclBtn.style.visibility = "hidden";


        aboutToggleNavStatus = false;
    }
}

let abtTogleOpenFromOthers = function() {
    let getAbt = document.querySelector(".about-container");
    let getCnclBtn = document.querySelector(".about-container .cancel-btn");
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLink = document.querySelectorAll(".nav-sidebar li a");
    let getContent = document.querySelector(".content");

    if (aboutToggleNavStatus === false && toggleNavStatus === false) {
        getAbt.style.visibility = "visible";
        getCnclBtn.style.visibility = "visible";

        getContent.style.opacity = "1";
        getSidebar.style.width = "0px";

        let arrayLength = getSidebarLink.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLink[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
        aboutToggleNavStatus = true;
    }
}