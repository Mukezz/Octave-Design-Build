# Octave Design and Build - Website

A premium, world-class website for Octave Design and Build, a construction design and build company specializing in innovative residential and commercial projects with sustainable materials and custom designs.

## 🌟 Features

- **Modern React Architecture**: Built with React 18 and React Router for seamless navigation
- **Responsive Design**: Fully responsive using Bootstrap 5, mobile-first approach
- **Cultural Sensitivity**: Subtle Islamic-inspired design elements (geometric patterns, harmonious colors)
- **Performance Optimized**: Lazy loading, image optimization, code splitting
- **SEO Ready**: Semantic HTML, meta tags, structured data
- **Accessibility**: WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- **Smooth Animations**: AOS (Animate On Scroll) and Framer Motion for elegant interactions

## 📋 Pages

1. **Home**: Hero slider, services teaser, featured projects, stats, and CTA
2. **About**: Company story, timeline, team bios, values, and video embed
3. **Services**: Detailed service breakdowns with pricing tiers
4. **Portfolio**: Filterable project gallery with modal case studies
5. **Contact**: Contact form, map integration, and FAQ section

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd "Ideas/Octave Design Build - Demo3"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📁 Project Structure

```
octave-design-build/
├── public/
│   ├── index.html          # Main HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.js       # Navigation header
│   │   ├── Header.css
│   │   ├── Footer.js       # Site footer
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── Portfolio.js
│   │   ├── Portfolio.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── styles/
│   │   └── App.css         # Global styles
│   ├── App.js              # Main app component with routing
│   ├── index.js            # Entry point
│   └── index.css           # Base styles
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette

- **Primary**: `#00695C` (Deep green - serenity and growth)
- **Accent**: `#FFD700` (Gold - excellence and inspiration)
- **Neutral Light**: `#F5F5F5` (Soft white)
- **Neutral Dark**: `#424242` (Charcoal)

### Typography

- **Headings**: Playfair Display (elegant serif)
- **Body**: Open Sans (readable sans-serif)
- **Arabic-inspired**: Amiri (for special elements)

### Design Principles

- Subtle geometric patterns inspired by Islamic art
- Harmonious color schemes
- Balance and modesty in design
- Cultural inclusivity and respect
- Sustainability aligned with stewardship values

## 🔧 Technologies Used

- **React** 18.2.0 - UI library
- **React Router** 6.20.0 - Client-side routing
- **Bootstrap** 5.3.2 - Responsive CSS framework
- **AOS** 2.3.4 - Animate on scroll library
- **React Slick** 0.29.0 - Carousel/slider component
- **React Masonry CSS** 1.0.16 - Masonry grid layout
- **Framer Motion** 10.16.16 - Animation library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast text on patterns
- Respects `prefers-reduced-motion`

## 🚀 Deployment

### Static Hosting (Recommended)

The build output can be deployed to any static hosting service:

1. **Netlify:**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `build`

2. **Vercel:**
   - Import project
   - Framework preset: Create React App
   - Build command: `npm run build`

3. **GitHub Pages:**
   ```bash
   npm install --save-dev gh-pages
   # Add to package.json scripts:
   # "deploy": "gh-pages -d build"
   npm run deploy
   ```

### Environment Variables

For production, you may want to set:
- `REACT_APP_API_URL` - If connecting to a backend API
- `REACT_APP_GOOGLE_MAPS_API_KEY` - For enhanced map features

## 📝 Customization

### Updating Content

- **Company Info**: Edit `src/components/Footer.js` and `src/pages/Contact.js`
- **Services**: Modify `src/pages/Services.js`
- **Portfolio**: Update projects array in `src/pages/Portfolio.js`
- **Team**: Edit team array in `src/pages/About.js`

### Styling

- **Colors**: Update CSS variables in `src/index.css`
- **Fonts**: Modify Google Fonts link in `public/index.html`
- **Components**: Edit individual CSS files in `src/components/` and `src/pages/`

### Images

Replace placeholder images (currently from Unsplash) with your own:
- Place images in `public/images/`
- Update image paths in component files
- Optimize images for web (recommended: WebP format)

## 🔒 Privacy & Security

- Form submissions should be connected to a secure backend
- Add reCAPTCHA for production contact forms
- Implement proper data validation and sanitization
- Follow GDPR/privacy regulations for data collection

## 📞 Support

For questions or issues:
- Email: info@octavedesignbuild.com
- Check the documentation in code comments
- Review React and Bootstrap documentation

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🙏 Acknowledgments

- Design inspired by principles of harmony, balance, and cultural sensitivity
- Built with respect for diverse communities and sustainable practices
- Images from Unsplash (replace with your own in production)

---

**Built with ❤️ for Octave Design and Build**

*Harmony in Structure: Design, Build, Inspire – Rooted in Balance and Beauty*

