import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Phone validation (if provided)
    if (formData.phone) {
      // Simple phone validation - accepts various formats
      const phoneRegex = /^[+]?[0-9\s\-().]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        setFormStatus({
          type: 'error',
          message: 'Please enter a valid phone number.'
        });
        return;
      }
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormStatus({
      type: 'success',
      message: 'Thank you! Your message has been sent. We will get back to you soon.'
    });
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  const faqs = [
    {
      question: 'How do you incorporate cultural values into your designs?',
      answer: 'We work closely with clients to understand their cultural preferences and values. This might include incorporating specific design elements, respecting privacy needs, creating spaces for community gathering, or using materials and colors that hold cultural significance. Every project is unique and tailored to our clients\' needs.'
    },
    {
      question: 'What makes your construction sustainable?',
      answer: 'We prioritize eco-friendly materials, energy-efficient systems, and waste reduction. Our projects often include renewable energy sources, water conservation features, and sustainable material sourcing. We aim for LEED certification where applicable and always consider the environmental impact of our choices.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A residential renovation might take 3-6 months, while a new commercial build could take 12-24 months. We provide detailed timelines during the initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'Do you work with existing architects or designers?',
      answer: 'Yes, we collaborate with external architects and designers when needed. We believe in building strong partnerships to deliver the best results for our clients.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve the Greater Toronto Area and surrounding regions. However, we\'re open to discussing projects in other locations. Contact us to see if we can assist with your project.'
    },
    {
      question: 'How do you ensure transparency in budgeting?',
      answer: 'We provide detailed, itemized estimates and maintain open communication about costs throughout the project. You\'ll receive regular budget updates and we\'ll discuss any changes before they\'re implemented. No surprises, just honest, transparent service.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title text-center" data-aos="fade-up">Get In Touch</h1>
          <p className="lead text-center" data-aos="fade-up" data-aos-delay="100">
            Ready to begin your project? We'd love to hear from you and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-7" data-aos="fade-right">
              <h2 className="section-title text-start mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="projectType" className="form-label">Project Type</label>
                    <select
                      className="form-select"
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                      <option value="cultural">Culturally Inspired</option>
                      <option value="sustainable">Sustainable Build</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    ></textarea>
                  </div>
                  {formStatus.message && (
                    <div className={`col-12 alert ${formStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                      {formStatus.message}
                    </div>
                  )}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-custom btn-lg">
                      Send Message
                    </button>
                    <p className="mt-3 text-muted small">
                      <small>
                        * Required fields. By submitting this form, you agree to our privacy policy.
                        {/* reCAPTCHA would be integrated here in production */}
                      </small>
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5" data-aos="fade-left">
              <h2 className="section-title text-start mb-4">Contact Information</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Address</h5>
                    <p>Toronto, ON, Canada</p>
                    <p className="text-muted small">Serving the Greater Toronto Area</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Phone</h5>
                    <p><a href="tel:+14161234567">+1 (416) 123-4567</a></p>
                    <p className="text-muted small">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p><a href="mailto:info@octavedesignbuild.com">info@octavedesignbuild.com</a></p>
                    <p className="text-muted small">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-links mt-4">
                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex gap-3">
                  <a 
                    href="https://linkedin.com/company/octave-design-build" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a 
                    href="https://instagram.com/octavedesignbuild" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a 
                    href="https://facebook.com/octavedesignbuild" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.269250544635!2d-79.38318468450248!3d43.65322627912169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Octave Design and Build Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section bg-light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Common questions about our services and approach
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item" data-aos="fade-up" data-aos-delay={index * 50}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${openFaq !== index ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={openFaq === index}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div className={`accordion-collapse collapse ${openFaq === index ? 'show' : ''}`}>
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="success-modal-close" 
              onClick={() => setShowSuccessModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
            <button 
              className="btn btn-primary-custom"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

