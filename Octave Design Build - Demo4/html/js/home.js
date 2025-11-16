// Home page functionality

document.addEventListener('DOMContentLoaded', function() {
  // Hero images
  const heroImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80',
  ];
  
  // Initialize hero slider
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider && typeof jQuery !== 'undefined' && jQuery.fn.slick) {
    heroSlider.innerHTML = heroImages.map((image, index) => `
      <div class="hero-slide">
        <div class="hero-background" style="background-image: url(${image})">
          <div class="hero-overlay">
            <div class="hero-content">
              <h1 class="hero-title fade-in-up">Harmony in Structure</h1>
              <p class="hero-tagline fade-in-up" style="animation-delay: 0.2s">Design, Build, Inspire</p>
              <div class="fade-in-up" style="animation-delay: 0.4s">
                <a href="contact.html" class="btn btn-hero">Launch Your Vision</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    
    jQuery(heroSlider).slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear',
      pauseOnHover: true,
      arrows: true,
      adaptiveHeight: false,
    });
  }
  
  // Services data
  const services = [
    {
      icon: '📐',
      title: 'Design',
      description: 'Custom architectural designs that blend innovation with functionality.',
      link: 'services.html',
    },
    {
      icon: '🏗️',
      title: 'Build',
      description: 'Expert construction management from foundation to finish.',
      link: 'services.html',
    },
    {
      icon: '🔨',
      title: 'Renovation',
      description: 'Transform existing spaces with precision and style.',
      link: 'services.html',
    },
    {
      icon: '💡',
      title: 'Consulting',
      description: 'Strategic guidance for your construction projects.',
      link: 'services.html',
    },
  ];
  
  // Render services with fade-in animation
  const servicesContainer = document.getElementById('services-container');
  if (servicesContainer) {
    servicesContainer.innerHTML = services.map((service, index) => `
      <div class="col-md-6 col-lg-3 fade-in-up" style="animation-delay: ${index * 0.1}s">
        <div class="service-card">
          <div class="service-icon">${service.icon}</div>
          <h4 class="service-title">${service.title}</h4>
          <p class="service-description">${service.description}</p>
          <a href="${service.link}" class="service-link">Dive In →</a>
        </div>
      </div>
    `).join('');
  }
  
  // Featured projects
  const featuredProjects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'A sleek residential complex featuring sustainable materials and innovative design.',
    },
    {
      id: 2,
      title: 'Commercial Office Tower',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      description: 'State-of-the-art commercial space with cutting-edge technology integration.',
    },
    {
      id: 3,
      title: 'Luxury Penthouse Renovation',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Complete transformation of a luxury penthouse with premium finishes.',
    },
  ];
  
  // Render projects with CSS Grid masonry
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = featuredProjects.map((project, index) => `
      <div class="project-card fade-in-up" style="animation-delay: ${index * 0.1}s">
        <div class="project-image-wrapper">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="project-image"
            loading="lazy"
          />
          <div class="project-overlay">
            <span class="project-type">${project.type}</span>
          </div>
        </div>
        <div class="project-content">
          <h4 class="project-title">${project.title}</h4>
          <p class="project-description">${project.description}</p>
          <a href="portfolio.html" class="project-link">View Details →</a>
        </div>
      </div>
    `).join('');
  }
  
  // Animated counters with Intersection Observer
  const statsSection = document.getElementById('stats-section');
  let statsInView = false;
  const counters = { projects: 0, years: 0, satisfaction: 0 };
  
  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsInView) {
            statsInView = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    observer.observe(statsSection);
  }
  
  function animateCounters() {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const animateCounter = (target, key) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counters[key] = Math.round(target);
          updateStatsDisplay();
          clearInterval(timer);
        } else {
          counters[key] = Math.round(current);
          updateStatsDisplay();
        }
      }, interval);
    };
    
    animateCounter(50, 'projects');
    animateCounter(10, 'years');
    animateCounter(100, 'satisfaction');
  }
  
  function updateStatsDisplay() {
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="col-md-4 fade-in-up">
          <div class="stat-card">
            <div class="stat-number">${counters.projects}+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
        </div>
        <div class="col-md-4 fade-in-up" style="animation-delay: 0.2s">
          <div class="stat-card">
            <div class="stat-number">${counters.years}</div>
            <div class="stat-label">Years Experience</div>
          </div>
        </div>
        <div class="col-md-4 fade-in-up" style="animation-delay: 0.4s">
          <div class="stat-card">
            <div class="stat-number">${counters.satisfaction}%</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
        </div>
      `;
    }
  }
  
  // Initial stats display
  updateStatsDisplay();
  
  // CSS Grid masonry setup
  const style = document.createElement('style');
  style.textContent = `
    .masonry-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    @media (max-width: 992px) {
      .masonry-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }
    @media (max-width: 768px) {
      .masonry-grid {
        grid-template-columns: 1fr;
      }
    }
    .fade-in-up {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.6s ease-out forwards;
    }
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
});

