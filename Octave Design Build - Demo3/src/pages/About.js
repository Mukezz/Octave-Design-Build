import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const timeline = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Octave Design and Build was founded with a vision to create spaces that honor both tradition and innovation, building with purpose and respect.'
    },
    {
      year: '2017',
      title: 'First Sustainable Project',
      description: 'Completed our first LEED-certified residential project, establishing our commitment to environmental stewardship.'
    },
    {
      year: '2019',
      title: 'Award Recognition',
      description: 'Received the Excellence in Sustainable Design Award for our Harmony Residence project.'
    },
    {
      year: '2021',
      title: 'Community Expansion',
      description: 'Expanded services to include cultural and heritage renovation projects, preserving history while embracing modernity.'
    },
    {
      year: '2023',
      title: '50+ Projects Milestone',
      description: 'Reached a milestone of 50+ completed projects, each reflecting our values of harmony, sustainability, and excellence.'
    }
  ];

  const team = [
    {
      id: 1,
      name: 'Ahmad Hassan',
      role: 'Founder & Lead Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'With over 15 years of experience, Ahmad combines traditional design principles with modern sustainable practices.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Sarah ensures seamless project execution with a focus on transparent communication and ethical practices.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Sustainability Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Michael leads our green building initiatives, ensuring every project meets the highest environmental standards.'
    },
    {
      id: 4,
      name: 'Fatima Al-Mansouri',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Fatima brings cultural sensitivity and innovative design solutions to every project we undertake.'
    },
    {
      id: 5,
      name: 'David Thompson',
      role: 'Construction Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'David oversees construction with precision and care, ensuring quality and safety in every build.'
    },
    {
      id: 6,
      name: 'Layla Ahmed',
      role: 'Client Relations',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      bio: 'Layla ensures our clients feel heard and valued throughout their journey with us.'
    }
  ];

  const values = [
    {
      id: 1,
      title: 'Harmony',
      icon: '⚖️',
      description: 'We believe in creating balance between form and function, tradition and innovation, and human needs and environmental responsibility.'
    },
    {
      id: 2,
      title: 'Stewardship',
      icon: '🌳',
      description: 'As stewards of the earth, we prioritize sustainable materials and practices, building in harmony with nature and for future generations.'
    },
    {
      id: 3,
      title: 'Excellence',
      icon: '✨',
      description: 'We pursue excellence in every detail, from initial design concepts to final construction, ensuring lasting quality and beauty.'
    },
    {
      id: 4,
      title: 'Respect',
      icon: '🤝',
      description: 'We honor cultural diversity, client visions, and community needs, creating inclusive spaces that welcome all.'
    },
    {
      id: 5,
      title: 'Transparency',
      icon: '💎',
      description: 'Open communication and honest practices build trust. We maintain clarity in all our processes and relationships.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="page-title">Our Story</h1>
              <p className="lead">
                At Octave Design and Build, we believe that great architecture is more than structures—it's about creating spaces that inspire, 
                nurture, and honor the communities they serve.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" 
                alt="Our team at work"
                className="img-fluid rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section company-story">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Journey</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section bg-light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Values</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            The principles that guide everything we do
          </p>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={value.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="value-card text-center">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Team</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            A diverse group of professionals united by passion and purpose
          </p>
          <div className="row g-4">
            {team.map((member, index) => (
              <div key={member.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card card-custom team-card">
                  <div className="team-image-wrapper">
                    <img 
                      src={member.image} 
                      className="card-img-top" 
                      alt={member.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-subtitle text-primary-custom">{member.role}</p>
                    <p className="card-text">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section bg-light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">See Us in Action</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Octave Design and Build Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-center mt-3 text-muted">
                <small>Watch our introduction video to learn more about our approach and values</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

