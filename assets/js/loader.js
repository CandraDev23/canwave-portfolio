// Saat seluruh halaman selesai dimuat
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  const content = document.querySelector("main");

  loader.classList.add("hidden"); // efek fade out
  setTimeout(() => {
    // loader.style.display = "none"; // hapus dari layout
    // content.style.visibility = "visible";
    content.style.opacity = 1;
  }, 500); // sesuai waktu transisi

  myScrollReveal();
});