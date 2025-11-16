import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';

const Home = () => {
  // Hero Slider Settings
  const heroSettings = {
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
  };

  const services = [
    {
      id: 1,
      title: 'Architectural Design',
      description: 'Custom plans that honor cultural sensitivity and modern innovation, with 3D modeling and sustainable principles.',
      icon: '🏛️',
      link: '/services#design'
    },
    {
      id: 2,
      title: 'Construction Management',
      description: 'Ethical oversight with transparent budgeting and seamless project coordination from concept to completion.',
      icon: '🏗️',
      link: '/services#construction'
    },
    {
      id: 3,
      title: 'Sustainable Builds',
      description: 'Eco-materials and green certifications, building in harmony with nature and stewardship values.',
      icon: '🌿',
      link: '/services#sustainable'
    },
    {
      id: 4,
      title: 'Renovations',
      description: 'Respectful updates that preserve heritage while introducing modern comfort and efficiency.',
      icon: '🔨',
      link: '/services#renovation'
    }
  ];

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

  const stats = [
    { number: '50+', label: 'Projects of Harmony', icon: '🏆' },
    { number: '10', label: 'Years of Stewardship', icon: '📅' },
    { number: '100%', label: 'Mindful Satisfaction', icon: '✨' },
    { number: '95%', label: 'Sustainable Materials', icon: '🌱' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Slider {...heroSettings} className="hero-slider">
          <div className="hero-slide">
            <div 
              className="hero-background"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)'
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1 className="hero-title" data-aos="fade-up">
                  Harmony in Structure
                </h1>
                <p className="hero-tagline" data-aos="fade-up" data-aos-delay="200">
                  Design, Build, Inspire – Rooted in Balance and Beauty
                </p>
                <Link 
                  to="/contact" 
                  className="btn btn-primary-custom btn-lg mt-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Begin Your Journey
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-slide">
            <div 
              className="hero-background"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80)'
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1 className="hero-title" data-aos="fade-up">
                  Sustainable Excellence
                </h1>
                <p className="hero-tagline" data-aos="fade-up" data-aos-delay="200">
                  Building with Purpose, Respect, and Innovation
                </p>
                <Link 
                  to="/services" 
                  className="btn btn-primary-custom btn-lg mt-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-slide">
            <div 
              className="hero-background"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)'
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1 className="hero-title" data-aos="fade-up">
                  Cultural Resonance
                </h1>
                <p className="hero-tagline" data-aos="fade-up" data-aos-delay="200">
                  Spaces That Honor Tradition and Embrace the Future
                </p>
                <Link 
                  to="/portfolio" 
                  className="btn btn-primary-custom btn-lg mt-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Services Teaser Section */}
      <section className="section services-teaser">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Services</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Comprehensive solutions from concept to completion, built on principles of harmony and excellence
          </p>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.id} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card card-custom h-100 text-center">
                  <div className="card-body">
                    <div className="service-icon">{service.icon}</div>
                    <h5 className="card-title mt-3">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <Link to={service.link} className="btn btn-outline-primary-custom">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-projects bg-light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Showcasing our commitment to sustainable design and cultural sensitivity
          </p>
          <div className="row g-4">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card card-custom project-card h-100">
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      className="card-img-top" 
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="project-type-badge">{project.type}</div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="project-tech">
                      <small className="text-muted">{project.tech}</small>
                    </p>
                    <Link to="/portfolio" className="btn btn-sm btn-primary-custom">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="cta-title">Ready to Create with Purpose?</h2>
            <p className="cta-text">
              Let's build something beautiful together. Reach out to discuss your vision.
            </p>
            <Link to="/contact" className="btn btn-accent btn-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

