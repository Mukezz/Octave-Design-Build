import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="page-title text-center" data-aos="fade-up">Our Portfolio</h1>
          <p className="lead text-center" data-aos="fade-up" data-aos-delay="100">
            Showcasing projects that reflect our commitment to sustainable design, cultural sensitivity, and excellence
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section portfolio-filters">
        <div className="container">
          <div className="filter-buttons" data-aos="fade-up">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section portfolio-grid-section">
        <div className="container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="portfolio-item"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="portfolio-card card-custom">
                  <div className="portfolio-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="portfolio-overlay">
                      <button 
                        className="btn btn-primary-custom"
                        onClick={() => openModal(project)}
                      >
                        View Details
                      </button>
                    </div>
                    <div className="portfolio-badge">{project.category}</div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="portfolio-tech">
                      <small className="text-muted">{project.tech}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-category">{selectedProject.category}</p>
              
              <div className="modal-images">
                <div className="image-comparison">
                  <div className="comparison-item">
                    <h5>Before</h5>
                    <img src={selectedProject.beforeImage} alt="Before" loading="lazy" />
                  </div>
                  <div className="comparison-item">
                    <h5>After</h5>
                    <img src={selectedProject.afterImage} alt="After" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h4>Challenge</h4>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="detail-section">
                  <h4>Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>
                <div className="detail-section">
                  <h4>Technologies</h4>
                  <p className="tech-highlight">{selectedProject.tech}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

