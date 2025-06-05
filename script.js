// ToggleMenu function
function toggleMenu() {
  const menu = document.querySelector(".mobile-nav-menu");
  const icon = document.querySelector(".mobile-nav-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Show loading state
      formStatus.textContent = "Sending your message...";
      formStatus.style.color = "#000";

      // Send email using EmailJS
      emailjs.sendForm("service_skgi545", "template_zhg2yke", contactForm).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          formStatus.textContent = "Message sent successfully!";
          formStatus.style.color = "green";
          contactForm.reset();

          // Hide status message after 5 seconds
          setTimeout(() => {
            formStatus.textContent = "";
          }, 5000);
        },
        function (error) {
          console.log("FAILED...", error);
          formStatus.textContent =
            "Failed to send message. Please email me directly at bobieansahdeligent@gmail.com";
          formStatus.style.color = "red";
        }
      );
    });
  }
});
