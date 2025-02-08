let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
let nav = document.getElementById("navbar");
let navBtn1 = document.getElementById("link1");
let navBtn2 = document.getElementById("link2");
let navBtn3 = document.getElementById("link3");
let loadingGif = document.getElementById("loadingGif");
//Loading Gif Controlls
window.addEventListener("load",()=>{
  loadingGif.style.display=`none`
})

//Nav Controls
menu.addEventListener("click", () => {
  menu.style.display = `none`;
  cross.style.display = `block`;
  nav.style.height = `27rem`;
});
cross.addEventListener("click", () => {
  cross.style.display = `none`;
  menu.style.display = `block`;
  nav.style.height = `0`;
});

//Scroll Controls
let scroll = (element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = element.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
}
document.querySelectorAll(".links,.scrollBtn").forEach(element => {
  scroll(element)
});

document.querySelectorAll("#logo, #link1").forEach(element => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});