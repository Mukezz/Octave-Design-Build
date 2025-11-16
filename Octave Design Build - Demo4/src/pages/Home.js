import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, years: 0, satisfaction: 0 });

  // Hero carousel settings
  const sliderSettings = {
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
  };

  // Hero images (Unsplash placeholders)
  const heroImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80',
  ];

  // Intersection Observer for stats section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  // Animated counters
  useEffect(() => {
    if (statsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const animateCounter = (target, setter) => {
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setter(Math.round(target));
            clearInterval(timer);
          } else {
            setter(Math.round(current));
          }
        }, interval);
      };

      animateCounter(50, (val) => setCounters((prev) => ({ ...prev, projects: val })));
      animateCounter(10, (val) => setCounters((prev) => ({ ...prev, years: val })));
      animateCounter(100, (val) => setCounters((prev) => ({ ...prev, satisfaction: val })));
    }
  }, [statsInView]);

  // Services data
  const services = [
    {
      icon: '📐',
      title: 'Design',
      description: 'Custom architectural designs that blend innovation with functionality.',
      link: '/services',
    },
    {
      icon: '🏗️',
      title: 'Build',
      description: 'Expert construction management from foundation to finish.',
      link: '/services',
    },
    {
      icon: '🔨',
      title: 'Renovation',
      description: 'Transform existing spaces with precision and style.',
      link: '/services',
    },
    {
      icon: '💡',
      title: 'Consulting',
      description: 'Strategic guidance for your construction projects.',
      link: '/services',
    },
  ];

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

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Slider {...sliderSettings} className="hero-slider">
          {heroImages.map((image, index) => (
            <div key={index} className="hero-slide">
              <div
                className="hero-background"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="hero-overlay">
                  <div className="hero-content">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="hero-title"
                    >
                      Harmony in Structure
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="hero-tagline"
                    >
                      Design, Build, Inspire
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <Link to="/contact" className="btn btn-hero">
                        Launch Your Vision
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Services Teaser */}
      <section className="services-teaser py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive solutions from concept to completion</p>
          </motion.div>
          <div className="row g-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  <Link to={service.link} className="service-link">
                    Dive In →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Showcasing our finest work</p>
          </motion.div>
          <Masonry
            breakpointCols={{ default: 3, 992: 2, 768: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <span className="project-type">{project.type}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <Link to="/portfolio" className="project-link">
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5" ref={statsRef}>
        <div className="container">
          <div className="row g-4">
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="stat-card">
                <div className="stat-number">{counters.projects}+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </motion.div>
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-card">
                <div className="stat-number">{counters.years}</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </motion.div>
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="stat-card">
                <div className="stat-number">{counters.satisfaction}%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner py-5">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Forge in the Night?</h2>
            <p className="cta-subtitle">Connect Now</p>
            <Link to="/contact" className="btn btn-cta">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

