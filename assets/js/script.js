function showMenu() {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("nav-menu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    toggle.classList.remove("active");
  } else {
    menu.style.display = "block";
    toggle.classList.add("active");
  }
}

// ✅ Tutup menu jika klik di luar area menu atau tombol
document.addEventListener("click", function (e) {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("nav-menu");

  const clickedOutsideMenu = !menu.contains(e.target);
  const clickedOutsideToggle = !toggle.contains(e.target);

  if (clickedOutsideMenu && clickedOutsideToggle) {
    menu.style.display = "none";
    toggle.classList.remove("active");
  }
});

// ✅ Tutup menu jika klik salah satu link menu
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("nav-menu").style.display = "none";
    document.getElementById("navbar-toggle").classList.remove("active");
  });
});

// Update progress bar on scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
