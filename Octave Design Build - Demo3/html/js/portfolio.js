// Portfolio page functionality

document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    {
      id: 1,
      title: 'Harmony Residence',
      type: 'residential',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'A sustainable family home featuring passive solar design and traditional courtyard elements.',
      tech: 'Bamboo Frames + Solar Harmony',
      challenge: 'Creating a modern sustainable home that honored traditional design principles while meeting contemporary needs.',
      solution: 'We integrated a central courtyard with water features, used locally sourced bamboo for structural elements, and implemented passive solar design with high-efficiency insulation.',
      beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    },
    {
      id: 2,
      title: 'Community Center',
      type: 'commercial',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      description: 'A modern community space blending contemporary architecture with cultural design motifs.',
      tech: 'Green Roof + Natural Ventilation',
      challenge: 'Designing a welcoming space that serves diverse community needs while maintaining cultural sensitivity.',
      solution: 'We created flexible multi-purpose spaces, incorporated geometric patterns in the facade, and used natural materials throughout. The green roof provides insulation and community garden space.',
      beforeImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      id: 3,
      title: 'Heritage Renovation',
      type: 'renovation',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Thoughtful restoration preserving historical character while adding modern amenities.',
      tech: 'Restored Materials + Energy Efficiency',
      challenge: 'Preserving the historical integrity of a 1920s building while making it energy-efficient and accessible.',
      solution: 'We carefully restored original features, upgraded all systems for efficiency, and added a modern addition that complements rather than competes with the original structure.',
      beforeImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    },
    {
      id: 4,
      title: 'Eco Office Complex',
      type: 'commercial',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      description: 'LEED Platinum certified office building with integrated renewable energy systems.',
      tech: 'Solar Panels + Rainwater Harvesting',
      challenge: 'Creating a net-zero energy commercial building in an urban setting.',
      solution: 'We installed a comprehensive solar array, implemented rainwater harvesting, and used smart building systems to minimize energy consumption while maximizing comfort.',
      beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80'
    },
    {
      id: 5,
      title: 'Garden Villa',
      type: 'residential',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      description: 'A serene residential villa with integrated gardens and water features.',
      tech: 'Natural Stone + Living Walls',
      challenge: 'Designing a home that feels like a retreat while being energy-efficient and low-maintenance.',
      solution: 'We created indoor-outdoor living spaces, integrated living walls for natural cooling, and used natural stone for durability and beauty. The design maximizes natural light while minimizing heat gain.',
      beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80'
    },
    {
      id: 6,
      title: 'Cultural Center Renovation',
      type: 'renovation',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      description: 'Sensitive restoration of a cultural center with modern accessibility features.',
      tech: 'Heritage Materials + Universal Design',
      challenge: 'Updating a historic cultural center to be accessible and functional while preserving its character.',
      solution: 'We worked closely with community stakeholders, preserved original architectural details, and seamlessly integrated modern accessibility features. The renovation respects the past while serving future generations.',
      beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      id: 7,
      title: 'Sustainable Apartment Complex',
      type: 'residential',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      description: 'Multi-unit residential building with shared green spaces and sustainable features.',
      tech: 'Green Building + Community Spaces',
      challenge: 'Creating affordable, sustainable housing that fosters community connection.',
      solution: 'We designed shared courtyards, rooftop gardens, and common spaces that encourage interaction. Energy-efficient systems keep costs low while green features improve quality of life.',
      beforeImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
    },
    {
      id: 8,
      title: 'Modern Mosque Addition',
      type: 'commercial',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'Thoughtful addition to a community mosque with modern amenities.',
      tech: 'Traditional Design + Modern Systems',
      challenge: 'Expanding a mosque facility while maintaining architectural harmony and cultural respect.',
      solution: 'We designed the addition to complement existing architecture, used traditional materials in modern ways, and created flexible spaces for community gatherings and education.',
      beforeImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    }
  ];
  
  let activeFilter = 'all';
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovation' }
  ];
  
  // Render filter buttons
  const filterButtonsContainer = document.getElementById('filter-buttons');
  if (filterButtonsContainer) {
    filterButtonsContainer.innerHTML = filters.map((filter) => `
      <button
        class="filter-btn ${activeFilter === filter.id ? 'active' : ''}"
        data-filter="${filter.id}"
      >
        ${filter.label}
      </button>
    `).join('');
    
    // Add click handlers
    filterButtonsContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const filterId = this.getAttribute('data-filter');
        setActiveFilter(filterId);
      });
    });
  }
  
  // Set active filter
  function setActiveFilter(filterId) {
    activeFilter = filterId;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-filter') === filterId;
      btn.classList.toggle('active', isActive);
    });
    
    // Filter and render projects
    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.type === activeFilter);
    
    renderProjects(filteredProjects);
  }
  
  // Render projects with CSS Grid masonry
  function renderProjects(projectsToRender) {
    const gridContainer = document.getElementById('portfolio-grid');
    if (gridContainer) {
      gridContainer.innerHTML = projectsToRender.map((project, index) => `
        <div 
          class="portfolio-item"
          data-aos="fade-up"
          data-aos-delay="${index * 50}"
        >
          <div class="portfolio-card card-custom">
            <div class="portfolio-image-wrapper">
              <img 
                src="${project.image}" 
                alt="${project.title}"
                loading="lazy"
              />
              <div class="portfolio-overlay">
                <button 
                  class="btn btn-primary-custom"
                  onclick="openModal(${project.id})"
                >
                  View Details
                </button>
              </div>
              <div class="portfolio-badge">${project.category}</div>
            </div>
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <p class="portfolio-tech">
                <small class="text-muted">${project.tech}</small>
              </p>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
  
  // Open modal
  window.openModal = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('portfolio-modal');
    const modalContent = document.getElementById('modal-content');
    
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <button class="modal-close" onclick="closeModal()" aria-label="Close modal">
          &times;
        </button>
        <div class="modal-body">
          <h2 class="modal-title">${project.title}</h2>
          <p class="modal-category">${project.category}</p>
          
          <div class="modal-images">
            <div class="image-comparison">
              <div class="comparison-item">
                <h5>Before</h5>
                <img src="${project.beforeImage}" alt="Before" loading="lazy" />
              </div>
              <div class="comparison-item">
                <h5>After</h5>
                <img src="${project.afterImage}" alt="After" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="modal-details">
            <div class="detail-section">
              <h4>Challenge</h4>
              <p>${project.challenge}</p>
            </div>
            <div class="detail-section">
              <h4>Solution</h4>
              <p>${project.solution}</p>
            </div>
            <div class="detail-section">
              <h4>Technologies</h4>
              <p class="tech-highlight">${project.tech}</p>
            </div>
          </div>
        </div>
      `;
      
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      
      // Close on background click
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
  };
  
  // Close modal
  window.closeModal = function() {
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'unset';
    }
  };
  
  // Initialize with all projects
  renderProjects(projects);
  
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
  `;
  document.head.appendChild(style);
});

