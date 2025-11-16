// Footer functionality

function getFooterHTML() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="footer-custom">
      <div class="container">
        <div class="row py-5">
          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="footer-brand">Octave Design and Build</h5>
            <p class="footer-tagline">Harmony in Structure: Design, Build, Inspire</p>
            <p class="footer-description">
              Premium construction design and build company specializing in innovative 
              residential and commercial projects with sustainable materials and custom designs.
            </p>
          </div>

          <div class="col-md-2 mb-4 mb-md-0">
            <h6 class="footer-heading">Quick Links</h6>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div class="col-md-3 mb-4 mb-md-0">
            <h6 class="footer-heading">Services</h6>
            <ul class="footer-links">
              <li>Architectural Design</li>
              <li>Construction Management</li>
              <li>Sustainable Builds</li>
              <li>Renovations</li>
            </ul>
          </div>

          <div class="col-md-3">
            <h6 class="footer-heading">Connect</h6>
            <div class="social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="social-icon"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="social-icon"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p class="footer-contact mt-3">
              <strong>Email:</strong> info@octavedesign.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <hr class="footer-divider" />
            <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p class="mb-2 mb-md-0">
                &copy; ${currentYear} Octave Design and Build. All rights reserved.
              </p>
              <div class="footer-legal">
                <a href="#privacy" class="footer-link">Privacy Policy</a>
                <span class="mx-2">|</span>
                <a href="#terms" class="footer-link">Terms of Service</a>
              </div>
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

