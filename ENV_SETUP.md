# Production Environment Variables Checklist

Before deploying to Vercel, ensure you have the following environment variables configured:

## Required Variables

### 1. DATABASE_URL
**Purpose**: PostgreSQL database connection string  
**Where to get it**: Neon.tech dashboard after creating a project  
**Format**: `postgresql://username:password@host.region.neon.tech/dbname?sslmode=require`  
**Example**: `postgresql://user:pass@ep-cool-name-123.us-east-2.aws.neon.tech/neondb?sslmode=require`

### 2. NEXTAUTH_SECRET
**Purpose**: Secret key for NextAuth.js session encryption  
**How to generate**:
- Windows PowerShell: `[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))`
- Online: https://generate-secret.vercel.app/32
- Command line: `openssl rand -base64 32`

**Example**: `Xj8K9mP2nQ5rT7vW1yZ3aB4cD6eF8gH0`

### 3. NEXTAUTH_URL
**Purpose**: Your application's public URL  
**Development**: `http://localhost:3000`  
**Production**: `https://your-app-name.vercel.app` or your custom domain

## Setting Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   - Click "Add New"
   - Enter **Name** (e.g., `DATABASE_URL`)
   - Enter **Value**
   - Select environments: Production, Preview, Development (or as needed)
   - Click "Save"

## Security Best Practices

✅ **DO**:
- Use strong, randomly generated secrets
- Keep `.env` files out of version control
- Use different secrets for development and production
- Rotate secrets periodically

❌ **DON'T**:
- Commit `.env` files to Git
- Share secrets in public channels
- Use simple or predictable secrets
- Reuse secrets across projects

## Verification

After setting variables in Vercel:
1. Trigger a new deployment
2. Check deployment logs for connection errors
3. Test admin login functionality
4. Verify database operations work correctly

## Troubleshooting

**Issue**: "Invalid `prisma.xxx()` invocation"  
**Solution**: Check DATABASE_URL format and ensure database is accessible

**Issue**: "NEXTAUTH_URL mismatch"  
**Solution**: Ensure NEXTAUTH_URL matches your actual deployment URL

**Issue**: Database connection timeout  
**Solution**: Verify Neon database is not paused (free tier auto-pauses after inactivity)
