(function () {
  const translations = {
    "Portofolio Candra": "Candra Portfolio",
    "Portofolio": "Portfolio",
    "Detail Layanan": "Service Details",
    "Tentang": "About",
    "Proyek": "Projects",
    "Sertifikat": "Certificates",
    "Pengalaman": "Experience",
    "Beranda": "Home",
    "Hubungi": "Contact",
    "Unduh CV": "Download CV",
    "Hai, Saya": "Hi, I am",
    "Web Developer dan UI/UX Designer": "Web Developer and UI/UX Designer",
    "Menggabungkan desain antarmuka intuitif dengan pengembangan web yang responsif, efficient dan scalable. Untuk menghasilkan solusi digital siap pakai.": "Combining intuitive interface design with responsive, efficient, and scalable web development to deliver ready-to-use digital solutions.",
    "Hubungi Saya": "Contact Me",
    "Tentang Saya": "About Me",
    "Saya adalah seorang Web Developer sekaligus UI/UX Designer yang berfokus pada menciptakan pengalaman digital yang fungsional dan memikat. Dengan latar belakang di bidang desain antarmuka dan pengembangan web, saya mampu menggabungkan estetika visual dengan performa teknis untuk membangun website dan aplikasi yang responsif, intuitif, dan user-friendly.": "I am a Web Developer and UI/UX Designer focused on creating functional and engaging digital experiences. With a background in interface design and web development, I combine visual aesthetics with technical performance to build responsive, intuitive, and user-friendly websites and applications.",
    "Layanan": "Services",
    "Mendesain dan mengembangkan website dengan fokus pada pengalaman pengguna dan performa maksimal.": "Designing and developing websites with a focus on user experience and maximum performance.",
    "Web Development": "Web Development",
    "UI/UX Design": "UI/UX Design",
    "Database Development": "Database Development",
    "Membangun website yang responsif, cepat, dan mudah diakses dari berbagai perangkat. Menggunakan teknologi modern untuk menciptakan aplikasi web yang handal dan scalable.": "Building responsive, fast, and accessible websites for all devices. Using modern technologies to create reliable and scalable web applications.",
    "Merancang antarmuka yang intuitif dan menarik, berfokus pada pengalaman pengguna yang nyaman dan efisien. Membuat prototipe interaktif untuk memastikan desain sesuai kebutuhan pengguna dan tujuan bisnis.": "Designing intuitive and attractive interfaces focused on a comfortable and efficient user experience. Creating interactive prototypes to align the design with user needs and business goals.",
    "Mendesain dan mengelola database yang terstruktur dengan baik, memastikan data tersimpan aman, mudah diakses, dan terintegrasi dengan aplikasi web untuk performa optimal.": "Designing and managing well-structured databases to keep data secure, accessible, and integrated with web applications for optimal performance.",
    "Detail": "Details",
    "Proyek yang telah saya kerjakan.": "Projects I have worked on.",
    "Sertifikat": "Certificates",
    "Pengalaman kerja yang telah saya jalani.": "My professional experience.",
    "Hubungi Saya": "Contact Me",
    "Kontak saya dengan mudah dan cepat melalui formulir ini.": "Contact me easily and quickly through this form.",
    "Nama": "Name",
    "Nomor Telepon": "Phone Number",
    "Pesan": "Message",
    "Kirim": "Send",
    "Mari Terhubung": "Let's Connect",
    "Ikuti saya di media sosial untuk saling berbagi dan terhubung lebih lanjut.": "Follow me on social media to share and connect further.",
    "Social Media": "Social Media",
    "Portofolio & Karya": "Portfolio & Work",
    "Halaman": "Page",
    "Lihat": "View",
    "Preview": "Preview",
    "Kembali": "Back",
    "Detail Layanan": "Service Details",
    "Teknologi yang digunakan:": "Technologies used:",
    "Pesan Sekarang": "Order Now",
    "Order Sekarang": "Order Now",
    "Order Form": "Order Form",
    "Isi kolom di bawah ini, jika anda ingin memesan": "Fill in the fields below if you would like to place an order",
    "Deskripsi": "Description",
    "Semua kolom harus diisi.": "All fields are required.",
    "Mengirim...": "Sending...",
    "Berhasil!": "Success!",
    "Gagal!": "Failed!",
    "Tidak bisa mengirim pesan.": "Unable to send the message.",
    "Tidak bisa membuat pesanan. \\nSilahkan coba lagi": "Unable to place the order. \\nPlease try again",
    "Berhasil membuat pesanan. Terima kasih telah memesan!\\n Pesanan akan segera diproses max 3 jam setelah anda mengirim form ini.": "Order placed successfully. Thank you!\\n Your order will be processed within 3 hours.",
    "Sertifikasi Oracle": "Oracle Certification",
    "Sertifikasi AWS": "AWS Certification",
    "Sertifikasi NetAcad": "NetAcad Certification",
    "Media Catcher adalah sebuah platform website yang berfokus untuk mempermudah pengguna dalam menyimpan dan berbagi berbagai jenis konten media. Dengan Media Catcher, pengguna dapat menyimpan dan berbagi berbagai konten media secara mudah dan intuitif.": "Media Catcher is a website platform that makes it easier for users to save and share different types of media content. Users can save and share media easily and intuitively.",
    "Platform blog dan review serbaguna yang memberikan ulasan singkat, padat, namun informatif mengenai berbagai hal.": "A versatile blog and review platform providing concise yet informative reviews on a variety of topics.",
    "Platform undangan digital yang memudahkan pengguna membuat dan membagikan undangan untuk berbagai acara secara online. Dengan desain yang elegan dan fitur interaktif, tamu dapat menerima RSVP dengan mudah.": "A digital invitation platform that makes it easy to create and share invitations for events online. Its elegant design and interactive features make RSVP easy for guests.",
    "Platform website yang menyediakan informasi tentang film-film Studio Ghibli seperti penjelasan singkat, karakter, dan trivia menarik lainnya bagi para penggemar Studio Ghibli.": "A website providing Studio Ghibli film information, including summaries, characters, and interesting trivia for fans.",
    "Tapilan Dashboard admin yang dirancang untuk memudahkan manajemen data dan analitik bagi pengguna bisnis. Dengan antarmuka yang intuitif, pengguna dapat dengan mudah mengakses berbagai fitur seperti laporan, grafik, dan pengaturan sistem.": "An admin dashboard designed to simplify data management and analytics for business users. Its intuitive interface provides easy access to reports, charts, and system settings.",
    "Perfumist adalah sebuah platform website yang berfokus untuk menjual berbagai jenis perfume. Dengan Perfumist, pengguna dapat mencari dan membeli berbagai jenis perfume secara mudah dan intuitif.": "Perfumist is a website platform focused on selling different types of perfume. Users can search for and buy perfumes easily and intuitively.",
    "Aplikasi ini berfungsi untuk menampilkan prakiraan cuaca untuk beberapa kota di Indonesia. Pengguna dapat melihat informasi seperti suhu, kelembaban, cuaca, dan kecepatan angin.": "This application displays weather forecasts for several cities in Indonesia, including temperature, humidity, conditions, and wind speed.",
    "Aplikasi untuk memutar musik dengan antarmuka modern dan user-friendly.": "A music player application with a modern and user-friendly interface.",
    "Platform undangan digital yang memudahkan pengguna membagikan undangan untuk acara secara online. Dengan desain yang elegan dan fitur interaktif, tamu dapat menerima RSVP dengan mudah.": "A digital invitation platform that makes it easy to share event invitations online. Its elegant design and interactive features make RSVP easy for guests.",
    "Mendesain dan mengimplementasikan database yang efisien dan aman untuk mendukung aplikasi web dan bisnis digital. Melakukan optimasi query, pengaturan struktur data yang tepat, serta integrasi dengan backend untuk memastikan data dapat diakses dengan cepat dan akurat. Juga memastikan keamanan dan backup data agar sistem tetap andal dan terhindar dari kehilangan data.": "Designing and implementing efficient and secure databases for web applications and digital businesses. Optimizing queries, structuring data properly, and integrating with backends for fast and accurate access while maintaining security and backups.",
    "Membangun aplikasi web yang responsif dan optimal untuk berbagai perangkat, mulai dari desktop hingga mobile. Menggunakan teknologi terbaru seperti HTML5, CSS3, JavaScript, dan framework populer untuk memastikan website cepat, aman, dan mudah dikembangkan lebih lanjut. Fokus pada clean code dan best practice agar hasil akhir mudah dipelihara dan scalable sesuai kebutuhan bisnis.": "Building responsive and optimized web applications for desktop and mobile. Using technologies such as HTML5, CSS3, JavaScript, and popular frameworks to deliver fast, secure, maintainable, and scalable results.",
    "Merancang pengalaman pengguna (user experience) yang intuitif dan antarmuka (user interface) yang menarik secara visual. Proses desain mencakup riset pengguna, pembuatan wireframe, prototipe interaktif, dan pengujian usability untuk memastikan produk digital tidak hanya enak dilihat tetapi juga mudah digunakan dan efektif memenuhi kebutuhan pengguna dan bisnis.": "Designing intuitive user experiences and visually appealing interfaces. The process includes user research, wireframes, interactive prototypes, and usability testing to ensure products are attractive, easy to use, and effective for users and businesses.",
    "Mengembangkan website responsif menggunakan Laravel dan JavaScript. Merancang dan membuat design di Photoshop dan Figma.": "Developed responsive websites using Laravel and JavaScript. Designed and created visuals in Photoshop and Figma.",
    "Merancang antarmuka pengguna untuk aplikasi web dan mobile. Melakukan riset pengguna dan usability testing.": "Designed user interfaces for web and mobile applications. Conducted user research and usability testing.",
    "Menjadi staff welcoming party untuk mahasiswa baru di Himpunan Mahasiswa Informatika.": "Served as welcoming party staff for new students in the Informatics Student Association.",
    "Februari 2025 - Mei 2025": "February 2025 - May 2025",
    "Oktober 2025": "October 2025",
    "April 2024 - September 2024": "April 2024 - September 2024"
  };

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([indonesian, english]) => [english, indonesian])
  );
  let activeLanguage = "id";

  function translateAttributes(language, root = document) {
    const dictionary = language === "en" ? translations : reverseTranslations;
    root.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
      ["placeholder", "title", "aria-label"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value && dictionary[value]) {
          element.setAttribute(attribute, dictionary[value]);
        }
      });
    });
  }

  function translateTextNodes(root, language) {
    const dictionary = language === "en" ? translations : reverseTranslations;
    const elements = root.nodeType === Node.ELEMENT_NODE
      ? [root, ...root.querySelectorAll("*")]
      : [];
    elements.forEach((element) => {
      element.childNodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const text = node.nodeValue.trim();
        const normalizedText = text.replace(/\s+/g, " ");
        if (normalizedText && dictionary[normalizedText]) {
          node.nodeValue = node.nodeValue.replace(text, dictionary[normalizedText]);
        } else {
          const pageMatch = text.match(/^(Halaman|Page) (\d+) (dari|of) (\d+)$/);
          if (pageMatch) {
            const pageLabel = language === "en" ? "Page" : "Halaman";
            const separator = language === "en" ? "of" : "dari";
            node.nodeValue = node.nodeValue.replace(text, `${pageLabel} ${pageMatch[2]} ${separator} ${pageMatch[4]}`);
          }
        }
      });
    });
  }

  function applyLanguage(language) {
    const dictionary = language === "en" ? translations : reverseTranslations;
    activeLanguage = language;
    document.documentElement.lang = language === "en" ? "en" : "id";
    const currentTitle = document.title;
    if (dictionary[currentTitle]) {
      document.title = dictionary[currentTitle];
    }
    translateTextNodes(document.body, language);
    document.querySelectorAll("body *").forEach((element) => {
      element.childNodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const text = node.nodeValue.trim();
        const pageMatch = text.match(/^(Halaman|Page) (\d+) (dari|of) (\d+)$/);
        if (pageMatch) {
          const pageLabel = language === "en" ? "Page" : "Halaman";
          const separator = language === "en" ? "of" : "dari";
          node.nodeValue = node.nodeValue.replace(text, `${pageLabel} ${pageMatch[2]} ${separator} ${pageMatch[4]}`);
        }
      });
    });
    translateAttributes(language);
    document.querySelectorAll(".language-toggle-input").forEach((input) => {
      input.checked = language === "en";
    });
    localStorage.setItem("portfolio-language", language);
  }

  function initializeLanguage() {
    const savedLanguage = localStorage.getItem("portfolio-language") || "id";
    document.querySelectorAll(".language-toggle-input").forEach((input) => {
      input.addEventListener("change", () => {
        applyLanguage(input.checked ? "en" : "id");
      });
    });
    applyLanguage(savedLanguage);
    new MutationObserver((records) => {
      records.forEach(({ addedNodes }) => {
        addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            translateTextNodes(node, activeLanguage);
            translateAttributes(activeLanguage, node);
          }
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  document.addEventListener("DOMContentLoaded", initializeLanguage);
  window.addEventListener("load", () => applyLanguage(localStorage.getItem("portfolio-language") || "id"));
})();