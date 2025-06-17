# Environment Variables Setup Guide

## 📁 File Structure

Your environment files should be structured as follows:

```
ryanv2/
├── apps/
│   ├── server/
│   │   └── .env                 # Server-side environment variables
│   └── web/
│       └── .env.local           # Web app environment variables
└── env-examples/                # Example files (check these into git)
    ├── server.env.example
    ├── web.env.local.example
    └── production.env.example
```

## 🔧 Local Development Setup

### 1. Server Environment (`apps/server/.env`)

```bash
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# CORS & Security
CORS_ORIGIN=http://localhost:3001

# Authentication
BETTER_AUTH_SECRET=your-super-secure-secret-key-at-least-32-chars
BETTER_AUTH_URL=http://localhost:3000

# AI Integration (Optional - for /ai chat feature)
GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-api-key-here

# Public URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### 2. Web App Environment (`apps/web/.env.local`)

```bash
# API URLs
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

## 🌐 Production Setup

### Environment Variables for https://rv2.run

**Platform:** Vercel (for web app)
**Database:** Supabase/Railway/Neon (PostgreSQL)

#### Production Environment Variables:

```bash
# Database Configuration (Production)
DATABASE_URL=postgresql://user:password@your-prod-db-host:5432/portfolio

# CORS & Security (Production)
CORS_ORIGIN=https://rv2.run

# Authentication (Production)
BETTER_AUTH_SECRET=your-production-secret-key-min-32-chars-very-secure
BETTER_AUTH_URL=https://rv2.run

# AI Integration (Production)
GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-api-key-here

# Public URLs (Production)
NEXT_PUBLIC_SITE_URL=https://rv2.run
NEXT_PUBLIC_SERVER_URL=https://rv2.run
```

## 📝 Environment Variable Descriptions

### Required Variables

| Variable               | Description                         | Local Example                                     | Production Example                                          |
| ---------------------- | ----------------------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| `DATABASE_URL`         | PostgreSQL connection string        | `postgresql://user:pass@localhost:5432/portfolio` | `prisma+postgres://accelerate.prisma-data.net/?api_key=...` |
| `DIRECT_DATABASE_URL`  | Direct DB connection for migrations | Not needed locally                                | `postgresql://user:pass@host:5432/prod_db`                  |
| `CORS_ORIGIN`          | Allowed origin for CORS             | `http://localhost:3001`                           | `https://rv2.run`                                           |
| `BETTER_AUTH_SECRET`   | Secret key for auth tokens          | 32+ character string                              | 32+ character string                                        |
| `BETTER_AUTH_URL`      | Base URL for auth callbacks         | `http://localhost:3000`                           | `https://rv2.run`                                           |
| `NEXT_PUBLIC_SITE_URL` | Public site URL                     | `http://localhost:3001`                           | `https://rv2.run`                                           |

### Optional Variables

| Variable                       | Description                    | Notes                                         |
| ------------------------------ | ------------------------------ | --------------------------------------------- |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI API key for /ai chat | Optional - chat feature won't work without it |
| `NEXT_PUBLIC_SERVER_URL`       | Server API URL                 | Only needed if separate API server            |

## 🚀 Quick Setup Commands

### 1. Copy Example Files

```bash
# Copy server environment
cp env-examples/server.env.example apps/server/.env

# Copy web environment
cp env-examples/web.env.local.example apps/web/.env.local
```

### 2. Edit Your Values

```bash
# Edit server environment
nano apps/server/.env

# Edit web environment
nano apps/web/.env.local
```

### 3. Generate Secure Secrets

```bash
# Generate BETTER_AUTH_SECRET (32+ characters)
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 🗄️ Database Setup

### Local Development (PostgreSQL)

```bash
# Install PostgreSQL
brew install postgresql  # macOS
sudo apt-get install postgresql  # Ubuntu

# Create database
createdb portfolio

# Update DATABASE_URL in apps/server/.env
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
```

### Production (Recommended: Supabase)

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Copy connection string to `DATABASE_URL`
4. Run migrations: `bun db:push`

## 🔑 API Keys Setup

### Google AI API Key (Optional)

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Create API key
3. Add to `GOOGLE_GENERATIVE_AI_API_KEY`

## ✅ Verification

Test your setup:

```bash
# Check environment variables are loaded
bun dev

# Test database connection
bun db:push

# Test AI chat (if configured)
# Visit http://localhost:3001/ai
```

## 🔒 Security Notes

- **Never commit `.env` files to git**
- **Use different secrets for production vs development**
- **Rotate secrets regularly**
- **Use environment variable management tools in production**

## 🐛 Troubleshooting

### Common Issues

1. **Database connection failed**

   - Check `DATABASE_URL` format
   - Ensure PostgreSQL is running
   - Verify credentials

2. **CORS errors**

   - Check `CORS_ORIGIN` matches your frontend URL
   - Ensure no trailing slashes

3. **Auth not working**

   - Verify `BETTER_AUTH_SECRET` is 32+ characters
   - Check `BETTER_AUTH_URL` matches your deployment

4. **AI chat not working**
   - Verify `GOOGLE_GENERATIVE_AI_API_KEY` is valid
   - Check API quotas/billing
