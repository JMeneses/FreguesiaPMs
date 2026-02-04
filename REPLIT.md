# Replit Deployment Guide - Freguesia2026

Follow these steps to successfully deploy and run the application on Replit using your Neon PostgreSQL database.

## 1. Import to Replit
- Create a new Repl by importing your GitHub repository.

## 2. Set Up Environment Variables (Secrets)
Replit uses "Secrets" to store sensitive environment variables. Open the **Secrets** tool (lock icon) in Replit and add the following:

| Key | Value | Description |
|-----|-------|-------------|
| `DATABASE_URL` | `postgresql://...` | Your Neon connection string (include `?sslmode=require`) |
| `NEXTAUTH_SECRET` | `your-secret-key` | A random 32+ character string |
| `NEXTAUTH_URL` | `https://your-repl-name.your-username.repl.co` | Your **public** Replit URL |

> [!IMPORTANT]
> `NEXTAUTH_URL` must be the public URL where your app is accessible, not `localhost`.

## 3. Configure the Database
In the Replit shell, run these commands to prepare the database:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations to Neon
npx prisma migrate deploy

# Seed the database (creates the admin user)
npx prisma db seed
```

## 4. Run the Application
Replit should automatically detect the `npm run dev` or `npm start` command. 

- For **Development**: `npm run dev`
- For **Production**: `npm run build && npm start`

## 5. Troubleshooting Authentication
If you cannot log in:
1. **Check Logs**: Look at the Replit console output. I have added detailed logging that will show "Authentication failed: User not found" or "Invalid password".
2. **Verify URL**: Ensure `NEXTAUTH_URL` in Secrets matches the address in your browser exactly (including `https://`).
3. **Database Seed**: Ensure you ran `npx prisma db seed`. The default admin is `admin@freguesia.pt` with password `admin123`.
