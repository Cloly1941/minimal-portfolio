# Minimal Portfolio 

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare Pages">
<img src="https://img.shields.io/badge/EmailJS-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS">
</div>

## 🚀 Introduction

**Minimal Portfolio** is a clean, fast, and fully customizable personal portfolio website built with **Next.js 14** and **TailwindCSS**.

Designed to showcase your skills, work experience, and featured projects — all in one minimal, distraction-free interface.

- **Live site**: [nguyentrongbut.io.vn](https://nguyentrongbut.io.vn)
- **Deployment**: Powered by [Cloudflare Pages](https://pages.cloudflare.com/) via [OpenNext](https://opennext.js.org/).
- **Comments**: Integrated [Giscus](https://giscus.app/) for GitHub Discussions-based comments on project pages.

---

## 📸 Demo

### 🏠 Home Page
| Device | Image                                                                                                            |
|--------|------------------------------------------------------------------------------------------------------------------|
| 🖥️ Desktop | ![Home page Preview](https://res.cloudinary.com/dnj4p1bry/image/upload/v1772864164/nguyentrongbut.io.vn__ymjeer.png) |
| 📱 Mobile | ![Home page Preview](https://res.cloudinary.com/dnj4p1bry/image/upload/v1772870214/home-mobile_x4zzfi.png) |

### 📄 Project Detail Page
| Device | Image                                                                                                            |
|--------|------------------------------------------------------------------------------------------------------------------|
| 🖥️ Desktop |![Detail page Preview](https://res.cloudinary.com/dnj4p1bry/image/upload/v1772870558/nguyentrongbut.io.vn__1_f6nixx.png) |
| 📱 Mobile | ![Detail page Preview](https://res.cloudinary.com/dnj4p1bry/image/upload/v1772870214/detail-mobile_lk2epy.png) |



---

### ⚡ Lighthouse Score — Home Page

| Device | Score |
|--------|-------|
| 🖥️ Desktop | ![Lighthouse Home Desktop](https://res.cloudinary.com/dnj4p1bry/image/upload/v1772864163/performent-desk-home_voxzvk.png) |
| 📱 Mobile | ![Lighthouse Home Mobile](https://res.cloudinary.com/dnj4p1bry/image/upload/v1772864618/performent_fswqtq.png) |

### ⚡ Lighthouse Score — Project Detail Page

| Device | Score |
|--------|-------|
| 🖥️ Desktop | ![Lighthouse Detail Desktop](http://res.cloudinary.com/dnj4p1bry/image/upload/v1772864617/detail-desk_dknjlk.png) |
| 📱 Mobile | ![Lighthouse Detail Mobile](https://res.cloudinary.com/dnj4p1bry/image/upload/v1772864617/detail_mveugk.png) |
> **⚠️ SEO Note:** SEO score achieves **100/100** when tested locally. On Cloudflare Pages, the score may slightly decrease (92-95) due to Cloudflare blocking bots from accessing `robots.txt`. This is a limitation of Cloudflare's security, not a code issue.
---

## 🚀 Tech Stack

- [Next.js 16](https://nextjs.org/) – React framework with App Router, SSR/SSG support.
- [TypeScript](https://www.typescriptlang.org/) – Static typing for safer, more maintainable code.
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development.
- [Giscus](https://giscus.app/) – GitHub Discussions-powered comment system.
- [EmailJS](https://www.emailjs.com/) – Send emails directly from the frontend, no backend required.
- [OpenNext](https://opennext.js.org/) – Adapter to deploy Next.js on Cloudflare Pages.
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) – Cloudflare CLI for local dev & deployment.

---

## 📂 Project Structure

```bash
src
├── app                          # Next.js App Router pages
│   ├── project
│   │   └── [slug]
│   │       └── page.tsx         # Dynamic project detail page
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── robots.txt
│   └── sitemap.ts               # Auto-generated sitemap
│
├── components
│   ├── common                   # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── GiscusComments.tsx
│   │   ├── Logo.tsx
│   │   └── ToastCustom.tsx
│   └── icons
│       └── ArrowIcon.tsx
│
├── layouts                      # Global layout components
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Navbar.tsx
│
├── lib
│   └── utils.ts                 # Shared utility functions (cn)
│
├── mock-data
│   └── index.tsx                # Static data: projects, skills, experience
│
├── modules                      # Page-specific feature modules
│   ├── form
│   │   └── ContactForm.tsx
│   └── home
│       ├── ContactSection.tsx
│       ├── CtaAreaSection.tsx
│       ├── FeaturedProjectSection.tsx
│       ├── SkillSection.tsx
│       └── WorkExperienceSection.tsx
│
├── services
│   └── project
│       └── index.ts             # Project data filtering
│
└── utils
    └── techColorMap.ts          # Technology name → badge color mapping
```

---

## ✨ Features

- Personal portfolio with sections for Skills, Work Experience, Featured Projects, and Contact.
- Dynamic project detail pages with SEO-friendly URLs (`/project/[slug]`).
- Auto-generated `sitemap.xml` and `robots.txt` for SEO optimization.
- Giscus comment system on project pages (powered by GitHub Discussions).
- **Contact form powered by [EmailJS](https://www.emailjs.com/)** — sends email directly from the browser, zero backend needed.
- Custom Toast notifications for form feedback.
- Technology badge colors auto-mapped via `techColorMap.ts`.
- Fully responsive design with TailwindCSS.
- Edge-ready deployment on Cloudflare Pages.

---

## 🔍 SEO & Performance

### SEO Optimization
- Metadata configured in `app/layout.tsx` with **Open Graph**, **Twitter Card**, and `canonical` URL support.
- Dynamic `sitemap.ts` automatically includes all project pages.
- `robots.txt` controls search engine crawling behavior.
- Semantic HTML structure (`<h1>`, `<article>`, `<section>`, `<main>`) for better indexing.
- **Personal branding keywords** embedded in metadata — targeting top Google rankings for:
    - _"Nguyen Trong But"_, _"nguyentrongbut"_
    - _"Nguyen Trong But Nextjs"_, _"Nguyen Trong But Reactjs"_
- `JSON-LD` structured data (Person schema) for rich results in Google Search.
- Optimized `<title>` and `<meta name="description">` per page for higher CTR.

### Performance (Lighthouse > 90)
- **Image optimization** via `next/image`: WebP/AVIF conversion, lazy loading, responsive `srcset`, explicit `width` + `height` to prevent CLS.
- All images include descriptive `alt` text for accessibility and SEO.
- **Font optimization**: `next/font` with `display: swap` to eliminate render-blocking fonts.

---

## ⚙️ Installation & Setup

### Requirements

- Node.js >= 22
- npm 

### Installation

```bash
# Clone repository
git clone https://github.com/Cloly1941/minimal-portfolio.git
cd minimal-portfolio

# Install dependencies
npm install
```

### Run Development

```bash
npm run dev
```

App will be available at: http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

### Preview on Cloudflare (Wrangler)

```bash
npx wrangler pages dev
```

### Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory based on the template below:

```env
# Site
NEXT_PUBLIC_YOUR_WEBSITE=https://your-domain.com

# Google console
NEXT_PUBLIC_VERIFICATION_GOOGLE=your-google-verification-code

#EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-emailjs-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-emailjs-public-key

# Giscus Comments
NEXT_PUBLIC_GISCUS_REPO=your-username/your-repo
NEXT_PUBLIC_GISCUS_REPO_ID=R_xxxxxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_xxxxxxxxxx
```

---

## 🙌 Credits

- **Giscus** — open-source comment system powered by GitHub Discussions.
- **EmailJS** — client-side email sending without a backend server.
- **OpenNext** — enables Next.js deployment on Cloudflare Pages.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

🌐 Live site: [nguyentrongbut.io.vn](https://nguyentrongbut.io.vn)