# Deployment Guide - Freguesia2026

This guide will walk you through deploying your Freguesia2026 application to Vercel with a PostgreSQL database.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Git installed on your computer

## Step 1: Set Up PostgreSQL Database (Neon)

We'll use Neon's free PostgreSQL database for this deployment.

1. **Create a Neon Account**
   - Go to [neon.tech](https://neon.tech)
   - Sign up for a free account (no credit card required)

2. **Create a New Project**
   - Click "Create Project"
   - Choose a project name: `freguesia2026`
   - Select a region close to your users (e.g., Europe for Portugal)
   - Click "Create Project"

3. **Get Your Database Connection String**
   - After creation, you'll see a connection string like:
     ```
     postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
     ```
   - **Copy this connection string** - you'll need it soon

## Step 2: Update Local Environment

1. **Update your `.env` file** with the Neon database URL:
   ```bash
   DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"
   NEXTAUTH_SECRET="supersecret123"
   NEXTAUTH_URL="http://localhost:3000"
   ```

2. **Generate a secure NEXTAUTH_SECRET** (optional but recommended):
   ```bash
   # On Windows PowerShell:
   [Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
   
   # Or use an online generator: https://generate-secret.vercel.app/32
   ```

## Step 3: Migrate Database

1. **Delete old SQLite migrations** (if any):
   ```bash
   # Delete the migrations folder if it exists
   Remove-Item -Recurse -Force prisma/migrations
   ```

2. **Create new PostgreSQL migration**:
   ```bash
   npx prisma migrate dev --name init
   ```

3. **Seed the database** (optional - creates admin user):
   ```bash
   npx prisma db seed
   ```

4. **Test locally**:
   ```bash
   npm run dev
   ```
   - Visit `http://localhost:3000`
   - Try logging into admin at `http://localhost:3000/admin/login`
   - Default credentials: `admin@freguesia.pt` / `admin123`

## Step 4: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Commit**:
   ```bash
   git commit -m "Initial commit - Ready for deployment"
   ```

4. **Create a GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `freguesia2026`
   - **Do NOT** initialize with README (we already have code)
   - Click "Create repository"

5. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/freguesia2026.git
   git branch -M main
   git push -u origin main
   ```

## Step 5: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"

2. **Import Repository**:
   - Click "Import Git Repository"
   - Select your `freguesia2026` repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

4. **Add Environment Variables**:
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Your Neon connection string |
   | `NEXTAUTH_SECRET` | Your generated secret |
   | `NEXTAUTH_URL` | `https://your-project-name.vercel.app` |

   > **Note**: For `NEXTAUTH_URL`, you can use the Vercel preview URL initially, then update it after deployment.

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete

## Step 6: Post-Deployment

1. **Update NEXTAUTH_URL**:
   - After deployment, copy your Vercel URL (e.g., `freguesia2026.vercel.app`)
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `NEXTAUTH_URL` to `https://your-actual-url.vercel.app`
   - Redeploy (Deployments → ⋯ → Redeploy)

2. **Test Your Site**:
   - Visit your Vercel URL
   - Test navigation
   - Try admin login at `/admin/login`

3. **Set Up Custom Domain** (Optional):
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add your custom domain (e.g., `freguesia.pt`)
   - Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check Vercel build logs for errors
- Ensure all environment variables are set correctly
- Verify `DATABASE_URL` is accessible from Vercel

### Database Connection Issues
- Ensure Neon database is in the same region as Vercel deployment
- Check that connection string includes `?sslmode=require`
- Verify database is not paused (Neon free tier pauses after inactivity)

### Authentication Not Working
- Verify `NEXTAUTH_URL` matches your actual deployment URL
- Ensure `NEXTAUTH_SECRET` is set
- Check browser console for errors

### Images Not Loading
- Ensure images are in the `public` folder
- Check `next.config.ts` for image domain configuration
- Verify file paths are correct (case-sensitive on Vercel)

## Updating Your Deployment

After making changes locally:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically redeploy your site!

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host/db` |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Random 32-character string |
| `NEXTAUTH_URL` | Your app's URL | `https://your-app.vercel.app` |

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Neon Docs**: [neon.tech/docs](https://neon.tech/docs)
- **Prisma Docs**: [prisma.io/docs](https://prisma.io/docs)
