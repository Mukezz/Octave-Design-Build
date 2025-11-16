import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Architectural Design',
      icon: '📐',
      description: 'Shadowy custom plans and 3D modeling in low light environments, creating innovative designs that push boundaries.',
      features: [
        'Custom architectural blueprints',
        '3D modeling and visualization',
        'Sustainable design integration',
        'Code compliance and permits',
        'Design revisions and consultations',
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      pricing: [
        { tier: 'Midnight Tier', price: 'From $15,000', features: ['Initial consultation', 'Basic blueprints', '2 revisions'] },
        { tier: 'Eclipse Tier', price: 'From $35,000', features: ['Full design package', '3D renderings', 'Unlimited revisions'] },
        { tier: 'Stellar Tier', price: 'Custom Quote', features: ['Complete design solution', 'Project management', 'Premium support'] },
      ],
    },
    {
      title: 'Construction Management',
      icon: '🏗️',
      description: 'Nocturnal oversight and budgeting in the gloom, ensuring projects stay on track and within budget.',
      features: [
        'Project scheduling and coordination',
        'Budget management and tracking',
        'Quality control and inspections',
        'Subcontractor management',
        'Progress reporting',
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      pricing: [
        { tier: 'Midnight Tier', price: 'From $25,000', features: ['Basic oversight', 'Monthly reports', 'Email support'] },
        { tier: 'Eclipse Tier', price: 'From $50,000', features: ['Full management', 'Weekly reports', '24/7 support'] },
        { tier: 'Stellar Tier', price: 'Custom Quote', features: ['Dedicated manager', 'Daily updates', 'Premium support'] },
      ],
    },
    {
      title: 'Sustainable Builds',
      icon: '🌱',
      description: 'Eco-materials with bioluminescent accents and certifications, building for a sustainable future.',
      features: [
        'LEED certification support',
        'Eco-friendly materials',
        'Energy-efficient systems',
        'Solar and renewable integration',
        'Waste reduction strategies',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      pricing: [
        { tier: 'Midnight Tier', price: 'From $30,000', features: ['Basic green features', 'Material selection', 'Consultation'] },
        { tier: 'Eclipse Tier', price: 'From $60,000', features: ['Full green build', 'LEED certification', 'Energy systems'] },
        { tier: 'Stellar Tier', price: 'Custom Quote', features: ['Net-zero building', 'Premium certifications', 'Full integration'] },
      ],
    },
    {
      title: 'Renovations',
      icon: '🔨',
      description: 'Stealthy updates for hidden gems, transforming existing spaces with precision and style.',
      features: [
        'Space planning and design',
        'Structural modifications',
        'Interior and exterior updates',
        'Kitchen and bathroom remodels',
        'Historic preservation',
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      pricing: [
        { tier: 'Midnight Tier', price: 'From $20,000', features: ['Single room renovation', 'Basic updates', 'Standard materials'] },
        { tier: 'Eclipse Tier', price: 'From $45,000', features: ['Multi-room renovation', 'Premium finishes', 'Design consultation'] },
        { tier: 'Stellar Tier', price: 'Custom Quote', features: ['Complete home renovation', 'Luxury finishes', 'Full design service'] },
      ],
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero py-5">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              End-to-end services under midnight precision, from concept to completion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="service-breakdown py-5">
        <div className="container">
          <div className="service-tabs">
            <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
              {services.map((service, index) => (
                <li key={index} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === index}
                  >
                    <span className="service-tab-icon">{service.icon}</span>
                    <span className="service-tab-title">{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                  role="tabpanel"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="service-detail"
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-md-6">
                        <div className="service-image-wrapper">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="service-image"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h2 className="service-detail-title">{service.title}</h2>
                        <p className="service-detail-description">{service.description}</p>
                        <ul className="service-features">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>
                              <span className="feature-icon">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="pricing-section">
                      <h3 className="pricing-title text-center mb-4">Pricing Tiers</h3>
                      <div className="row g-4">
                        {service.pricing.map((tier, idx) => (
                          <motion.div
                            key={idx}
                            className="col-md-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <div className="pricing-card">
                              <div className="pricing-tier">{tier.tier}</div>
                              <div className="pricing-price">{tier.price}</div>
                              <ul className="pricing-features">
                                {tier.features.map((feature, fIdx) => (
                                  <li key={fIdx}>
                                    <span className="pricing-check">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <button className="btn btn-pricing">Get Quote</button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta py-5">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-subtitle">Let's discuss how we can bring your vision to life</p>
            <a href="/contact" className="btn btn-cta-primary">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

