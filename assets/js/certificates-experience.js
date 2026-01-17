const certificates = [
  {
    title: "Sertifikasi Oracle",
    issuer: "Oracle Academy",
    date: "2023",
    image: "assets/img/certificates/OracleSertification.png",
  },
  {
    title: "Sertifikasi AWS",
    issuer: "AWS Academy",
    date: "2024",
    image: "assets/img/certificates/AWSSertification.png",
  },
  {
    title: "Sertifikasi NetAcad",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "assets/img/certificates/NetAcadSertification.png",
  },
];

const experiences = [
  {
    title: "Programmer",
    company: "CV Cyber Olympus",
    period: "April 2024 - September 2024",
    description:
      "Mengembangkan website responsif menggunakan Laravel dan JavaScript. Merancang dan membuat design di Photoshop dan Figma.",
    image: "assets/img/experience/CyberOlympusIntern.png",
  },
  {
    title: "UI/UX Designer",
    company: "COE Human Centric Engineering",
    period: "Februari 2025 - Mei 2025",
    description:
      "Merancang antarmuka pengguna untuk aplikasi web dan mobile. Melakukan riset pengguna dan usability testing.",
    image: "assets/img/experience/HumicIntern.png",
  },
  {
    title: "Staff Welcoming Party Informatics",
    company: "Himpunan Mahasiswa Informatika",
    period: "Oktober 2025",
    description:
      "Menjadi staff welcoming party untuk mahasiswa baru di Himpunan Mahasiswa Informatika.",
    image: "assets/img/experience/WPIStaff.png",
  },
];

const itemsPerPageCert = 6;
const itemsPerPageExp = 6;
let currentCertPage = 1;
let currentExpPage = 1;

// ===== CERTIFICATES PAGINATION =====
const prevCertBtn = document.getElementById("prevCertBtn");
const nextCertBtn = document.getElementById("nextCertBtn");
const certPageInfo = document.getElementById("certPageInfo");

function renderCertificates() {
  const container = document.querySelector(".certificates");
  container.innerHTML = "";

  const start = (currentCertPage - 1) * itemsPerPageCert;
  const end = start + itemsPerPageCert;
  const visibleCerts = certificates.slice(start, end);

  visibleCerts.forEach((cert) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="cert-card-wrapper">
        <div class="cert-card-image">
          <img src="${cert.image}" alt="${cert.title}" />
        </div>
        <div class="cert-card-body">
          <h3>${cert.title}</h3>
          <h4>${cert.issuer}</h4>
          <p>${cert.date}</p>
        </div>
        <div class="cert-card-footer">
          <button class="preview-cert-btn" onclick="openCertModal('${cert.image}', '${cert.title}')">
            Lihat<i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  const totalPages = Math.ceil(certificates.length / itemsPerPageCert);
  certPageInfo.textContent = `Halaman ${currentCertPage} dari ${totalPages}`;

  prevCertBtn.disabled = currentCertPage === 1;
  nextCertBtn.disabled = currentCertPage === totalPages;
}

prevCertBtn.addEventListener("click", () => {
  if (currentCertPage > 1) {
    currentCertPage--;
    renderCertificates();
  }
});

nextCertBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(certificates.length / itemsPerPageCert);
  if (currentCertPage < totalPages) {
    currentCertPage++;
    renderCertificates();
  }
});

// ===== EXPERIENCE PAGINATION =====
const prevExpBtn = document.getElementById("prevExpBtn");
const nextExpBtn = document.getElementById("nextExpBtn");
const expPageInfo = document.getElementById("expPageInfo");

function renderExperience() {
  const container = document.querySelector(".experience-list");
  container.innerHTML = "";

  const start = (currentExpPage - 1) * itemsPerPageExp;
  const end = start + itemsPerPageExp;
  const visibleExp = experiences.slice(start, end);

  visibleExp.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "exp-card";

    card.innerHTML = `
      <div class="exp-card-wrapper">
        <div class="exp-card-image">
          <img src="${exp.image}" alt="${exp.title}" />
        </div>
        <div class="exp-card-body">
          <h3>${exp.title}</h3>
          <h4>${exp.company}</h4>
          <p class="exp-period">${exp.period}</p>
          <p class="exp-description">${exp.description}</p>
        </div>
        <div class="exp-card-footer">
          <button class="preview-exp-btn" onclick="openExpModal('${exp.image}', '${exp.title}')">
            Preview<i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  const totalPages = Math.ceil(experiences.length / itemsPerPageExp);
  expPageInfo.textContent = `Halaman ${currentExpPage} dari ${totalPages}`;

  prevExpBtn.disabled = currentExpPage === 1;
  nextExpBtn.disabled = currentExpPage === totalPages;
}

prevExpBtn.addEventListener("click", () => {
  if (currentExpPage > 1) {
    currentExpPage--;
    renderExperience();
  }
});

nextExpBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(experiences.length / itemsPerPageExp);
  if (currentExpPage < totalPages) {
    currentExpPage++;
    renderExperience();
  }
});

// ===== CERTIFICATE MODAL PREVIEW =====
function openCertModal(imageSrc, title) {
  const modal = document.createElement("div");
  modal.className = "cert-modal";
  modal.innerHTML = `
    <div class="cert-modal-content">
      <span class="cert-modal-close" onclick="closeCertModal()">&times;</span>
      <img src="${imageSrc}" alt="${title}" />
      <p>${title}</p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeCertModal();
    }
  });
}

function closeCertModal() {
  const modal = document.querySelector(".cert-modal");
  if (modal) {
    modal.remove();
  }
}

// ===== EXPERIENCE MODAL PREVIEW =====
function openExpModal(imageSrc, title) {
  const modal = document.createElement("div");
  modal.className = "exp-modal";
  modal.innerHTML = `
    <div class="exp-modal-content">
      <span class="exp-modal-close" onclick="closeExpModal()">&times;</span>
      <img src="${imageSrc}" alt="${title}" />
      <p>${title}</p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeExpModal();
    }
  });
}

function closeExpModal() {
  const modal = document.querySelector(".exp-modal");
  if (modal) {
    modal.remove();
  }
}

// Jalankan saat DOM sudah siap
document.addEventListener("DOMContentLoaded", () => {
  const certsContainer = document.querySelector(".certificates");
  const expContainer = document.querySelector(".experience-list");

  if (certsContainer) {
    renderCertificates();
  }

  if (expContainer) {
    renderExperience();
  }
});
