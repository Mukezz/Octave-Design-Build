# Octave Design and Build - Website

A premium, responsive website for Octave Design and Build, a construction design and build company specializing in innovative residential and commercial projects.

## Project Overview

This is a complete, production-ready static website built with vanilla HTML5, CSS3, and JavaScript. The site features a modern, minimalist design inspired by architectural blueprints with clean lines, ample white space, and smooth animations.

## Features

- **Fully Responsive**: Mobile-first design that works seamlessly on desktop (>1024px), tablet (768-1024px), and mobile (<768px)
- **Modern UI/UX**: Clean, elegant design with smooth animations and transitions
- **SEO Optimized**: Semantic HTML, meta tags, Open Graph tags, and structured content
- **Accessible**: WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- **Performance**: Optimized images with lazy loading, minimal dependencies
- **Interactive Elements**: 
  - Animated statistics counters
  - Project carousel/slider
  - Portfolio filter and modal gallery
  - Accordion sections for services and FAQ
  - Contact form with validation
  - Smooth scroll navigation

## File Structure

```
Octave Design Build - Cursor/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # Main JavaScript file
├── images/             # Image assets (add your images here)
└── README.md           # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in a modern web browser
2. **Local Development**: For best results, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **View the site**: Navigate to `http://localhost:8000` in your browser

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2C3E50;
    --accent-color: #E74C3C;
    --neutral-light: #ECF0F1;
    --neutral-dark: #34495E;
}
```

### Content
- Update company information in all HTML files
- Replace placeholder images in the `images/` folder
- Modify project data in `js/script.js` (projectData object)

### Images
Current images are using Unsplash placeholders. Replace with your own:
- Hero background image
- Service icons (or use SVG)
- Team member photos
- Portfolio project images
- Favicon (create `images/favicon.ico`)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Images use lazy loading for better performance
- CSS and JavaScript are optimized and minified-ready
- No external framework dependencies (vanilla JS)
- Fast load times with optimized assets

## Deployment

This is a static site that can be deployed to:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository and enable Pages
- **Any static hosting**: Upload all files to your web server

**📖 For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## Notes

- Contact form requires backend integration for actual submission
- Google Maps embed uses placeholder coordinates (update in contact.html)
- Social media links are placeholders (update with actual URLs)
- YouTube video embed is a placeholder (replace with your company video)

## License

This project is created for Octave Design and Build. All rights reserved.

---

**Built with attention to detail, just like our construction projects.**

