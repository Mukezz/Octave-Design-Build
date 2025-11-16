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
   - **Build Command**: `npm run build` (or leave empty if builds are already done)
   - **Output Directory**: `.` (root directory)
   - **Install Command**: `npm run install:all` (or `npm install`)

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
- **Demo3 & Demo4**: React applications (need to be built)
- **demo-switcher.html**: Landing page to select demos

## Build Process

The root `package.json` includes scripts to:
- Build both React demos: `npm run build`
- Install dependencies for all demos: `npm run install:all`
- Build individual demos: `npm run build:demo3` or `npm run build:demo4`

## Important Notes

1. **React Apps**: Demo3 and Demo4 need to be built before deployment. The build process is automated via the root `package.json`.

2. **Routing**: The `vercel.json` file handles:
   - Serving `demo-switcher.html` as the homepage
   - Routing for static demos (Demo1, Demo2)
   - Client-side routing for React apps (Demo3, Demo4)

3. **Build Folders**: Make sure the `build` folders for Demo3 and Demo4 exist. If not, run:
   ```bash
   npm run build
   ```

4. **Environment Variables**: If your React apps need environment variables, add them in Vercel dashboard under Project Settings > Environment Variables.

## Troubleshooting

### Build Fails
- Ensure Node.js version is compatible (Vercel uses Node 18.x by default)
- Check that all dependencies are listed in package.json files
- Review build logs in Vercel dashboard

### Routes Not Working
- Verify `vercel.json` configuration
- Check that build folders exist for Demo3 and Demo4
- Ensure file paths match exactly (case-sensitive)

### Assets Not Loading
- Check that image paths are relative, not absolute
- Verify that all assets are included in the build output
- Check browser console for 404 errors

## Post-Deployment

After successful deployment:
1. Your site will be available at `https://your-project.vercel.app`
2. You can add a custom domain in Project Settings > Domains
3. Each push to your main branch will trigger automatic deployments

## Manual Build (if needed)

If you want to build locally before deploying:

```bash
# Install dependencies for all React apps
npm run install:all

# Build all React apps
npm run build
```

Then commit and push the build folders.

