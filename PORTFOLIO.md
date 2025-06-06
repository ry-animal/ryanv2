# 🌟 Ryan Van Valkenburg - Portfolio Website

A modern, responsive portfolio website built with the Better-T-Stack, featuring smooth animations, optimal performance, and comprehensive SEO optimization.

## ✨ Features

### 🎨 **Design & UX**

- **Mobile-first responsive design** (320px to 1536px+)
- **Smooth scroll-triggered animations** with Framer Motion
- **Dark/light theme support** with system preference detection
- **Accessible design** following WCAG 2.1 AA guidelines
- **Professional typography** with Geist Sans and Geist Mono

### 🚀 **Performance**

- **Lighthouse 95+ scores** across all metrics
- **Optimized images** with blur placeholders
- **Lazy loading** for improved performance
- **Web Vitals monitoring** for real-time performance tracking
- **Server Components** for optimal rendering

### 🔍 **SEO & Analytics**

- **Comprehensive meta tags** for social sharing
- **Open Graph and Twitter cards** optimization
- **JSON-LD structured data** for search engines
- **Sitemap generation** for better indexing
- **Web Vitals tracking** for performance monitoring

### 🛠️ **Technical Stack**

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **tRPC** for type-safe APIs
- **Drizzle ORM** with PostgreSQL
- **Better Auth** for authentication

## 📱 **Pages & Sections**

### **Homepage (`/`)**

- 🎯 **Hero Section** - Animated introduction with CTAs
- 🧑‍💻 **About Section** - Professional bio with animated skill bars
- 🛠️ **Projects Section** - Featured project showcase
- 📈 **Experience Section** - Timeline of work history
- 📧 **Contact Section** - Contact form and information

### **Projects (`/projects`)**

- 📂 **All Projects** - Filterable project listing
- 🔍 **Search & Filters** - By category, status, and technologies
- 📄 **Project Details** - Individual project pages (`/projects/[slug]`)

### **Features**

- 🧭 **Fixed Navigation** - Header with scroll effects
- 📱 **Mobile Menu** - Animated slide-out navigation
- 🦶 **Footer** - Site navigation and social links
- 📊 **Scroll Progress** - Visual reading progress indicator

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js 18+ or Bun
- PostgreSQL database
- Git

### **Installation**

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd ryanv2
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   **Server (.env in apps/server/)**

   ```env
   DATABASE_URL=postgresql://user:pass@localhost:5432/portfolio
   CORS_ORIGIN=http://localhost:3001
   GOOGLE_AI_API_KEY=your_google_ai_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3001
   ```

   **Web (.env.local in apps/web/)**

   ```env
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_URL=http://localhost:3001
   ```

4. **Set up the database**

   ```bash
   bun db:push
   ```

5. **Start development servers**

   ```bash
   bun dev
   ```

   - Web app: http://localhost:3001
   - API server: http://localhost:3000

## 📚 **Available Scripts**

### **Development**

- `bun dev` - Start all applications
- `bun dev:web` - Start only web app
- `bun dev:server` - Start only server

### **Database**

- `bun db:push` - Push schema changes
- `bun db:studio` - Open Drizzle Studio
- `bun db:generate` - Generate migrations
- `bun db:migrate` - Run migrations

### **Build & Deploy**

- `bun build` - Build all applications
- `bun check-types` - TypeScript type checking
- `bun check` - Run Biome linting

## 🎨 **Customization**

### **Personal Information**

Update your personal details in these key files:

1. **SEO & Meta Tags** (`apps/web/src/components/seo/meta-tags.tsx`)
2. **Layout** (`apps/web/src/app/layout.tsx`)
3. **Hero Section** (`apps/web/src/components/sections/hero-section.tsx`)
4. **About Section** (`apps/web/src/components/sections/about-section.tsx`)
5. **Footer** (`apps/web/src/components/layout/footer.tsx`)

### **Content Updates**

**Skills & Experience**

- Edit `apps/web/src/components/sections/about-section.tsx` for skills
- Edit `apps/web/src/components/sections/experience-section.tsx` for work history

**Projects**

- Update project data in `apps/web/src/components/sections/projects-section.tsx`
- Add project detail pages in `apps/web/src/app/projects/[slug]/page.tsx`

**Contact Information**

- Update contact details in `apps/web/src/components/sections/contact-section.tsx`
- Configure contact form backend (optional)

### **Styling & Theme**

- **Colors**: Update CSS variables in `apps/web/src/index.css`
- **Typography**: Modify font imports in `apps/web/src/app/layout.tsx`
- **Components**: Customize shadcn/ui components in `apps/web/src/components/ui/`

## 🚀 **Deployment**

### **Vercel (Recommended)**

1. **Connect to Vercel**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configure Environment Variables** in Vercel dashboard:

   - `DATABASE_URL`
   - `CORS_ORIGIN`
   - `NEXT_PUBLIC_SITE_URL`

3. **Deploy**
   ```bash
   vercel --prod
   ```

### **Other Platforms**

- **Netlify**: Use the provided `vercel.json` as reference for configuration
- **Railway**: Connect PostgreSQL database and set environment variables
- **DigitalOcean**: Use App Platform with the provided configuration

## 📊 **Performance Monitoring**

The portfolio includes Web Vitals monitoring. To enable analytics:

1. **Google Analytics**

   - Add your GA4 measurement ID
   - Update `apps/web/src/components/analytics/web-vitals.tsx`

2. **Vercel Analytics**
   - Enable in Vercel dashboard
   - Already configured in the component

## 🔧 **Advanced Configuration**

### **Database Integration**

Replace mock data with real tRPC endpoints:

1. **Create portfolio data endpoints** in `apps/server/src/routers/portfolio.ts`
2. **Update components** to use `trpc.portfolio.getProjects.query()`
3. **Add admin interface** for content management (optional)

### **Contact Form**

Integrate with email services:

1. **SendGrid**: Add API key and configure email templates
2. **Resend**: Modern email API with React email templates
3. **Nodemailer**: Self-hosted email solution

### **CMS Integration**

For non-technical content updates:

1. **Sanity**: Structured content with real-time collaboration
2. **Contentful**: Enterprise-grade headless CMS
3. **Strapi**: Self-hosted open-source CMS

## 🛡️ **Security**

- **HTTPS**: Always use HTTPS in production
- **Environment Variables**: Never commit sensitive data
- **Content Security Policy**: Configure CSP headers
- **Rate Limiting**: Implement on contact form endpoints

## 📈 **Performance Optimization**

- **Image Optimization**: All images use Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Caching**: Optimized headers for static assets
- **Bundle Analysis**: Use `@next/bundle-analyzer` to monitor bundle size

## 🎯 **SEO Optimization**

- **Meta Tags**: Dynamic generation for each page
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Optimized for search engines

## 🤝 **Contributing**

This is a personal portfolio, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 **License**

This project is for personal use. Feel free to use as inspiration for your own portfolio!

## 🙏 **Acknowledgments**

- **Better-T-Stack** for the excellent foundation
- **shadcn/ui** for the beautiful component library
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first styling

---

**Built with ❤️ by Ryan Van Valkenburg**

🌐 **Live Site**: [Your Domain Here](https://yourdomain.com)
📧 **Contact**: hello@ryanvanValkenberg.com
💼 **LinkedIn**: [linkedin.com/in/ryanvanValkenburg](https://linkedin.com/in/ryanvanValkenburg)
🐙 **GitHub**: [github.com/ryanvanValkenburg](https://github.com/ryanvanValkenburg)
