/* ================================================================
   OCTAVE DESIGN AND BUILD - GLOBAL JAVASCRIPT
   Handles: Navigation, Interactivity, Forms, Animations
   ================================================================ */

// ==================== MOBILE NAVIGATION TOGGLE ====================
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
});

// ==================== ADJUST HERO PADDING TO HEADER HEIGHT ====================
function adjustHeroPadding() {
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 60;
  // set a CSS variable so styles can use it (fallbacks still present in CSS)
  document.documentElement.style.setProperty('--hero-top-padding', headerHeight + 'px');
}

// Ensure hero padding matches header height on load and resize
document.addEventListener('DOMContentLoaded', function() {
  adjustHeroPadding();
});

window.addEventListener('resize', function() {
  adjustHeroPadding();
});

// ==================== HEADER SCROLL EFFECT ====================
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== ANIMATED COUNTERS ====================
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + (element.dataset.suffix || '');
  }, 16);
}

function startCountersIfVisible() {
  const statItems = document.querySelectorAll('.stat-item h3');
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.textContent);
        const suffix = entry.target.textContent.replace(/\d/g, '').trim();
        entry.target.dataset.suffix = suffix;
        animateCounter(entry.target, target);
        entry.target.classList.add('counted');
      }
    });
  }, observerOptions);

  statItems.forEach(item => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', startCountersIfVisible);

// ==================== ACCORDION FUNCTIONALITY ====================
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const body = this.nextElementSibling;
      const isActive = body.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.accordion-body.active').forEach(item => {
        item.classList.remove('active');
        item.previousElementSibling.classList.remove('active');
      });

      // Open clicked item if it wasn't already open
      if (!isActive) {
        body.classList.add('active');
        this.classList.add('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);

// ==================== CAROUSEL FUNCTIONALITY ====================
function initCarousel() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const container = carousel.querySelector('.carousel-container');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    if (!container || !prevBtn || !nextBtn) return;

    const itemWidth = container.querySelector('.carousel-item').offsetWidth + 32; // gap = 2rem

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });
  });
}

document.addEventListener('DOMContentLoaded', initCarousel);

// ==================== LAZY LOADING IMAGES ====================
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

// ==================== FORM VALIDATION ====================
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;
      const formData = new FormData(this);

      // Clear previous errors
      this.querySelectorAll('.form-error').forEach(error => error.remove());

      // Validate required fields
      this.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          showFieldError(field, `${field.name} is required.`);
        }
      });

      // Validate email
      const emailField = this.querySelector('[type="email"]');
      if (emailField && emailField.value.trim()) {
        if (!isValidEmail(emailField.value)) {
          isValid = false;
          showFieldError(emailField, 'Please enter a valid email address.');
        }
      }

      // Validate phone
      const phoneField = this.querySelector('[type="tel"]');
      if (phoneField && phoneField.value.trim()) {
        if (!isValidPhone(phoneField.value)) {
          isValid = false;
          showFieldError(phoneField, 'Please enter a valid phone number.');
        }
      }

      // Check honeypot
      const honeypot = this.querySelector('[name="website"]');
      if (honeypot && honeypot.value.trim()) {
        console.log('Honeypot triggered');
        return;
      }

      if (isValid) {
        handleFormSubmit(this, formData);
      }
    });
  });
}

function showFieldError(field, message) {
  const error = document.createElement('div');
  error.className = 'form-error';
  error.textContent = message;
  field.parentElement.appendChild(error);
  field.style.borderColor = '#E74C3C';
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^\d{10,}$/;
  return re.test(phone.replace(/\D/g, ''));
}

function handleFormSubmit(form, formData) {
  // For demo, show success message
  const successMsg = document.createElement('div');
  successMsg.className = 'form-success';
  successMsg.textContent = 'Thank you! We\'ll be in touch soon.';
  form.insertBefore(successMsg, form.firstChild);

  // Reset form
  form.reset();

  // Remove success message after 5 seconds
  setTimeout(() => successMsg.remove(), 5000);

  // In production, send data to server:
  // fetch('/api/contact', {
  //   method: 'POST',
  //   body: formData
  // }).then(response => response.json())
  //   .then(data => {
  //     // Handle response
  //   });
}

document.addEventListener('DOMContentLoaded', initFormValidation);

// ==================== MODAL FUNCTIONALITY ====================
function initModal() {
  const modals = document.querySelectorAll('.modal');

  // Close modal when close button is clicked
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.classList.remove('active');
    });
  });

  // Close modal when clicking outside content
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initModal);

// ==================== PORTFOLIO FILTER ====================
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.dataset.filter;

      // Filter items
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.category === filterValue) {
          item.style.display = 'block';
          setTimeout(() => item.classList.add('show'), 10);
        } else {
          item.classList.remove('show');
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initPortfolioFilter);

// ==================== OPEN PROJECT MODAL ====================
window.openProjectModal = function(projectId) {
  const modal = document.getElementById(projectId);
  if (modal) {
    modal.classList.add('active');
  }
};

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ==================== UTILITY: ACTIVE NAV LINK ====================
function updateActiveNavLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === '/' && currentPage === '')) {
      link.style.color = '#E74C3C';
    }
  });
}

document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in-out';
