(function() {
  emailjs.init("GGjnh6b9NIXEn1F7X"); 
})();

function sendMail(e) {
  e.preventDefault();

  const params = {
    name: document.querySelector('[name=name]').value,
    email: document.querySelector('[name=email]').value,
    subject: document.querySelector('[name=subject]').value,
    message: document.querySelector('[name=message]').value
  };

  emailjs.send("service_gdx7cpp", "template_dybct3f", params)
    .then(() => {
      alert("Pesan berhasil dikirim!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      alert("Gagal mengirim pesan: " + error.text);
    });
}