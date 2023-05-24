const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0);
});


let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
const text = document.querySelector(".sec-text");




textload();
setInterval(textload, 12000);