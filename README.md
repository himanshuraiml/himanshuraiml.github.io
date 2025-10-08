# Dr. Himanshu Rai - Academic Portfolio Website

A professional portfolio website for Dr. Sarah Johnson, Assistant Professor in Computer Science & Engineering, built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Professional Design**: Clean, academic-focused layout with responsive design
- **Complete Portfolio**: About, Research, Publications, Teaching, Blog, and Contact pages
- **Blog System**: Full-featured blog with categories, search, and filtering
- **Publications Management**: Academic publication formatting with filtering and export
- **Teaching Portfolio**: Course listings, philosophy, and student resources
- **Contact Form**: Professional contact form with validation
- **SEO Optimized**: Meta tags, sitemap, and performance optimization
- **Mobile Responsive**: Optimized for all device sizes

## 🚀 Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify/Vercel ready

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog system
│   │   ├── [slug]/        # Individual blog posts
│   │   └── page.tsx       # Blog listing
│   ├── contact/           # Contact form
│   ├── publications/      # Publications listing
│   ├── research/          # Research areas
│   ├── teaching/          # Teaching portfolio
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   └── Hero.tsx          # Homepage hero section
├── lib/                  # Utilities and data
│   └── blog.ts          # Blog data and utilities
└── public/              # Static assets
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/academic-portfolio.git
   cd academic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Customization Guide

### Personal Information
Update personal details in:
- `app/layout.tsx` - Meta tags and SEO
- `components/Header.tsx` - Name and navigation
- `components/Hero.tsx` - Hero section content
- `components/Footer.tsx` - Contact information

### Content Management

#### Blog Posts
Edit blog content in `lib/blog.ts`:
```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    excerpt: "Brief description...",
    content: "Full content...",
    // ... other fields
  }
];
```

#### Publications
Update publication data in `app/publications/page.tsx` in the `publications` array.

#### Research Areas
Modify research content in `app/research/page.tsx` in the `researchAreas` and `currentProjects` arrays.

#### Courses
Edit teaching information in `app/teaching/page.tsx` in the `currentCourses` and `pastCourses` arrays.

### Styling
- **Colors**: Update color scheme in `tailwind.config.ts`
- **Typography**: Modify font settings in `app/globals.css`
- **Components**: Customize individual components in the `components/` directory

## 🚀 Deployment

### Netlify Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out`
   - Deploy!

### Vercel Deployment
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment
1. **Build static files**
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to your web hosting service

## 🔧 Configuration Files

- **next.config.js**: Next.js configuration
- **tailwind.config.ts**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript configuration
- **package.json**: Dependencies and scripts

## 📊 Performance Features

- **Static Site Generation (SSG)**: Pre-built pages for fast loading
- **Image Optimization**: Optimized images for web
- **SEO Optimization**: Complete meta tags and structured data
- **Mobile Responsive**: Optimized for all devices
- **Fast Loading**: Minimal bundle size and efficient code splitting

## 🎨 Design Features

- **Professional Color Scheme**: Navy blue, gray, and white palette
- **Clean Typography**: Readable fonts with proper hierarchy
- **Responsive Design**: Mobile-first approach
- **Academic Focus**: Designed specifically for academic professionals
- **Interactive Elements**: Hover effects and smooth transitions

## 📖 Content Sections

1. **Homepage**: Hero section with research highlights and updates
2. **About**: Biography, education timeline, skills, and awards
3. **Research**: Research areas, current projects, and philosophy
4. **Publications**: Filterable publication list with academic formatting
5. **Teaching**: Courses, philosophy, office hours, and resources
6. **Blog**: Articles on research, tutorials, and academic life
7. **Contact**: Contact form, information, and social media links

## 🤝 Contributing

If you find bugs or want to contribute improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions about customization or deployment, please:
- Open an issue on GitHub
- Check the documentation
- Contact the maintainer

---

**Built with ❤️ for the academic community**
