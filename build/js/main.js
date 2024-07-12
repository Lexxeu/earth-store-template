// Loading Screen

window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loading-screen");
  var progressBar = document.querySelector(".progress");

  var progress = 0;
  var interval = setInterval(function () {
    if (progress >= 100) {
      clearInterval(interval);
      loadingScreen.style.display = "none";

      var content = document.getElementById("content");
      content.classList.remove("hidden");
    } else {
      progress += 60;
      progressBar.style.width = progress + "%";
    }
  }, 500);
});

// For mebile menu
const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

// For sidebar

const sidebarBtn = document.getElementById("sidebar-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const sbClose = document.getElementById("close-sb");
function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("flex");
  sidebar.classList.remove("hidden");
}

sidebarBtn.addEventListener("click", openSidebar);
mobileSidebar.addEventListener("click", openSidebar);
sbClose.addEventListener("click", closeSidebar);

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden", "animate-close-sidebar");
  sidebar.classList.remove("flex");
}
