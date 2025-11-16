// Home page functionality

document.addEventListener('DOMContentLoaded', function() {
  // Initialize hero slider
  if (typeof jQuery !== 'undefined' && jQuery.fn.slick) {
    jQuery('.hero-slider').slick({
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
      arrows: true
    });
  }
  
  // Services data
  const services = [
    {
      id: 1,
      title: 'Architectural Design',
      description: 'Custom plans that honor cultural sensitivity and modern innovation, with 3D modeling and sustainable principles.',
      icon: '🏛️',
      link: 'services.html#design'
    },
    {
      id: 2,
      title: 'Construction Management',
      description: 'Ethical oversight with transparent budgeting and seamless project coordination from concept to completion.',
      icon: '🏗️',
      link: 'services.html#construction'
    },
    {
      id: 3,
      title: 'Sustainable Builds',
      description: 'Eco-materials and green certifications, building in harmony with nature and stewardship values.',
      icon: '🌿',
      link: 'services.html#sustainable'
    },
    {
      id: 4,
      title: 'Renovations',
      description: 'Respectful updates that preserve heritage while introducing modern comfort and efficiency.',
      icon: '🔨',
      link: 'services.html#renovation'
    }
  ];
  
  // Render services
  const servicesContainer = document.getElementById('services-container');
  if (servicesContainer) {
    servicesContainer.innerHTML = services.map((service, index) => `
      <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card card-custom h-100 text-center">
          <div class="card-body">
            <div class="service-icon">${service.icon}</div>
            <h5 class="card-title mt-3">${service.title}</h5>
            <p class="card-text">${service.description}</p>
            <a href="${service.link}" class="btn btn-outline-primary-custom">
              Explore
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: 'Harmony Residence',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'A sustainable family home featuring passive solar design and traditional courtyard elements.',
      tech: 'Bamboo Frames + Solar Harmony'
    },
    {
      id: 2,
      title: 'Community Center',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      description: 'A modern community space blending contemporary architecture with cultural design motifs.',
      tech: 'Green Roof + Natural Ventilation'
    },
    {
      id: 3,
      title: 'Heritage Renovation',
      type: 'Renovation',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Thoughtful restoration preserving historical character while adding modern amenities.',
      tech: 'Restored Materials + Energy Efficiency'
    }
  ];
  
  // Render projects
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = featuredProjects.map((project, index) => `
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card card-custom project-card h-100">
          <div class="project-image-wrapper">
            <img 
              src="${project.image}" 
              class="card-img-top" 
              alt="${project.title}"
              loading="lazy"
            />
            <div class="project-type-badge">${project.type}</div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <p class="project-tech">
              <small class="text-muted">${project.tech}</small>
            </p>
            <a href="portfolio.html" class="btn btn-sm btn-primary-custom">
              View Details
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Stats data
  const stats = [
    { number: '50+', label: 'Projects of Harmony', icon: '🏆' },
    { number: '10', label: 'Years of Stewardship', icon: '📅' },
    { number: '100%', label: 'Mindful Satisfaction', icon: '✨' },
    { number: '95%', label: 'Sustainable Materials', icon: '🌱' }
  ];
  
  // Render stats
  const statsContainer = document.getElementById('stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = stats.map((stat, index) => `
      <div class="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="stat-card">
          <div class="stat-icon">${stat.icon}</div>
          <h3 class="stat-number">${stat.number}</h3>
          <p class="stat-label">${stat.label}</p>
        </div>
      </div>
    `).join('');
  }
});

