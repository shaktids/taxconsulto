const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

const testimonials = Array.from(document.querySelectorAll(".testimonial"));
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
let testimonialIndex = 0;

function showTestimonial(index) {
  if (!testimonials.length) return;
  testimonials.forEach((item) => item.classList.remove("active"));
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  testimonials[testimonialIndex].classList.add("active");
}

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => showTestimonial(testimonialIndex - 1));
  nextButton.addEventListener("click", () => showTestimonial(testimonialIndex + 1));
  setInterval(() => showTestimonial(testimonialIndex + 1), 6000);
}

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;
    item.classList.toggle("open");
  });
});

document.querySelectorAll(".lead-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector(".form-note");
    if (note) {
      note.textContent = "Thank you. Your enquiry is ready to be connected with TaxConsulto.com.";
    }
    form.reset();
  });
});

// Dynamic Contact Info Injection from config.js
(function injectContactInfo() {
  if (typeof CONFIG === "undefined") return;

  // 1. Update text nodes for phone
  document.querySelectorAll('[data-contact="phone"]').forEach((el) => {
    el.textContent = CONFIG.phoneNumber;
  });

  // 2. Update tel link hrefs
  document.querySelectorAll('[data-contact="phone-link"]').forEach((el) => {
    el.href = `tel:+91${CONFIG.phoneNumber}`;
  });

  // 3. Update text nodes for email
  document.querySelectorAll('[data-contact="email"]').forEach((el) => {
    el.textContent = CONFIG.emailAddress;
  });

  // 4. Update mailto link hrefs
  document.querySelectorAll('[data-contact="email-link"]').forEach((el) => {
    el.href = `mailto:${CONFIG.emailAddress}`;
  });

  // 5. Update WhatsApp link hrefs
  document.querySelectorAll('[data-contact="whatsapp-link"]').forEach((el) => {
    el.href = CONFIG.whatsappLink;
  });

  // 6. Update JSON-LD structured schema metadata
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (schemaScript) {
    try {
      const data = JSON.parse(schemaScript.textContent);
      if ("telephone" in data) data.telephone = `+91${CONFIG.phoneNumber}`;
      if ("email" in data) data.email = CONFIG.emailAddress;
      schemaScript.textContent = JSON.stringify(data, null, 2);
    } catch (e) {
      console.warn("Could not parse or update JSON-LD schema:", e);
    }
  }

  // 7. Update meta description content containing phone numbers
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = metaDesc.content.replace(/779000\d{4}/g, CONFIG.phoneNumber);
  }
})();

