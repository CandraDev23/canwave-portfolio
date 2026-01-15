const projects = [
  {
    type: ["Design", "Website"],
    title: "Media Catcher - Landing Page UI",
    img: "assets/img/thumb/mediacatcher.png",
    category: "UI/UX Design",
    desc: "Media Catcher adalah sebuah platform website yang berfokus untuk mempermudah pengguna dalam menyimpan dan berbagi berbagai jenis konten media. Dengan Media Catcher, pengguna dapat menyimpan dan berbagi berbagai konten media secara mudah dan intuitif.",
    link_design: "https://dribbble.com/shots/24094301-MediaCatcher-Landing-Page",
    link_website: "https://candradev23.github.io/mediacatcher-website/",
  },
  {
    type: ["Design", "Website"],
    title: "Perfumist - Landing Page UI",
    img: "assets/img/thumb/perfumist.png",
    category: "UI/UX Design",
    desc: "Perfumist adalah sebuah platform website yang berfokus untuk menjual berbagai jenis perfume. Dengan Perfumist, pengguna dapat mencari dan membeli berbagai jenis perfume secara mudah dan intuitif.",
    link_design: "https://dribbble.com/shots/24295700-Perfumist-Landing-Page-Website",
    link_website: "https://candradev23.github.io/perfumist-landing-page/",
  },
  {
    type: ["Design"],
    title: "Weather Forecast - Mobile UI",
    img: "assets/img/thumb/weatherapp.png",
    category: "UI/UX Design",
    desc: "Aplikasi ini berfungsi untuk menampilkan prakiraan cuaca untuk beberapa kota di Indonesia. Pengguna dapat melihat informasi seperti suhu, kelembaban, cuaca, dan kecepatan angin.",
    link_design: "https://dribbble.com/shots/24295780-Weather-Forecast-Mobile-App",
  },
  {
    type: ["Design"],
    title: "Music Streaming App - Mobile UI",
    img: "assets/img/thumb/muzaixapp.png",
    category: "UI/UX Design",
    desc: "Aplikasi untuk memutar musik dengan antarmuka modern dan user-friendly.",
    link_design: "https://dribbble.com/shots/22875584-Muzaix-App-Music-Playlist",
  },
  {
    type: ["Website"],
    title: "QuickPeek Web App - Web App",
    img: "assets/img/thumb/quickpeek.png",
    category: "UI/UX Design",
    desc: "Aplikasi untuk memutar musik dengan antarmuka modern dan user-friendly.",
    link_website: "https://quick-peek-website.vercel.app/",
  },
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

    // Tentukan button berdasarkan type
    const hasDesign = proj.type.includes("Design");
    const hasWebsite = proj.type.includes("Website");
    let buttonHTML = `<a class="open-link-btn" target="_blank" href="${proj.link}" title="buka link"><i class="fas fa-external-link-alt"></i></a>`; // default

    if (hasDesign && hasWebsite) {
      // Jika ada keduanya, tampilkan 2 button
      buttonHTML = `
        <a class="open-link-btn" target="_blank" href="${proj.link_design}" title="buka di dribbble"><i class="fab fa-dribbble"></i></a>
        <a class="open-link-btn" target="_blank" href="${proj.link_website}" title="buka website"><i class="fas fa-globe"></i></a>
      `;
    } else if (hasDesign && !hasWebsite) {
      buttonHTML = `<a class="open-link-btn" target="_blank" href="${proj.link_design}" title="buka link"><i class="fab fa-dribbble"></i></a>`;
    } else if (hasWebsite && !hasDesign) {
      buttonHTML = `<a class="open-link-btn" target="_blank" href="${proj.link_website}" title="buka link"><i class="fas fa-globe"></i></a>`;
    }

    card.innerHTML = `
      <div class="card-image">
        <img src="${proj.img}" alt="${proj.title}" />
      </div>
      <div class="card-body">
        <h3>${proj.title}</h3>
        <h4>${proj.category}</h4>
        <p>${proj.desc}</p>
      </div>
      <div class="card-footer">
        ${buttonHTML}
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
