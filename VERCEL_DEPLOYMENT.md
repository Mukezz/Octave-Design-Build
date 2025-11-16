# Vercel Deployment Guide for Octave Design Build

This guide will help you deploy the Octave Design Build project to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import Project in Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Vercel will auto-detect the configuration

3. **Configure Build Settings**
   - **Framework Preset**: Other
   - **Build Command**: (leave empty - no build needed)
   - **Output Directory**: `.` (root directory)
   - **Install Command**: (leave empty - no dependencies needed)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

4. **For Production Deployment**
   ```bash
   vercel --prod
   ```

## Project Structure

The project contains:
- **Demo1 & Demo2**: Static HTML/CSS/JS sites
- **Demo3 & Demo4**: Static HTML/CSS/JS sites (converted from React)
- **demo-switcher.html**: Landing page to select demos

## Build Process

**No build required!** All demos are now static HTML/CSS/JS files. Simply deploy directly to Vercel.

The root `package.json` includes a script to:
- Serve locally: `npm run serve`

## Important Notes

1. **Static Sites**: Demo3 and Demo4 are now static HTML/CSS/JS sites. No build process needed.

2. **Routing**: The `vercel.json` file handles:
   - Serving `demo-switcher.html` as the homepage
   - Routing for all static demos (Demo1, Demo2, Demo3, Demo4)
   - Serving HTML files from the `html/` directories

3. **File Structure**: 
   - Demo3 files are in: `Octave Design Build - Demo3/html/`
   - Demo4 files are in: `Octave Design Build - Demo4/html/`

## Troubleshooting

### Build Fails
- Ensure Node.js version is compatible (Vercel uses Node 18.x by default)
- Check that all dependencies are listed in package.json files
- Review build logs in Vercel dashboard

### Routes Not Working
- Verify `vercel.json` configuration
- Check that `html/` folders exist for Demo3 and Demo4
- Ensure file paths match exactly (case-sensitive)
- Verify that HTML files are in the correct `html/` subdirectories

### Assets Not Loading
- Check that image paths are relative, not absolute
- Verify that all assets are included in the build output
- Check browser console for 404 errors

## Post-Deployment

After successful deployment:
1. Your site will be available at `https://your-project.vercel.app`
2. You can add a custom domain in Project Settings > Domains
3. Each push to your main branch will trigger automatic deployments

## Local Development

To serve the site locally:

```bash
# Install http-server (one-time)
npm install

# Start local server
npm run serve
```

The site will be available at `http://localhost:3000`

