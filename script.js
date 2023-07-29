
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let navbar = document.querySelector(".navbar");
let goTop = document.querySelector(".goTop");

// when menu is clicked show navbar 
menu.onclick = () =>{
    navbar.classList.toggle("active");
    menu.classList.toggle("close");
}

// when window scrolls remove navbar 
window.onscroll = () =>{
    navbar.classList.remove("active")
    menu.classList.remove("close");

    if (window.scrollY > 200){
        goTop.classList.add("active");
      }else{
        goTop.classList.remove("active");
      }
}

// when navbar link is click set it active 
let navLink = document.querySelectorAll(".navbar .nav li a")
Array.from(navLink).forEach((item, index) => (
  item.onclick = (e) => { 
    let currentLink = document.querySelector(".navbar .nav li a.active");
    currentLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menu.classList.remove("close");
  }
));

// let closeVideo = document.querySelector(".closeVideo");
// let videoPlayer = document.querySelector(".videoPlayer");
// let playVideo = document.querySelector(".playVideo");
// let watchVideo = document.querySelector(".watchVideo");

// // hide video 
// closeVideo.onclick = () =>{
//     videoPlayer.classList.remove("show");
// }

// // show video 
// playVideo.onclick = () =>{
//     videoPlayer.classList.add("show");
// }
// watchVideo.onclick = () =>{
//     videoPlayer.classList.add("show");
// }
