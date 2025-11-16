// Header functionality

function getHeaderHTML() {
  const currentPage = getCurrentPage();
  const isActive = (page) => currentPage === page || (currentPage === 'index' && page === 'home');
  
  return `
    <header class="header-navbar">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="index.html" onclick="closeMenu()">
            <span class="brand-text">Octave Design and Build</span>
          </a>
          
          <button
            class="navbar-toggler"
            type="button"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link ${isActive('index') || isActive('home') ? 'active' : ''}"
                  href="index.html"
                  onclick="closeMenu()"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link ${isActive('about') ? 'active' : ''}"
                  href="about.html"
                  onclick="closeMenu()"
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link ${isActive('services') ? 'active' : ''}"
                  href="services.html"
                  onclick="closeMenu()"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link ${isActive('portfolio') ? 'active' : ''}"
                  href="portfolio.html"
                  onclick="closeMenu()"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link ${isActive('contact') ? 'active' : ''}"
                  href="contact.html"
                  onclick="closeMenu()"
                >
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <button
                  class="theme-toggle-btn"
                  onclick="window.themeManager && window.themeManager.toggle()"
                  aria-label="Switch theme"
                >
                  <span class="theme-icon">🌙</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
}

function initHeader() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navbarCollapse = document.getElementById('navbarNav');
  
  let isMenuOpen = false;
  
  if (mobileMenuToggle && navbarCollapse) {
    mobileMenuToggle.addEventListener('click', function() {
      isMenuOpen = !isMenuOpen;
      navbarCollapse.classList.toggle('show', isMenuOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen);
    });
  }
  
  // Close menu function (called from links)
  window.closeMenu = function() {
    isMenuOpen = false;
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  };
}

// If header container exists but header.js loads before main.js sets innerHTML
if (document.getElementById('header-container') && !document.getElementById('header-container').innerHTML.trim()) {
  document.getElementById('header-container').innerHTML = getHeaderHTML();
  initHeader();
}

