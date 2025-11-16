// About page functionality

document.addEventListener('DOMContentLoaded', function() {
  // Timeline data
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
  
  // Render timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = timeline.map((item, index) => `
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-year">${item.year}</div>
          <h4 class="timeline-title">${item.title}</h4>
          <p class="timeline-description">${item.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  // Values data
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
  
  // Render values
  const valuesContainer = document.getElementById('values-container');
  if (valuesContainer) {
    valuesContainer.innerHTML = values.map((value, index) => `
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="value-card text-center">
          <div class="value-icon">${value.icon}</div>
          <h4 class="value-title">${value.title}</h4>
          <p class="value-description">${value.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  // Team data
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
  
  // Render team
  const teamContainer = document.getElementById('team-container');
  if (teamContainer) {
    teamContainer.innerHTML = team.map((member, index) => `
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card card-custom team-card">
          <div class="team-image-wrapper">
            <img 
              src="${member.image}" 
              class="card-img-top" 
              alt="${member.name}"
              loading="lazy"
            />
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-subtitle text-primary-custom">${member.role}</p>
            <p class="card-text">${member.bio}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
});

