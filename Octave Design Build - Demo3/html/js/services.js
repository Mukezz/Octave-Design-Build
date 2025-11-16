// Services page functionality

document.addEventListener('DOMContentLoaded', function() {
  const services = {
    design: {
      title: 'Architectural Design',
      icon: '🏛️',
      description: 'We create custom architectural plans that honor cultural sensitivity while embracing modern innovation. Our designs balance aesthetic beauty with functional excellence.',
      features: [
        'Custom residential and commercial designs',
        '3D modeling and visualization',
        'Cultural sensitivity integration',
        'Sustainable design principles',
        'Accessibility compliance',
        'Heritage preservation planning'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      pricing: {
        starter: { name: 'Essentials', price: 'From $5,000', features: ['Initial consultation', 'Basic floor plans', '2 revisions'] },
        standard: { name: 'Complete', price: 'From $15,000', features: ['Full design package', '3D renderings', 'Unlimited revisions', 'Material selection'] },
        premium: { name: 'Premium', price: 'From $30,000', features: ['Luxury design package', 'Virtual reality walkthrough', 'Interior design', 'Project management'] }
      }
    },
    construction: {
      title: 'Construction Management',
      icon: '🏗️',
      description: 'Our ethical oversight ensures transparent budgeting, seamless coordination, and quality execution from groundbreaking to final inspection.',
      features: [
        'Transparent budgeting and reporting',
        'Ethical contractor selection',
        'Quality assurance protocols',
        'Timeline management',
        'Safety compliance',
        'Regular progress updates'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      pricing: {
        starter: { name: 'Basic', price: '10% of project', features: ['Project coordination', 'Monthly reports', 'Quality checks'] },
        standard: { name: 'Standard', price: '15% of project', features: ['Full management', 'Weekly reports', 'Vendor management', 'Budget tracking'] },
        premium: { name: 'Premium', price: '20% of project', features: ['Complete oversight', 'Daily updates', 'Risk management', 'Warranty support'] }
      }
    },
    sustainable: {
      title: 'Sustainable Builds',
      icon: '🌿',
      description: 'Building in harmony with nature through eco-materials, green certifications, and sustainable practices that align with stewardship values.',
      features: [
        'LEED and Green Building certification',
        'Eco-friendly material sourcing',
        'Energy-efficient systems',
        'Water conservation solutions',
        'Waste reduction strategies',
        'Renewable energy integration'
      ],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      pricing: {
        starter: { name: 'Green Start', price: 'From $20,000', features: ['Basic green features', 'Energy audit', 'Eco-material options'] },
        standard: { name: 'Green Plus', price: 'From $50,000', features: ['Full green integration', 'Solar options', 'Certification support', 'Water systems'] },
        premium: { name: 'Net Zero', price: 'From $100,000', features: ['Net zero energy', 'Full certification', 'Advanced systems', 'Monitoring'] }
      }
    },
    renovation: {
      title: 'Renovations',
      icon: '🔨',
      description: 'Respectful updates that preserve heritage while introducing modern comfort, efficiency, and functionality to existing structures.',
      features: [
        'Heritage preservation',
        'Modern amenity integration',
        'Structural upgrades',
        'Energy efficiency improvements',
        'Cultural design elements',
        'Historical documentation'
      ],
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      pricing: {
        starter: { name: 'Refresh', price: 'From $10,000', features: ['Cosmetic updates', 'Paint and finishes', 'Basic fixtures'] },
        standard: { name: 'Renovate', price: 'From $30,000', features: ['Full renovation', 'Structural work', 'Systems upgrade', 'Design integration'] },
        premium: { name: 'Transform', price: 'From $75,000', features: ['Complete transformation', 'Heritage restoration', 'Luxury finishes', 'Smart home'] }
      }
    }
  };
  
  let activeTab = 'design';
  
  // Check for hash in URL
  const hash = window.location.hash.replace('#', '');
  if (hash && services[hash]) {
    activeTab = hash;
  }
  
  // Render tabs
  const tabsContainer = document.getElementById('services-tabs');
  if (tabsContainer) {
    tabsContainer.innerHTML = Object.keys(services).map((key) => `
      <li class="nav-item">
        <button
          class="nav-link ${activeTab === key ? 'active' : ''}"
          data-tab="${key}"
          type="button"
          role="tab"
          aria-selected="${activeTab === key}"
        >
          <span class="service-tab-icon">${services[key].icon}</span>
          ${services[key].title}
        </button>
      </li>
    `).join('');
    
    // Add click handlers
    tabsContainer.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function() {
        const tabKey = this.getAttribute('data-tab');
        setActiveTab(tabKey);
      });
    });
  }
  
  // Set active tab
  function setActiveTab(tabKey) {
    activeTab = tabKey;
    
    // Update tab buttons
    const tabButtons = document.querySelectorAll('#services-tabs button');
    tabButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-tab') === tabKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    
    // Update content
    renderServiceContent(services[tabKey]);
    renderPricing(services[tabKey].pricing);
  }
  
  // Render service content
  function renderServiceContent(service) {
    const contentContainer = document.getElementById('service-content');
    if (contentContainer) {
      contentContainer.innerHTML = `
        <div class="col-lg-6" data-aos="fade-right">
          <div class="service-image-wrapper">
            <img 
              src="${service.image}" 
              alt="${service.title}"
              class="img-fluid rounded"
              loading="lazy"
            />
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="service-content">
            <h3 class="service-content-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <h5 class="mt-4 mb-3">Key Features:</h5>
            <ul class="service-features">
              ${service.features.map(feature => `
                <li>
                  <i class="bi bi-check-circle-fill text-primary-custom"></i>
                  ${feature}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
    }
  }
  
  // Render pricing
  function renderPricing(pricing) {
    const pricingContainer = document.getElementById('pricing-container');
    if (pricingContainer) {
      pricingContainer.innerHTML = Object.keys(pricing).map((tier, index) => {
        const p = pricing[tier];
        return `
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="pricing-card ${tier === 'standard' ? 'featured' : ''}">
              ${tier === 'standard' ? '<div class="pricing-badge">Most Popular</div>' : ''}
              <h4 class="pricing-tier">${p.name}</h4>
              <div class="pricing-price">${p.price}</div>
              <ul class="pricing-features">
                ${p.features.map(feature => `
                  <li>
                    <i class="bi bi-check"></i>
                    ${feature}
                  </li>
                `).join('')}
              </ul>
              <a href="contact.html" class="btn btn-primary-custom w-100 mt-4">
                Get Started
              </a>
            </div>
          </div>
        `;
      }).join('');
    }
  }
  
  // Initialize with active tab
  renderServiceContent(services[activeTab]);
  renderPricing(services[activeTab].pricing);
});

