// Main utility functions

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }
});

// Load header
function loadHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    fetch('components/header.html')
      .then(response => response.text())
      .then(html => {
        headerContainer.innerHTML = html;
        // Initialize header functionality after loading
        if (typeof initHeader === 'function') {
          initHeader();
        }
      })
      .catch(error => {
        console.error('Error loading header:', error);
        // Fallback header HTML
        headerContainer.innerHTML = getHeaderHTML();
        if (typeof initHeader === 'function') {
          initHeader();
        }
      });
  }
}

// Load footer
function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    fetch('components/footer.html')
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
        // Initialize footer functionality after loading
        if (typeof initFooter === 'function') {
          initFooter();
        }
      })
      .catch(error => {
        console.error('Error loading footer:', error);
        // Fallback footer HTML
        footerContainer.innerHTML = getFooterHTML();
        if (typeof initFooter === 'function') {
          initFooter();
        }
      });
  }
}

// Get current page name
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  return page.replace('.html', '');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
});

