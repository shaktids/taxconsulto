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
