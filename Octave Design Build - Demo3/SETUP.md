# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React and React DOM
- React Router
- Bootstrap 5
- AOS (Animate On Scroll)
- React Slick (for carousels)
- React Masonry CSS
- Framer Motion

### Step 2: Start Development Server
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

This creates an optimized `build` folder ready for deployment.

## 📝 Important Notes

1. **Images**: Currently using Unsplash placeholder images. Replace with your own images in production:
   - Place images in `public/images/`
   - Update image paths in component files
   - Optimize images for web (WebP format recommended)

2. **Contact Form**: The form currently logs to console. Connect to your backend API:
   - Update form submission handler in `src/pages/Contact.js`
   - Add reCAPTCHA for production
   - Implement proper validation

3. **Google Maps**: The map embed uses a placeholder. Update with your actual location:
   - Edit the iframe src in `src/pages/Contact.js`
   - Or use Google Maps API for enhanced features

4. **Video**: Replace the YouTube embed URL in `src/pages/About.js` with your actual video

5. **Content**: Customize all content in:
   - `src/pages/Home.js` - Homepage content
   - `src/pages/About.js` - Team and company info
   - `src/pages/Services.js` - Services and pricing
   - `src/pages/Portfolio.js` - Project portfolio
   - `src/components/Footer.js` - Footer information

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #00695C;
  --accent-color: #FFD700;
  --neutral-light: #F5F5F5;
  --neutral-dark: #424242;
}
```

### Fonts
Update Google Fonts link in `public/index.html` if you want different fonts.

## ✅ Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on mobile (hamburger menu)
- [ ] Forms validate properly
- [ ] Images load (replace placeholders)
- [ ] Responsive design works on all screen sizes
- [ ] Animations are smooth
- [ ] No console errors

## 🐛 Troubleshooting

**Issue**: `npm install` fails
- Solution: Make sure you have Node.js v14+ installed
- Try: `npm cache clean --force` then `npm install`

**Issue**: Port 3000 already in use
- Solution: The app will prompt to use a different port, or kill the process using port 3000

**Issue**: Styles not loading
- Solution: Make sure Bootstrap CSS is imported in `src/App.js`
- Check that all CSS files are properly imported

**Issue**: Icons not showing
- Solution: Bootstrap Icons CDN is in `public/index.html` - ensure internet connection

## 📞 Next Steps

1. Replace placeholder content with your actual content
2. Add your own images
3. Connect contact form to backend
4. Update social media links
5. Test on multiple devices
6. Deploy to hosting service

For detailed documentation, see `README.md`

