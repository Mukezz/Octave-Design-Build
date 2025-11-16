import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('design');

  const services = {
    design: {
      title: 'Architectural Design',
      icon: '🏛️',
      description: 'We create custom architectural plans that honor cultural sensitivity while embracing modern innovation. Our designs balance aesthetic beauty with functional excellence.',
      features: [
        'Custom residential and commercial designs',
        '3D modeling and visualization',
        'Cultural sensitivity integration',
        'Sustainable design principles',
        'Accessibility compliance',
        'Heritage preservation planning'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      pricing: {
        starter: { name: 'Essentials', price: 'From $5,000', features: ['Initial consultation', 'Basic floor plans', '2 revisions'] },
        standard: { name: 'Complete', price: 'From $15,000', features: ['Full design package', '3D renderings', 'Unlimited revisions', 'Material selection'] },
        premium: { name: 'Premium', price: 'From $30,000', features: ['Luxury design package', 'Virtual reality walkthrough', 'Interior design', 'Project management'] }
      }
    },
    construction: {
      title: 'Construction Management',
      icon: '🏗️',
      description: 'Our ethical oversight ensures transparent budgeting, seamless coordination, and quality execution from groundbreaking to final inspection.',
      features: [
        'Transparent budgeting and reporting',
        'Ethical contractor selection',
        'Quality assurance protocols',
        'Timeline management',
        'Safety compliance',
        'Regular progress updates'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      pricing: {
        starter: { name: 'Basic', price: '10% of project', features: ['Project coordination', 'Monthly reports', 'Quality checks'] },
        standard: { name: 'Standard', price: '15% of project', features: ['Full management', 'Weekly reports', 'Vendor management', 'Budget tracking'] },
        premium: { name: 'Premium', price: '20% of project', features: ['Complete oversight', 'Daily updates', 'Risk management', 'Warranty support'] }
      }
    },
    sustainable: {
      title: 'Sustainable Builds',
      icon: '🌿',
      description: 'Building in harmony with nature through eco-materials, green certifications, and sustainable practices that align with stewardship values.',
      features: [
        'LEED and Green Building certification',
        'Eco-friendly material sourcing',
        'Energy-efficient systems',
        'Water conservation solutions',
        'Waste reduction strategies',
        'Renewable energy integration'
      ],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      pricing: {
        starter: { name: 'Green Start', price: 'From $20,000', features: ['Basic green features', 'Energy audit', 'Eco-material options'] },
        standard: { name: 'Green Plus', price: 'From $50,000', features: ['Full green integration', 'Solar options', 'Certification support', 'Water systems'] },
        premium: { name: 'Net Zero', price: 'From $100,000', features: ['Net zero energy', 'Full certification', 'Advanced systems', 'Monitoring'] }
      }
    },
    renovation: {
      title: 'Renovations',
      icon: '🔨',
      description: 'Respectful updates that preserve heritage while introducing modern comfort, efficiency, and functionality to existing structures.',
      features: [
        'Heritage preservation',
        'Modern amenity integration',
        'Structural upgrades',
        'Energy efficiency improvements',
        'Cultural design elements',
        'Historical documentation'
      ],
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      pricing: {
        starter: { name: 'Refresh', price: 'From $10,000', features: ['Cosmetic updates', 'Paint and finishes', 'Basic fixtures'] },
        standard: { name: 'Renovate', price: 'From $30,000', features: ['Full renovation', 'Structural work', 'Systems upgrade', 'Design integration'] },
        premium: { name: 'Transform', price: 'From $75,000', features: ['Complete transformation', 'Heritage restoration', 'Luxury finishes', 'Smart home'] }
      }
    }
  };

  const currentService = services[activeTab];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="page-title">Our Services</h1>
              <p className="lead">
                Comprehensive solutions from concept to completion. We offer holistic design and build services 
                that honor your vision while respecting our shared environment and values.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80" 
                alt="Our services"
                className="img-fluid rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section services-tabs-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Service Details</h2>
          
          <ul className="nav nav-tabs services-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
            {Object.keys(services).map((key) => (
              <li className="nav-item" key={key}>
                <button
                  className={`nav-link ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === key}
                >
                  <span className="service-tab-icon">{services[key].icon}</span>
                  {services[key].title}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content mt-5">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="service-image-wrapper">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="service-content">
                  <h3 className="service-content-title">{currentService.title}</h3>
                  <p className="service-description">{currentService.description}</p>
                  <h5 className="mt-4 mb-3">Key Features:</h5>
                  <ul className="service-features">
                    {currentService.features.map((feature, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill text-primary-custom"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section bg-light" id="pricing">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Pricing Options</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Flexible packages to suit your needs and budget
          </p>
          <div className="row g-4">
            {Object.keys(currentService.pricing).map((tier, index) => {
              const pricing = currentService.pricing[tier];
              return (
                <div key={tier} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className={`pricing-card ${tier === 'standard' ? 'featured' : ''}`}>
                    {tier === 'standard' && <div className="pricing-badge">Most Popular</div>}
                    <h4 className="pricing-tier">{pricing.name}</h4>
                    <div className="pricing-price">{pricing.price}</div>
                    <ul className="pricing-features">
                      {pricing.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="bi bi-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary-custom w-100 mt-4">
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center mt-4 text-muted">
            <small>* All prices are estimates. Contact us for a detailed quote based on your specific project needs.</small>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-text">
              Let's discuss how we can bring your vision to life with harmony and excellence.
            </p>
            <Link to="/contact" className="btn btn-accent btn-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

