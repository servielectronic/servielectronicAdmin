const menu = document.querySelector(".lateral-menu");
const bodys = document.querySelector(".cuerpoCard");
const logos = document.querySelector(".logo");
document.querySelector(".bars__menu").addEventListener("click", animacion);

function animacion(){
    menu.classList.toggle("lateral-menu-active");
    bodys.classList.toggle("cuerpoCard-active");
    logos.classList.toggle("logo-active");

}
