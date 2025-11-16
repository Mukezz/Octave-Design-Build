# Deployment Guide - Octave Design and Build Website

This guide covers multiple deployment options for the static website.

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Method A: Drag & Drop**
1. Go to [netlify.com](https://www.netlify.com) and sign up/login
2. Drag and drop the entire `Octave Design Build - Cursor` folder onto the Netlify dashboard
3. Your site will be live in seconds with a free `.netlify.app` domain
4. Optionally add a custom domain in Site settings → Domain management

**Method B: Git Integration**
1. Create a GitHub repository and push your code
2. Connect your GitHub account to Netlify
3. Select your repository
4. Build settings:
   - Build command: (leave empty - no build needed)
   - Publish directory: `/` (root)
5. Click "Deploy"

**Custom Domain:**
- Go to Site settings → Domain management
- Add your custom domain (e.g., `octavedesignbuild.com`)
- Follow DNS configuration instructions

---

### Option 2: Vercel

1. Go to [vercel.com](https://www.vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your Git repository OR use Vercel CLI:
   ```bash
   npm i -g vercel
   cd "Ideas/Octave Design Build - Cursor"
   vercel
   ```
4. Follow the prompts (default settings work fine)
5. Your site will be deployed with a `.vercel.app` domain

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain

---

### Option 3: GitHub Pages (Free)

1. Create a new GitHub repository (e.g., `octave-design-build-website`)
2. Push your code to GitHub:
   ```bash
   cd "Ideas/Octave Design Build - Cursor"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/octave-design-build-website.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Choose `main` branch and `/` (root) folder
6. Click "Save"
7. Your site will be live at `https://YOUR_USERNAME.github.io/octave-design-build-website`

**Custom Domain:**
- Create a `CNAME` file in the root with your domain name
- Configure DNS records as instructed by GitHub

---

## Traditional Web Hosting

### Option 4: cPanel / Shared Hosting

1. **Prepare files:**
   - Ensure all files are in the root folder
   - No build step needed

2. **Upload via FTP/SFTP:**
   - Use FileZilla, Cyberduck, or your hosting provider's file manager
   - Upload all files to `public_html` or `www` directory
   - Maintain folder structure (css/, js/, images/)

3. **File structure on server:**
   ```
   public_html/
   ├── index.html
   ├── about.html
   ├── services.html
   ├── portfolio.html
   ├── contact.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── script.js
   └── images/
       └── (your images)
   ```

4. **Test:** Visit your domain to verify the site works

---

### Option 5: AWS S3 + CloudFront

1. **Create S3 Bucket:**
   ```bash
   aws s3 mb s3://octave-design-build-website
   ```

2. **Upload files:**
   ```bash
   cd "Ideas/Octave Design Build - Cursor"
   aws s3 sync . s3://octave-design-build-website --exclude ".git/*"
   ```

3. **Configure bucket for static hosting:**
   - Enable "Static website hosting"
   - Set `index.html` as index document
   - Make bucket public (or use bucket policy)

4. **Optional - Add CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Add custom domain with SSL

---

### Option 6: Azure Static Web Apps

1. Install Azure CLI:
   ```bash
   # Windows
   winget install -e --id Microsoft.AzureCLI
   ```

2. Login and create:
   ```bash
   az login
   az staticwebapp create \
     --name octave-design-build \
     --resource-group your-resource-group \
     --source "Ideas/Octave Design Build - Cursor" \
     --location "East US2" \
     --branch main \
     --app-location "/" \
     --output-location "/"
   ```

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All placeholder images are replaced with actual images
- [ ] Contact information is updated in all HTML files
- [ ] Social media links are updated (or removed if not ready)
- [ ] Google Maps embed coordinates are updated in `contact.html`
- [ ] YouTube video embed is updated in `about.html` (or removed)
- [ ] Favicon is added to `images/favicon.ico`
- [ ] All internal links work correctly
- [ ] Form submission endpoint is configured (if using backend)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Verify all images load correctly
- [ ] Check that JavaScript features work (carousel, modals, forms)

---

## Post-Deployment Steps

1. **Test the live site:**
   - Check all pages load correctly
   - Test navigation
   - Verify forms work
   - Test on mobile devices

2. **SEO Setup:**
   - Submit sitemap to Google Search Console
   - Verify meta tags are correct
   - Check Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

3. **Analytics (Optional):**
   - Add Google Analytics tracking code
   - Add to `<head>` section of all HTML files

4. **Performance:**
   - Test with [PageSpeed Insights](https://pagespeed.web.dev/)
   - Optimize images if needed
   - Enable compression on your hosting provider

5. **SSL Certificate:**
   - Most modern hosting providers include free SSL
   - Ensure HTTPS is enabled (required for forms)

---

## Environment-Specific Considerations

### Contact Form
The contact form currently shows a success message but doesn't actually send emails. To make it functional:

**Option A: Use a form service**
- [Formspree](https://formspree.io/) - Add action URL to form
- [Netlify Forms](https://www.netlify.com/products/forms/) - Add `netlify` attribute
- [EmailJS](https://www.emailjs.com/) - Client-side email sending

**Option B: Backend integration**
- Create an API endpoint to handle form submissions
- Update form action in `contact.html`

### Google Maps
Update the iframe `src` in `contact.html` with your actual business address coordinates.

### YouTube Video
Replace the placeholder video URL in `about.html` with your company introduction video.

---

## Quick Deploy Commands

### Netlify CLI
```bash
npm install -g netlify-cli
cd "Ideas/Octave Design Build - Cursor"
netlify deploy
# For production: netlify deploy --prod
```

### Vercel CLI
```bash
npm install -g vercel
cd "Ideas/Octave Design Build - Cursor"
vercel
```

### GitHub Pages (via gh-pages package)
```bash
npm install -g gh-pages
cd "Ideas/Octave Design Build - Cursor"
gh-pages -d .
```

---

## Troubleshooting

**Issue: Images not loading**
- Check file paths are correct (case-sensitive on Linux servers)
- Ensure images are uploaded to the `images/` folder
- Verify image file extensions match

**Issue: CSS/JS not loading**
- Check file paths in HTML (should be `css/styles.css`, not `/css/styles.css` if in subdirectory)
- Clear browser cache
- Check browser console for 404 errors

**Issue: Form not submitting**
- Check browser console for errors
- Verify form action URL is correct
- Ensure backend/API is configured if using custom endpoint

**Issue: Mobile menu not working**
- Ensure JavaScript file is loaded
- Check browser console for errors
- Verify hamburger button has correct ID

---

## Recommended Hosting Providers

**Free Options:**
- Netlify (recommended for static sites)
- Vercel
- GitHub Pages
- Cloudflare Pages

**Paid Options:**
- SiteGround
- Bluehost
- HostGator
- AWS S3 + CloudFront
- Azure Static Web Apps

---

## Need Help?

If you encounter issues during deployment:
1. Check browser console for errors
2. Verify all files are uploaded correctly
3. Test locally first (open index.html in browser)
4. Check hosting provider documentation
5. Ensure file permissions are correct (644 for files, 755 for folders)

---

**Your site is ready to go live! Choose the deployment method that works best for you.**

