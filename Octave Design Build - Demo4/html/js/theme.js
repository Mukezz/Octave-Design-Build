// Theme switcher functionality

(function() {
  // Get initial theme
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'dark'; // Default to dark theme
  }
  
  // Set theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle button icon
    const themeToggle = document.querySelector('.theme-toggle-btn');
    if (themeToggle) {
      const icon = themeToggle.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    }
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', function() {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    
    // Add click handler to theme toggle button
    const themeToggle = document.querySelector('.theme-toggle-btn');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  });
  
  // Export for use in other scripts
  window.themeManager = {
    toggle: toggleTheme,
    set: setTheme,
    get: function() {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    }
  };
})();

