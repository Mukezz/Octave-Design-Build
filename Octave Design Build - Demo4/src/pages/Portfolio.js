import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const observerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'A sleek residential complex featuring sustainable materials and innovative design.',
      tech: 'Carbon Fiber + LED Integration, Smart Home Systems',
      challenges: 'Integrating modern technology with traditional architecture while maintaining energy efficiency.',
      solutions: 'Developed a hybrid system combining smart home automation with sustainable building materials, resulting in 40% energy savings.',
      beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    },
    {
      id: 2,
      title: 'Commercial Office Tower',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      description: 'State-of-the-art commercial space with cutting-edge technology integration.',
      tech: 'Glass Facade, Automated Systems, Green Roof',
      challenges: 'Creating a sustainable commercial space in an urban environment with limited space.',
      solutions: 'Implemented vertical green spaces, energy-efficient glass facade, and rooftop gardens to maximize sustainability.',
      beforeImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    },
    {
      id: 3,
      title: 'Luxury Penthouse Renovation',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Complete transformation of a luxury penthouse with premium finishes.',
      tech: 'Marble Finishes, Smart Lighting, Custom Millwork',
      challenges: 'Renovating a high-rise penthouse while maintaining structural integrity and minimizing disruption.',
      solutions: 'Phased renovation approach with precision scheduling and premium materials, completed on time and within budget.',
      beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      id: 4,
      title: 'Sustainable Eco-Home',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      description: 'Net-zero energy home with solar integration and sustainable materials.',
      tech: 'Solar Panels, Geothermal, Recycled Materials',
      challenges: 'Achieving net-zero energy while maintaining modern aesthetics and comfort.',
      solutions: 'Integrated solar panels, geothermal heating, and high-efficiency insulation to achieve net-zero status.',
      beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    },
    {
      id: 5,
      title: 'Retail Shopping Center',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      description: 'Modern retail space with flexible layouts and sustainable design.',
      tech: 'Modular Design, LED Lighting, Smart HVAC',
      challenges: 'Creating flexible retail spaces that can adapt to changing tenant needs.',
      solutions: 'Designed modular spaces with movable partitions and smart systems for easy reconfiguration.',
      beforeImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    },
    {
      id: 6,
      title: 'Historic Building Restoration',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      description: 'Careful restoration preserving historic character while adding modern amenities.',
      tech: 'Historic Preservation, Modern Systems Integration',
      challenges: 'Balancing historic preservation requirements with modern functionality and code compliance.',
      solutions: 'Careful restoration of original features while integrating modern systems discreetly, maintaining historic integrity.',
      beforeImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      id: 7,
      title: 'Contemporary Family Home',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Spacious family home with open floor plan and outdoor living spaces.',
      tech: 'Open Concept Design, Outdoor Integration',
      challenges: 'Creating a family-friendly space that feels both spacious and cozy.',
      solutions: 'Open floor plan with defined zones, seamless indoor-outdoor flow, and flexible spaces for growing families.',
      beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      id: 8,
      title: 'Tech Campus Building',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      description: 'Innovative workspace designed for collaboration and innovation.',
      tech: 'Collaborative Spaces, Advanced AV, Flexible Layouts',
      challenges: 'Designing a workspace that fosters collaboration while providing private spaces.',
      solutions: 'Hybrid design with open collaborative areas, private pods, and flexible meeting spaces adaptable to various work styles.',
      beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  // Infinite scroll with Intersection Observer
  useEffect(() => {
    if (observerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && visibleProjects < filteredProjects.length) {
            setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
          }
        },
        { threshold: 0.5 }
      );

      const currentObserverRef = observerRef.current;
      observer.observe(currentObserverRef);

      return () => {
        if (currentObserverRef) {
          observer.unobserve(currentObserverRef);
        }
      };
    }
  }, [visibleProjects, filteredProjects.length]);

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
      <section className="portfolio-hero py-5">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Our Portfolio</h1>
            <p className="page-subtitle">Showcasing innovative projects from concept to completion</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="portfolio-filters py-3">
        <div className="container">
          <div className="filter-buttons text-center">
            {['All', 'Residential', 'Commercial'].map((filterType) => (
              <button
                key={filterType}
                className={`filter-btn ${filter === filterType ? 'active' : ''}`}
                onClick={() => {
                  setFilter(filterType);
                  setVisibleProjects(6);
                }}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="portfolio-gallery py-5">
        <div className="container">
          <Masonry
            breakpointCols={{ default: 3, 992: 2, 768: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="portfolio-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-type">{project.type}</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4 className="portfolio-title">{project.title}</h4>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tech">
                    <strong>Tech:</strong> {project.tech}
                  </div>
                  <button
                    className="btn btn-portfolio"
                    onClick={() => openModal(project)}
                  >
                    Unveil Details
                  </button>
                </div>
              </motion.div>
            ))}
          </Masonry>

          {/* Load More Trigger */}
          {visibleProjects < filteredProjects.length && (
            <div ref={observerRef} className="load-more-trigger"></div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="portfolio-modal" onClick={closeModal}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>

              {/* Before/After Slider */}
              <div className="before-after-section">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="before-after-card">
                      <h5 className="before-after-label">Before</h5>
                      <img
                        src={selectedProject.beforeImage}
                        alt="Before"
                        className="before-after-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="before-after-card">
                      <h5 className="before-after-label">After</h5>
                      <img
                        src={selectedProject.afterImage}
                        alt="After"
                        className="before-after-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="challenges-solutions">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="challenge-card">
                      <h4 className="challenge-title">Challenges</h4>
                      <p className="challenge-text">{selectedProject.challenges}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="solution-card">
                      <h4 className="solution-title">Solutions</h4>
                      <p className="solution-text">{selectedProject.solutions}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="tech-stack-section">
                <h4 className="tech-stack-title">Technology Stack</h4>
                <p className="tech-stack-text">{selectedProject.tech}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

