const hamburger = document.getElementsByClassName("hamburger");
const close = document.getElementsByClassName("close");
const header = document.querySelector("header");
const all = document.getElementsByClassName("all");
const headText = document.getElementsByClassName("head-text");
const button = document.getElementsByClassName("dropbtn");



header.addEventListener('touchstart', (e) =>{

   if (e.target.className === "hamburger") {

     all[0].style.display = "grid";
     headText[0].style.display = "none";
     hamburger[0].style.display = "none";
     close[0].style.display = "block";
   }

   if (e.target.className === "close") {

    all[0].style.display = "none";
    headText[0].style.display = "block";
    hamburger[0].style.display = "block";
    close[0].style.display = "none";
   }

   const dropDown = e.target.nextElementSibling;
   const arrow = e.target.children[1];

   if (e.target.className === "dropbtn") {
       for (let i = 0; i < button.length; i++){
           if (button[i].nextElementSibling.style.display === "block") {
              button[i].nextElementSibling.style.display = "none";
           }
       }
        dropDown.style.display = "block";
        arrow.style.transfrom = "rotate(180deg)";
   }
})