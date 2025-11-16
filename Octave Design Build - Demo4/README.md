# Octave Design and Build - Website

A premium, world-class website for Octave Design and Build, a construction design and build company specializing in innovative residential and commercial projects.

## 🌟 Features

- **Dark Theme Design**: Sophisticated dark theme with cyber blue accents, optimized for evening browsing
- **Fully Responsive**: Mobile-first design with Bootstrap 5, works seamlessly on all devices
- **Theme Toggle**: Switch between dark and light themes with localStorage persistence
- **Modern Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Meta tags, structured data (JSON-LD), and semantic HTML
- **Accessibility**: WCAG 2.1 AA compliant with ARIA labels, keyboard navigation, and proper contrast
- **Performance**: Code splitting, lazy loading, and optimized images
- **Interactive Components**: 
  - Hero carousel with parallax effects
  - Filterable portfolio gallery with masonry layout
  - Animated statistics counters
  - Contact form with validation
  - Project modals with case studies

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Note on Assets

- **Favicon**: Add your favicon.ico file to the `public/` directory (recommended sizes: 16x16, 32x32, 192x192)
- **Images**: The site uses Unsplash placeholder images. Replace with your actual images in `public/images/` or update the URLs in the components

### Installation

1. Navigate to the project directory:
```bash
cd "Ideas/Octave Design Build - Demo4"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized static files ready for deployment.

## 📁 Project Structure

```
Octave Design Build - Demo4/
├── public/
│   ├── index.html          # HTML template with meta tags
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # Site favicon
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.js      # Navigation with theme toggle
│   │   ├── Header.css
│   │   ├── Footer.js      # Footer with links and social icons
│   │   └── Footer.css
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.js  # Theme management
│   ├── pages/             # Page components
│   │   ├── Home.js        # Homepage with hero, services, projects, stats
│   │   ├── About.js       # About page with timeline and team
│   │   ├── Services.js    # Services with pricing tiers
│   │   ├── Portfolio.js   # Portfolio gallery with filters and modals
│   │   └── Contact.js     # Contact form and FAQ
│   ├── styles/
│   │   └── App.css        # Global styles and CSS variables
│   ├── App.js             # Main app with routing
│   └── index.js           # Entry point
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette

**Dark Theme (Default):**
- Primary Background: `#1a1a1a`
- Secondary Background: `#2c2c2c`
- Accent Color: `#00bfff` (Cyber Blue)
- Text Primary: `#ffffff`
- Text Secondary: `#cccccc`
- Text Muted: `#999999`

**Light Theme:**
- Primary Background: `#ffffff`
- Secondary Background: `#f5f5f5`
- Accent Color: `#2C3E50`
- Text Primary: `#1a1a1a`

### Typography

- **Headings**: Orbitron (Futuristic sans-serif)
- **Body**: Roboto Mono (Code-like precision)
- **Brand**: Montserrat (Logo and navigation)

### Breakpoints

- Extra Small: < 576px
- Small: ≥ 576px
- Medium: ≥ 768px
- Large: ≥ 992px
- Extra Large: ≥ 1200px

## 🛠️ Technologies Used

- **React 18.2.0**: UI library
- **React Router DOM 6.20.0**: Client-side routing
- **Bootstrap 5.3.2**: Responsive grid and components
- **Framer Motion 10.16.16**: Animations
- **React Masonry CSS 1.0.16**: Masonry grid layout
- **React Slick 0.29.0**: Carousel/slider component
- **Slick Carousel 1.8.1**: Carousel styling

## 📱 Pages

### Home
- Hero carousel with dark-filtered construction images
- Services teaser grid
- Featured projects masonry layout
- Animated statistics section
- CTA banner

### About
- Company story accordion
- Interactive timeline
- Team member cards
- Core values section
- Embedded video

### Services
- Service breakdown with tabs
- Detailed service descriptions
- Pricing tiers (Midnight, Eclipse, Stellar)
- Feature lists and images

### Portfolio
- Filterable gallery (All, Residential, Commercial)
- Masonry grid layout
- Project modals with case studies
- Before/after image comparisons
- Infinite scroll loading

### Contact
- Contact form with validation
- Google Maps embed
- Contact information
- Business hours
- FAQ accordion

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip to main content link
- Color contrast ratio > 4.5:1
- Focus indicators
- Screen reader friendly
- Reduced motion support

## 🔍 SEO Features

- Meta tags (title, description, Open Graph)
- Structured data (JSON-LD) for Organization
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy

## 🚀 Performance Optimizations

- Code splitting with React.lazy()
- Lazy loading images (loading="lazy")
- Suspense boundaries for loading states
- Optimized bundle size
- Efficient re-renders

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

The `build` folder contains optimized static files that can be deployed to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

### Environment Variables

No environment variables are required for basic functionality. For production, you may want to:
- Add Google Maps API key (if using custom maps)
- Configure analytics
- Set up form submission endpoint

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is proprietary and confidential.

## 👥 Team

Built for Octave Design and Build - Premium construction services.

## 🔗 Links

- [Live Demo](#) (Add your deployment URL)
- [Documentation](#) (Add documentation link if available)

## 📞 Support

For questions or support, contact:
- Email: info@octavedesign.com
- Phone: +1 (555) 123-4567

---

**Tagline**: Harmony in Structure: Design, Build, Inspire

