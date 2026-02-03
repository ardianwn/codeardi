# CodeArdi - Portfolio Website

Website portfolio profesional untuk jasa pembuatan website yang dibuat dengan arsitektur clean code dan struktur folder yang rapi.

## 🚀 Fitur

- ✨ Desain modern, clean, dan elegan
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Animasi smooth dan interaktif
- 💰 Price list lengkap dengan 6 paket layanan
- 💬 Integrasi WhatsApp untuk konsultasi
- 🎯 SEO optimized
- ⚡ Fast loading dengan Next.js 14
- 🎭 Hero section menarik
- 📊 Services showcase
- 🖼️ Portfolio section
- 📞 Contact information lengkap
- 🧹 Clean code architecture
- 📦 Modular component structure
- 🔍 SEO optimized (meta tags, structured data, sitemap)
- ♿ Accessible (ARIA labels, semantic HTML)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Architecture**: Clean Code & Modular Components

## 📦 Instalasi

1. Clone repository ini
```bash
cd codeardi
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:3000`

## ⚙️ Konfigurasi

### Ganti Nomor WhatsApp

Edit file `constants/site.ts`:
```typescript
export const contactInfo: ContactInfo = {
  address: 'Jakarta, Indonesia',
  phone: '+62 812-3456-7890',
  email: 'info@codeardi.com',
  whatsapp: '6281234567890' // Ganti dengan nomor Anda (format: 62xxx)
}
```

### Customize Konten

- **Harga**: `constants/pricing.ts`
- **Layanan**: `constants/services.ts`
- **Portfolio**: `constants/portfolio.ts`
- **Informasi Situs**: `constants/site.ts`

### Warna Brand

Ubah warna primary di `tailwind.config.ts`:
```typescript
primary: {
  500: '#0ea5e9', // Warna utama
  600: '#0284c7', // Warna hover
  // ... warna lainnya
}
```

## 📁 Struktur Folder

```
codeardi/
├── app/                        # Next.js App Router
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── components/                 # React components
│   ├── layout/                # Layout components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   └── Footer.tsx         # Footer with contact
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Services section
│   │   ├── Portfolio.tsx      # Portfolio section
│   │   └── Pricing.tsx        # Pricing section
│   └── ui/                    # Reusable UI components
│       ├── ServiceCard.tsx    # Service card component
│       ├── PortfolioCard.tsx  # Portfolio card component
│       ├── PricingCard.tsx    # Pricing card component
│       └── WhatsAppButton.tsx # WhatsApp floating button
├── constants/                  # Data constants
│   ├── services.ts            # Services data
│   ├── portfolio.ts           # Portfolio data
│   ├── pricing.ts             # Pricing plans data
│   └── site.ts                # Site configuration
├── lib/                       # Utility functions
│   └── utils.ts               # Helper functions
├── types/                     # TypeScript types
│   └── index.ts               # Type definitions
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Paket Layanan

Website ini menampilkan 6 paket layanan:

1. **Landing Page** - Rp 2.000.000
2. **Company Profile** - Rp 4.500.000 (Populer)
3. **CMS Website** - Rp 7.000.000
4. **E-Commerce** - Rp 10.000.000
5. **POS System** - Rp 15.000.000
6. **Custom Web App** - Custom Price

## 🏗️ Arsitektur Clean Code

### Prinsip yang Diterapkan:

1. **Separation of Concerns**
   - Components terbagi berdasarkan fungsi (layout, sections, ui)
   - Data dipisah dari presentasi (constants folder)
   - Types didefinisikan secara eksplisit (types folder)

2. **Single Responsibility Principle**
   - Setiap component memiliki satu tanggung jawab
   - UI components reusable dan modular

3. **DRY (Don't Repeat Yourself)**
   - Utility functions untuk logic yang berulang
   - Reusable components untuk UI yang sama

4. **Type Safety**
   - TypeScript untuk type checking
   - Interface untuk data structure

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Build untuk Production

```bash
npm run build
npm start
```

## 📝 Lisensi

Free to use untuk portfolio pribadi atau komersial.

## 📚 Dokumentasi Tambahan

- [ARCHITECTURE.md](ARCHITECTURE.md) - Clean code architecture
- [SEO.md](SEO.md) - SEO optimization guide & checklist

## 🤝 Support

Jika ada pertanyaan atau butuh bantuan, hubungi:
- 📧 Email: info@codeardi.com
- 💬 WhatsApp: +62 812-3456-7890

---

Dibuat dengan ❤️ menggunakan Next.js, TypeScript, dan Tailwind CSS
