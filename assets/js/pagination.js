const projects = [
  {
    title: "Media Catcher - Landing Page UI",
    img: "assets/img/thumb/mediacatcher.png",
    category: "UI/UX Design",
    desc: "Media Catcher adalah sebuah platform website yang berfokus untuk mempermudah pengguna dalam menyimpan dan berbagi berbagai jenis konten media. Dengan Media Catcher, pengguna dapat menyimpan dan berbagi berbagai konten media secara mudah dan intuitif.",
    link: "https://dribbble.com/shots/24094301-MediaCatcher-Landing-Page",
  },
  {
    title: "Perfumist - Landing Page UI",
    img: "assets/img/thumb/perfumist.png",
    category: "UI/UX Design",
    desc: "Perfumist adalah sebuah platform website yang berfokus untuk menjual berbagai jenis perfume. Dengan Perfumist, pengguna dapat mencari dan membeli berbagai jenis perfume secara mudah dan intuitif.",
    link: "https://dribbble.com/shots/24295700-Perfumist-Landing-Page-Website",
  },
  {
    title: "Weather Forecast - Mobile UI",
    img: "assets/img/thumb/weatherapp.png",
    category: "UI/UX Design",
    desc: "Aplikasi ini berfungsi untuk menampilkan prakiraan cuaca untuk beberapa kota di Indonesia. Pengguna dapat melihat informasi seperti suhu, kelembaban, cuaca, dan kecepatan angin.",
    link: "https://dribbble.com/shots/24295780-Weather-Forecast-Mobile-App",
  },
  {
    title: "Music Streaming App - Mobile UI",
    img: "assets/img/thumb/muzaixapp.png",
    category: "UI/UX Design",
    desc: "Aplikasi untuk memutar musik dengan antarmuka modern dan user-friendly.",
    link: "https://dribbble.com/shots/22875584-Muzaix-App-Music-Playlist",
  }
];

const itemsPerPage = 3;
let currentPage = 1;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

function renderProjects() {
  const container = document.querySelector(".projects");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleProjects = projects.slice(start, end);

  visibleProjects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="card-image">
          <img src="${proj.img}" alt="${proj.title}" />
        </div>
        <div class="card-body">
          <h3>${proj.title}</h3>
          <h5>${proj.category}</h5>
          <p>${proj.desc}</p>
        </div>
        <div class="card-footer">
          <a class="open-link-btn" target="_blank" href="${proj.link}" title="buka link">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      `;
    container.appendChild(card);
  });

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages}`;

  // Handle tombol disable
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderProjects();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProjects();
  }
});

window.onload = renderProjects;
