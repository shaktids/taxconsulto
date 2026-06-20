// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Sticky Header
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adjust scroll threshold as needed
                header.classList.add('bg-white', 'shadow-lg');
                header.classList.remove('bg-transparent', 'shadow-none');
            } else {
                header.classList.remove('bg-white', 'shadow-lg');
                header.classList.add('bg-transparent', 'shadow-none');
            }
        });
    }

    // Testimonial Carousel (remains the same)
    const testimonialsData = [
        {
            name: "Priya Sharma",
            role: "Startup Founder",
            quote: "TaxConsulto made my company registration seamless and stress-free. Their team is highly professional and knowledgeable!"
        },
        {
            name: "Rajesh Kumar",
            role: "Small Business Owner",
            quote: "I've been using their GST filing services for years. Always accurate, always on time. Highly recommended!"
        },
        {
            name: "Anjali Singh",
            role: "Freelancer",
            quote: "Navigating income tax was daunting, but TaxConsulto's experts simplified everything. Excellent support!"
        }
    ];

    const testimonialQuote = document.getElementById('testimonial-quote');
    const testimonialName = document.getElementById('testimonial-name');
    const testimonialRole = document.getElementById('testimonial-role');
    const testimonialButtonsContainer = document.getElementById('testimonial-buttons');

    let currentTestimonialIndex = 0;

    function updateTestimonial() {
        const testimonial = testimonialsData[currentTestimonialIndex];
        if (testimonialQuote) testimonialQuote.textContent = `"${testimonial.quote}"`;
        if (testimonialName) testimonialName.textContent = testimonial.name;
        if (testimonialRole) testimonialRole.textContent = testimonial.role;

        // Update button active state
        if (testimonialButtonsContainer) {
            Array.from(testimonialButtonsContainer.children).forEach((button, index) => {
                if (index === currentTestimonialIndex) {
                    button.classList.add('bg-gold-300');
                    button.classList.remove('bg-white/30');
                } else {
                    button.classList.remove('bg-gold-300');
                    button.classList.add('bg-white/30');
                }
            });
        }
    }

    function createTestimonialButtons() {
        if (testimonialButtonsContainer) {
            testimonialButtonsContainer.innerHTML = ''; // Clear existing buttons
            testimonialsData.forEach((item, index) => {
                const button = document.createElement('button');
                button.className = `focus-ring h-3 w-8 rounded-full transition ${index === currentTestimonialIndex ? "bg-gold-300" : "bg-white/30"}`;
                button.type = "button";
                button.setAttribute('aria-label', `Show testimonial from ${item.name}`);

                button.addEventListener('click', () => {
                    currentTestimonialIndex = index;
                    updateTestimonial();
                });
                testimonialButtonsContainer.appendChild(button);
            });
        }
    }

    if (testimonialQuote && testimonialName && testimonialRole && testimonialButtonsContainer) {
        createTestimonialButtons();
        updateTestimonial();
    }

    // FAQ Accordion (remains the same)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        if (header && content && icon) {
            header.addEventListener('click', () => {
                const isOpen = content.classList.contains('hidden');
                
                // Close all other open FAQs
                faqItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherItem !== item && !otherContent.classList.contains('hidden')) {
                        otherContent.classList.add('hidden');
                        otherIcon.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>'; // Plus icon
                    }
                });

                // Toggle current FAQ
                content.classList.toggle('hidden');
                if (isOpen) {
                    icon.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path></svg>'; // Minus icon
                } else {
                    icon.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>'; // Plus icon
                }
            });
        }
    });

    // --- Populate Contact Information from JSON ---
    async function fetchAndPopulateContactInfo() {
        try {
            const response = await fetch('/data/contact.json'); // Path to your JSON file
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const contactData = await response.json();

            // Phone Number
            const phoneElements = document.querySelectorAll('[data-contact="phone"]');
            phoneElements.forEach(el => {
                el.textContent = contactData.phoneNumber;
                if (el.tagName === 'A') {
                    el.href = `tel:+91${contactData.phoneNumber}`;
                }
            });

            // Email Address
            const emailElements = document.querySelectorAll('[data-contact="email"]');
            emailElements.forEach(el => {
                el.textContent = contactData.emailAddress;
                if (el.tagName === 'A') {
                    el.href = `mailto:${contactData.emailAddress}`;
                }
            });

            // WhatsApp Link
            const whatsappElements = document.querySelectorAll('[data-contact="whatsapp"]');
            whatsappElements.forEach(el => {
                if (el.tagName === 'A') {
                    el.href = contactData.whatsappLink;
                }
            });
        } catch (error) {
            console.error('Error fetching or populating contact info:', error);
        }
    }

    fetchAndPopulateContactInfo(); // Call on DOMContentLoaded

});

// Contact Form Submission (remains the same)
document.getElementById('contactForm')?.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const formData = new FormData(form);
    const formStatus = document.getElementById('formStatus');

    formStatus.textContent = 'Sending...';
    formStatus.className = 'text-center mt-4 text-gray-600';

    try {
        const response = await fetch('/api/send-email', { // Endpoint for your Pages Function
            method: 'POST',
            body: formData, // FormData object handles content-type automatically
        });

        const result = await response.json();

        if (response.ok) {
            formStatus.textContent = result.message || 'Message sent successfully!';
            formStatus.className = 'text-center mt-4 text-green-600';
            form.reset(); // Clear the form
        } else {
            formStatus.textContent = result.error || 'Failed to send message. Please try again.';
            formStatus.className = 'text-center mt-4 text-red-600';
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        formStatus.textContent = 'An unexpected error occurred. Please try again later.';
        formStatus.className = 'text-center mt-4 text-red-600';
    }
});
