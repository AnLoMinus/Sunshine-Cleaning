document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("userName").value;
      const email = document.getElementById("userEmail").value;
      const phone = document.getElementById("userPhone").value;
      const message = document.getElementById("userMessage").value;

      // Create WhatsApp message
      const whatsappMessage = `New Contact Request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;

      // Create WhatsApp URL (replace with your phone number)
      const whatsappUrl = `https://wa.me/972546922973?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Reset form
      contactForm.reset();
    });
  }

  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255,255,255,0.95)";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
      navbar.style.background = "rgba(255,255,255,0.9)";
      navbar.style.boxShadow = "none";
    }
  });
});
