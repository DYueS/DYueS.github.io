gsap.registerPlugin(ScrollTrigger);

// ------------------ Rellax ----------------------

var rellax = new Rellax('.rellax');

// --------------- Progress Bar -------------------

let progressBar = document.querySelector("#progress_bar");

function updateProgressBar() {
    progressBar.style.height = `${getScrollPercentage()}%`
    requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);
}

updateProgressBar()

// ------------------- GSAP -----------------------

var tl = gsap.timeline();

gsap.to(".welcome", {
    duration: 2.5,
    ease: "back.out(2)",
    startAt: { y: -50, opacity: 0 },
    y: 0,
    opacity: 1
})  

// ------------------- Js -----------------------

const element = document.getElementsByClassName("menu");

function menu_aumenta(){
    gsap.to("#btn_menu",{
        duration: 0.25,
        ease: "expo.out",
        backgroundColor: "#38D0F2"
    });
    gsap.to("#btn_menu>img",{
        duration: 0.5,
        ease: "expo.out",
        width: "75px"
    });
    gsap.to("#btn_menu > ul",{
        duration: 2,
        ease: "expo.out",
        height: "200px"
    });
}

function menu_diminui(){
    gsap.to("#btn_menu",{
        duration: 0.25,
        ease: "expo.out",
        backgroundColor: "#38BDF2"
    });
    gsap.to("#btn_menu>img",{
        duration: 0.5,
        ease: "expo.out",
        width: "70px"
    });
    gsap.to("#btn_menu > ul",{
        duration: 2,
        ease: "expo.out",
        rotation: 0,
        height: "0px"
    });
}

// for(var i = 0; i < element.length; i++){
//     $(element[i]).on('mouseover', menu_aumenta);
//     $(element[i]).on('mouseout', menu_diminui);
//     //element[i].addEventListener("mouseover", menu_aumenta, false);
//     //element[i].addEventListener("mouseout", menu_diminui, false);
// }

$(document).ready(function(){
    // $('#btn_menu').on('mouseover', menu_aumenta);
    // $('#btn_menu').on('mouseout', menu_diminui);
});