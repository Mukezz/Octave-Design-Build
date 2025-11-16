// Contact page functionality

document.addEventListener('DOMContentLoaded', function() {
  // FAQ data
  const faqs = [
    {
      question: 'How do you incorporate cultural values into your designs?',
      answer: 'We work closely with clients to understand their cultural preferences and values. This might include incorporating specific design elements, respecting privacy needs, creating spaces for community gathering, or using materials and colors that hold cultural significance. Every project is unique and tailored to our clients\' needs.'
    },
    {
      question: 'What makes your construction sustainable?',
      answer: 'We prioritize eco-friendly materials, energy-efficient systems, and waste reduction. Our projects often include renewable energy sources, water conservation features, and sustainable material sourcing. We aim for LEED certification where applicable and always consider the environmental impact of our choices.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A residential renovation might take 3-6 months, while a new commercial build could take 12-24 months. We provide detailed timelines during the initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'Do you work with existing architects or designers?',
      answer: 'Yes, we collaborate with external architects and designers when needed. We believe in building strong partnerships to deliver the best results for our clients.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve the Greater Toronto Area and surrounding regions. However, we\'re open to discussing projects in other locations. Contact us to see if we can assist with your project.'
    },
    {
      question: 'How do you ensure transparency in budgeting?',
      answer: 'We provide detailed, itemized estimates and maintain open communication about costs throughout the project. You\'ll receive regular budget updates and we\'ll discuss any changes before they\'re implemented. No surprises, just honest, transparent service.'
    }
  ];
  
  // Render FAQs
  const faqContainer = document.getElementById('faqAccordion');
  if (faqContainer) {
    faqContainer.innerHTML = faqs.map((faq, index) => `
      <div class="accordion-item" data-aos="fade-up" data-aos-delay="${index * 50}">
        <h3 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq${index}"
            aria-expanded="false"
            aria-controls="faq${index}"
          >
            ${faq.question}
          </button>
        </h3>
        <div id="faq${index}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Form handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        projectType: document.getElementById('projectType').value,
        message: document.getElementById('message').value.trim()
      };
      
      // Validation
      if (!formData.name || !formData.email || !formData.message) {
        showFormStatus('error', 'Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showFormStatus('error', 'Please enter a valid email address.');
        return;
      }
      
      // Phone validation (if provided)
      if (formData.phone) {
        const phoneRegex = /^[+]?[0-9\s\-().]{10,}$/;
        if (!phoneRegex.test(formData.phone)) {
          showFormStatus('error', 'Please enter a valid phone number.');
          return;
        }
      }
      
      // Simulate form submission
      console.log('Form submitted:', formData);
      
      // Show success message
      showFormStatus('success', 'Thank you! Your message has been sent. We will get back to you soon.');
      showSuccessModal();
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Show form status
  function showFormStatus(type, message) {
    if (formStatus) {
      formStatus.innerHTML = `
        <div class="alert ${type === 'success' ? 'alert-success' : 'alert-danger'}">
          ${message}
        </div>
      `;
      
      // Scroll to status
      formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  
  // Show success modal
  window.showSuccessModal = function() {
    const modal = document.getElementById('success-modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  };
  
  // Close success modal
  window.closeSuccessModal = function() {
    const modal = document.getElementById('success-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  };
  
  // Close modal on background click
  const successModal = document.getElementById('success-modal');
  if (successModal) {
    successModal.addEventListener('click', function(e) {
      if (e.target === successModal) {
        closeSuccessModal();
      }
    });
  }
});

