//  Multy langSwitch //
const translations = {
  id: {
    home: "Beranda",
    about: "Tentang",
    resume: "Riwayat",
    contact: "Kontak",
    greeting: "Hai! Panggil aku Rara",
    intro: "Pekerja profesional dengan semangat tinggi dan pengalaman di bidang pelayanan pelanggan & retail. Aku percaya bahwa pelayanan terbaik dimulai dari sikap ramah dan kerja tim yang solid.",
    download_cv: "Unduh CV",
    about_title: "Tentang",
    about_sub: "Semua Tentang Saya",
    about_nama: "Aku Suratih Purwasih",
    about_desc1: "Berpengalaman di bidang pelayanan pelanggan, retail, F&B, housekeeping, dan produksi. Terbiasa menjaga kebersihan, kerapihan, serta mendukung operasional kerja sesuai SOP.",
    about_desc2: "Memiliki kemampuan komunikasi yang baik, mampu bekerja dalam tim maupun individu, serta cepat beradaptasi dengan lingkungan kerja baru.",
    about_born: "Tanggal Lahir:",
    about_flag: "Kewarganegaraan:",
    about_phone: "Telepon:",
    about_address: "Alamat:",
    resume_title: "Riwayat Saya",
    resume_sub: "Berikut Pengalaman dan Riwayat Pendidikan Saya",
    resume_exp: "PENGALAMAN",
    resume_educ: "PENDIDIKAN",
    contact_title: "Hubungi Saya",
    contact_sub: "Jangan ragu untuk meninggalkan pesan",
    contact_button: "Kirim Sekarang",
    educ_jurusan: "Jurusan Rekayasa Perangkat Lunak",
    job1: "Pramuniaga | Grand Swalayan",
    job2: "Staff Produksi | PT Venus Prima Sentosa",
    exp1: `- Memberikan pelayanan ramah dan efisien kepada pelanggan.
                - Menyajikan dan melakukan plating pesanan sesuai SOP.
                - Memastikan ketersediaan menu dan menjaga kebersihan outlet.`,
    exp2: `- Menjaga kebersihan area kerja dan peralatan produksi.
                - Menyiapkan bahan dan mengoperasikan peralatan produksi.
				- Membuat roti, menghias, dan menambahkan topping sesuai prosedur.`,
    exp3: `- Menawarkan, mempromosikan, dan menjelaskan produk kepada pelanggan.
				- Menjaga kebersihan rak dan area penjualan.
				- Meningkatkan penjualan melalui komunikasi persuasif.`,
    exp4: `- Melayani pelanggan dan membantu menemukan produk yang dicari.
				- Menata dan mendisplay produk agar terlihat rapi dan menarik.
				- Mengecek stok barang secara berkala.`,
    exp5: `- Mempersiapkan seluruh fasilitas ruang apartement yang akan ditempati.
				- Melayani kebutuhan pengunjung.
				- Mencatat barang yang hilang atau rusak untuk proses penggantian komponen baru di setiap kamar.`,
    contact_info_address: "Alamat",
    contact_info_phone: "Telepon",
  },
  en: {
    home: "Home",
    about: "About",
    resume: "Resume",
    contact: "Contact",
    greeting: "Hi! Call Me Rara",
    intro: "A highly motivated professional with experience in customer service and retail. I believe great service starts with a friendly attitude and strong teamwork.",
    download_cv: "Download CV",
    about_title: "About",
    about_sub: "There Is All About Me",
    about_nama: "I'm Suratih Purwasih",
    about_desc1: "Experienced in customer service, retail, F&B, housekeeping, and production. Skilled at maintaining cleanliness, order, and supporting operations according to SOP.",
    about_desc2: "Possess strong communication skills, able to work individually or in teams, and quickly adapt to new work environments.",
    about_born: "Date of Birth:",
    about_flag: "Nationality:",
    about_phone: "Phone:",
    about_address: "Address:",
    resume_title: "My Resume",
    resume_sub: "Here’s My Experience and Education History",
    resume_exp: "EXPERIENCE",
    resume_educ: "EDUCATION",
    contact_title: "Get In Touch",
    contact_sub: "Feel free to drop me a line",
    contact_button: "Contact Now",
    educ_jurusan: "Software Engineering",
    job1: "Shop Assistant | Grand Swalayan",
    job2: "Production Staff | PT Venus Prima Sentosa",
    exp1: `- Provide friendly and efficient service to customers.
                - Serve and plate orders according to SOP.
                - Ensure menu availability and maintain outlet cleanliness.`,
    exp2: `- Maintain cleanliness of the work area and production equipment.
                - Prepare ingredients and operate production equipment.
                - Make bread, decorate, and add toppings according to procedures.`,
    exp3: `- Offer, promote, and explain products to customers.
                - Maintain the cleanliness of shelves and the sales area.
                - Increase sales through persuasive communication.`,
    exp4: `- Serve customers and assist them in finding the desired products.
                - Arrange and display products to look neat and attractive.
                - Check product stock regularly.`,
    exp5: `- Prepare all apartment room facilities before occupancy.
                - Serve guests needs.
                - Record any lost or damaged items for the replacement process of new components in each room.`,
    contact_info_address: "Address",
    contact_info_phone: "Phone",
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.getElementById("lang-switch");
  const labels = document.querySelectorAll(".lang-label");

  const setLanguage = (lang) => {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });

    labels.forEach(label => {
      label.classList.toggle("active", label.dataset.lang === lang);
    });
  };

//   Default ---> Inggris   //
  setLanguage("en");

//   Event toggle   //
  langSwitch.addEventListener("change", function() {
    const lang = this.checked ? "id" : "en";
    setLanguage(lang);
  });
});

