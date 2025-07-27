# Vercel Deployment Guide

## Project Structure Fixed ✅
- Moved React app to root level
- Converted Node.js backend to Vercel serverless functions
- Updated API endpoints to use `/api/goals`
- Fixed environment variables

## Deploy to Vercel

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select this project folder

2. **Build Settings (Auto-detected):**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy:**
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

## API Endpoints
- `GET /api/goals` - Fetch all goals
- `POST /api/goals` - Save goals

## Files Changed
- ✅ Moved all files to root level
- ✅ Created `/api/goals.js` serverless function
- ✅ Updated `.env` with correct API URL
- ✅ Fixed `vercel.json` configuration
- ✅ Removed old `service.js` backend