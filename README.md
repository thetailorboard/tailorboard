# TailorBoard Website - Next.js

Professional business management platform for tailors, built with Next.js, Tailwind CSS, and TypeScript.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
complete-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   ├── features/page.tsx  # Features page
│   ├── privacy/page.tsx   # Privacy Policy
│   ├── terms/page.tsx     # Terms & Conditions
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx
│   └── Footer.tsx
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind CSS config
├── postcss.config.mjs    # PostCSS config
└── next.config.js        # Next.js config with security headers
```

## Technologies

- **Next.js 16.3.1** - React framework
- **React 19.2.8** - UI library
- **Tailwind CSS 4** - Utility-first CSS
- **TypeScript** - Type safety
- **Lucide React** - Icons

## Security Features

- ✅ Security headers in Next.js config
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection enabled
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy restrictions

## Contact Information

- **Phone:** +234 810 661 1231
- **Email:** support@tailorboard.gmail.com
- **WhatsApp:** https://wa.me/2348106611231
- **Location:** Benin City, Nigeria

## Company

- **Developer:** Kamal Adewumi
- **Company:** DIBA (Digital Inside Business Agency)
- **Version:** 2.0.0
- **Founded:** 2026

## License

© 2026 TailorBoard by DIBA. All rights reserved.
