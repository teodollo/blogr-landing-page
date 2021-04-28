const hamburger = document.getElementsByClassName("hamburger");
const close = document.getElementsByClassName("close");
const header = document.querySelector("header");
const all = document.getElementsByClassName("all");
const headText = document.getElementsByClassName("head-text");
const button = document.getElementsByClassName("dropbtn");
//const arrow = document.getElementsByClassName("mobile-arrow");



header.addEventListener('touchstart',  (e) =>{

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
    for (let i = 0; i < button.length; i++){
        if (button[i].nextElementSibling.style.display === "block") {
           button[i].nextElementSibling.style.display = "none";
        }
    }
   }

   const dropDown = e.target.nextElementSibling;

   

   if (e.target.className === "dropbtn" ) {
      const arrow = e.target.childNodes[2];
       for (let i = 0; i < button.length; i++){
           if (button[i].nextElementSibling.style.display === "block") {
              button[i].nextElementSibling.style.display = "none";
           }
           if (button[i].childNodes[2].getAttribute("style") === "transform: rotate(180deg);") {
                button[i].childNodes[2].style.transform = "rotate(360deg)";
           }
       }
        dropDown.style.display = "block";

        arrow.style.transform = "rotate(180deg)";
        
   }

});

