# Deployment Guide

## 🚀 Production Deployment

### 1. Build the Project

```bash
pnpm build
```

This creates a `dist/` folder with optimized production files.

### 2. Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository

### 3. Deploy to Netlify

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Drag and drop** the `dist/` folder to Netlify

3. **Or use Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### 4. Deploy to GitHub Pages

1. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "pnpm build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   pnpm add -D gh-pages
   ```

3. **Deploy**
   ```bash
   pnpm deploy
   ```

## 🔧 Environment Setup

### Supabase Configuration

1. **Create a Supabase project** at https://supabase.com
2. **Run migrations**
   ```bash
   npx supabase db push
   ```
3. **Update credentials** in `src/lib/supabase.ts`

### Environment Variables (Optional)

Create a `.env` file for production:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Monitoring

### Lead Collection

- Monitor leads in Supabase Dashboard
- Set up email notifications for new leads
- Export data for CRM integration

### Analytics

- Add Google Analytics
- Track form submissions
- Monitor page performance

## 🔒 Security

- Supabase RLS is disabled for simplicity
- Consider enabling RLS for production with proper policies
- Use environment variables for sensitive data
- Enable HTTPS in production

## 🚀 Performance

- Images are optimized in `public/` folder
- CSS is minified in production build
- JavaScript is bundled and minified
- Consider CDN for global performance
