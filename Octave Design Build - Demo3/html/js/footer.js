// Footer functionality

function getFooterHTML() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 class="footer-brand">Octave Design and Build</h5>
            <p class="footer-tagline">Harmony in Structure: Design, Build, Inspire</p>
            <p class="footer-description">
              Rooted in Balance and Beauty. We create spaces that honor both tradition and innovation, 
              building with purpose and respect for our environment and communities.
            </p>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h6 class="footer-heading">Quick Links</h6>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h6 class="footer-heading">Services</h6>
            <ul class="footer-links">
              <li><a href="services.html#design">Architectural Design</a></li>
              <li><a href="services.html#construction">Construction Management</a></li>
              <li><a href="services.html#sustainable">Sustainable Builds</a></li>
              <li><a href="services.html#renovation">Renovations</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h6 class="footer-heading">Connect</h6>
            <div class="footer-contact">
              <p>
                <i class="bi bi-geo-alt-fill"></i>
                <span>Toronto, ON, Canada</span>
              </p>
              <p>
                <i class="bi bi-envelope-fill"></i>
                <a href="mailto:info@octavedesignbuild.com">info@octavedesignbuild.com</a>
              </p>
              <p>
                <i class="bi bi-telephone-fill"></i>
                <a href="tel:+14161234567">+1 (416) 123-4567</a>
              </p>
            </div>
            <div class="footer-social">
              <a 
                href="https://linkedin.com/company/octave-design-build" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a 
                href="https://instagram.com/octavedesignbuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a 
                href="https://facebook.com/octavedesignbuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <hr class="footer-divider" />

        <div class="row">
          <div class="col-md-6">
            <p class="footer-copyright">
              &copy; ${currentYear} Octave Design and Build. All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span class="separator">|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initFooter() {
  // Set current year
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// If footer container exists but footer.js loads before main.js sets innerHTML
if (document.getElementById('footer-container') && !document.getElementById('footer-container').innerHTML.trim()) {
  document.getElementById('footer-container').innerHTML = getFooterHTML();
  initFooter();
}

