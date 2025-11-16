import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const companyStory = [
    {
      title: 'Our Beginning',
      content: 'Founded in 2015, Octave Design and Build emerged from a vision to revolutionize the construction industry. Our founders, passionate architects and builders, recognized the need for a company that seamlessly blends innovative design with exceptional craftsmanship.',
    },
    {
      title: 'Growth & Innovation',
      content: 'Over the years, we have expanded our services and expertise, completing over 50 projects across residential and commercial sectors. Our commitment to sustainable building practices and cutting-edge technology has set us apart in the industry.',
    },
    {
      title: 'Awards & Recognition',
      content: 'Our dedication to excellence has been recognized with multiple industry awards, including the "Sustainable Building Excellence Award" and "Innovation in Design" recognition. These accolades reflect our commitment to pushing boundaries.',
    },
  ];

  const timeline = [
    { year: '2015', event: 'Company Founded', description: 'Started with a small team of passionate architects and builders' },
    { year: '2017', event: 'First Major Project', description: 'Completed our first large-scale commercial development' },
    { year: '2019', event: 'Sustainability Initiative', description: 'Launched our green building program' },
    { year: '2021', event: 'Industry Recognition', description: 'Received multiple awards for innovation and excellence' },
    { year: '2024', event: 'Expansion', description: 'Expanded services to include smart building technologies' },
  ];

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'With over 15 years of experience, Sarah brings innovative design solutions to every project.',
    },
    {
      name: 'James Chen',
      role: 'Construction Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'James ensures every project is completed on time and within budget, maintaining the highest quality standards.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Sustainability Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Emily leads our green building initiatives, integrating sustainable practices into all our projects.',
    },
    {
      name: 'Michael Thompson',
      role: 'Project Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Michael oversees project execution, ensuring seamless coordination from concept to completion.',
    },
    {
      name: 'Lisa Park',
      role: 'Design Consultant',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      bio: 'Lisa specializes in creating spaces that balance aesthetics with functionality.',
    },
    {
      name: 'David Kumar',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'David brings cutting-edge technology solutions to enhance building performance and efficiency.',
    },
  ];

  const values = [
    {
      icon: '🔗',
      title: 'Unity',
      description: 'We believe in collaborative partnerships with our clients, working together to bring visions to life.',
    },
    {
      icon: '🌑',
      title: 'Innovation',
      description: 'Constantly pushing boundaries with new materials, technologies, and design approaches.',
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Uncompromising commitment to quality in every detail, from initial concept to final completion.',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Building for the future with eco-friendly materials and energy-efficient solutions.',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">About Octave</h1>
            <p className="page-subtitle">Crafting excellence in every structure we build</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <h2 className="section-title text-center mb-4">Our Story</h2>
            <div className="accordion accordion-custom" id="companyStoryAccordion">
              {companyStory.map((story, index) => (
                <div key={index} className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeAccordion === index}
                    >
                      {story.title}
                    </button>
                  </h3>
                  <div
                    className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body">
                      {story.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center mb-5">Our Journey</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4 className="timeline-event">{item.event}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">Meet the experts behind Octave</p>
          </motion.div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="team-card">
                  <div className="team-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                      loading="lazy"
                    />
                    <div className="team-overlay"></div>
                  </div>
                  <div className="team-content">
                    <h4 className="team-name">{member.name}</h4>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">The pillars that guide everything we do</p>
          </motion.div>
          <div className="row g-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="section-title">See Us in Action</h2>
            <p className="section-subtitle">A glimpse into our world</p>
          </motion.div>
          <motion.div
            className="video-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Octave Design and Build - Company Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

