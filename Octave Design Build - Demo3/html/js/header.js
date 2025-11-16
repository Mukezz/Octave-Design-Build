// Header functionality

function getHeaderHTML() {
  const currentPage = getCurrentPage();
  const isActive = (page) => currentPage === page || (currentPage === 'index' && page === 'home');
  
  return `
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html" aria-label="Octave Design and Build Home">
            <span class="brand-text">Octave Design and Build</span>
          </a>
          
          <button
            class="navbar-toggler"
            type="button"
            id="mobile-menu-toggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
            aria-controls="navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a 
                  class="nav-link ${isActive('index') || isActive('home') ? 'active' : ''}"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a 
                  class="nav-link ${isActive('about') ? 'active' : ''}"
                  href="about.html"
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a 
                  class="nav-link ${isActive('services') ? 'active' : ''}"
                  href="services.html"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a 
                  class="nav-link ${isActive('portfolio') ? 'active' : ''}"
                  href="portfolio.html"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a 
                  class="nav-link ${isActive('contact') ? 'active' : ''}"
                  href="contact.html"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="geometric-overlay"></div>
    </header>
  `;
}

function initHeader() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navbarCollapse = document.getElementById('navbarNav');
  
  if (mobileMenuToggle && navbarCollapse) {
    let isMenuOpen = false;
    
    mobileMenuToggle.addEventListener('click', function() {
      isMenuOpen = !isMenuOpen;
      navbarCollapse.classList.toggle('show', isMenuOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen);
    });
    
    // Close menu when clicking on a link
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        isMenuOpen = false;
        navbarCollapse.classList.remove('show');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // Scroll effect
  let isScrolled = false;
  const header = document.querySelector('.header');
  
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50 && !isScrolled) {
      header.classList.add('scrolled');
      isScrolled = true;
    } else if (scrollY <= 50 && isScrolled) {
      header.classList.remove('scrolled');
      isScrolled = false;
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
}

// If header container exists but header.js loads before main.js sets innerHTML
if (document.getElementById('header-container') && !document.getElementById('header-container').innerHTML.trim()) {
  document.getElementById('header-container').innerHTML = getHeaderHTML();
  initHeader();
}

