const hoverAll = document.querySelectorAll(".services-child2-gc2");

hoverAll.forEach((item) =>{
  item.addEventListener("mouseover", () =>{
    item.children[0].style.transform = "scale(1.03 )";
    item.children[1].style.borderTop = "5px solid #fdc134";
    item.children[1].children[0].style.color = "#fdc134";
  });
});

hoverAll.forEach((item) =>{
  item.addEventListener("mouseout", () =>{
    item.children[0].style.transform = "scale(1)";
    item.children[1].style.borderTop = "none";
    item.children[1].children[0].style.color = "#213b52";
  });
});

// const clearModalBtn = document.querySelector('.ok');
// const clearModal = document.querySelector('.modal-overlay');

// clearModalBtn.addEventListener("click", () => {
//   clearModal.style.display = "none";
// });

/* NavBar overlay */

const navOverlay = document.querySelector(".nav-overlay");
const menu = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-close");

menu.addEventListener("click", () => {
  navOverlay.style.transform = "translateY(0)";
  navOverlay.style.transition = ".4s ease-in";
});
close.addEventListener("click", () => {
  navOverlay.style.transform = "translateY(-2000px)";
  navOverlay.style.transition = ".4s ease-in-out";
});

console.log("Hello World!");