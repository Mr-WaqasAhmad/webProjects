let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
let nav = document.getElementById("navbar");
let loadingGif = document.getElementById("loadingGif");

// Hide loading GIF after page loads
window.addEventListener("load", () => {
  if (loadingGif) {
    loadingGif.style.display = "none";
  }
});

// Navbar Toggle
if (menu && cross && nav) {
  menu.addEventListener("click", () => {
    menu.style.display = "none";
    cross.style.display = "block";
    nav.style.height = "27rem";
  });

  cross.addEventListener("click", () => {
    cross.style.display = "none";
    menu.style.display = "block";
    nav.style.height = "0";
  });
}

// Smooth Scrolling
document.querySelectorAll(".links, .scrollBtn").forEach(element => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let targetId = element.getAttribute("href");
    if (targetId) {
      let targetElement = document.getElementById(targetId.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Scroll to Top for Logo & Home Link
document.querySelectorAll("#logo, #link1").forEach(element => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
