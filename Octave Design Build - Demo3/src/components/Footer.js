import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-brand">Octave Design and Build</h5>
            <p className="footer-tagline">Harmony in Structure: Design, Build, Inspire</p>
            <p className="footer-description">
              Rooted in Balance and Beauty. We create spaces that honor both tradition and innovation, 
              building with purpose and respect for our environment and communities.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><Link to="/services#design">Architectural Design</Link></li>
              <li><Link to="/services#construction">Construction Management</Link></li>
              <li><Link to="/services#sustainable">Sustainable Builds</Link></li>
              <li><Link to="/services#renovation">Renovations</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Connect</h6>
            <div className="footer-contact">
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                <span>Toronto, ON, Canada</span>
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:info@octavedesignbuild.com">info@octavedesignbuild.com</a>
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:+14161234567">+1 (416) 123-4567</a>
              </p>
            </div>
            <div className="footer-social">
              <a 
                href="https://linkedin.com/company/octave-design-build" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="https://instagram.com/octavedesignbuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://facebook.com/octavedesignbuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row">
          <div className="col-md-6">
            <p className="footer-copyright">
              &copy; {currentYear} Octave Design and Build. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

