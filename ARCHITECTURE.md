# Clean Code Architecture Documentation

## Struktur Folder

Proyek ini menggunakan struktur folder yang terorganisir dengan baik berdasarkan prinsip clean code:

### `/app` - Next.js App Router
- `layout.tsx`: Root layout dengan metadata SEO
- `page.tsx`: Homepage entry point
- `globals.css`: Global styles dan Tailwind configuration

### `/components` - React Components

#### `/components/layout`
Layout components yang digunakan di seluruh aplikasi:
- `Navbar.tsx`: Navigation bar dengan mobile menu
- `Footer.tsx`: Footer dengan informasi kontak dan links

#### `/components/sections`
Major page sections:
- `Hero.tsx`: Landing section dengan CTA
- `Services.tsx`: Services showcase
- `Portfolio.tsx`: Portfolio gallery
- `Pricing.tsx`: Pricing plans dengan WhatsApp integration

#### `/components/ui`
Reusable UI components:
- `ServiceCard.tsx`: Individual service card
- `PortfolioCard.tsx`: Individual portfolio card
- `PricingCard.tsx`: Individual pricing card
- `WhatsAppButton.tsx`: Floating WhatsApp button

### `/constants` - Data Constants
Semua data statis disimpan di sini:
- `services.ts`: Services data array
- `portfolio.ts`: Portfolio items data
- `pricing.ts`: Pricing plans data
- `site.ts`: Site configuration dan contact info

### `/lib` - Utility Functions
Helper functions dan utilities:
- `utils.ts`: 
  - `getWhatsAppUrl()`: Format WhatsApp URL
  - `formatPrice()`: Format price display
  - `smoothScrollTo()`: Smooth scroll helper

### `/types` - TypeScript Types
Type definitions untuk type safety:
- `index.ts`: All interface definitions

## Prinsip Clean Code

### 1. Separation of Concerns
- **Data**: Dipisah di `/constants`
- **Types**: Didefinisikan di `/types`
- **Logic**: Di `/lib/utils.ts`
- **UI**: Components di `/components`

### 2. Single Responsibility Principle
Setiap file memiliki satu tanggung jawab:
- Card components hanya menampilkan UI
- Section components hanya mengatur layout
- Utility functions hanya logic processing

### 3. DRY (Don't Repeat Yourself)
- Reusable card components
- Centralized data management
- Shared utility functions

### 4. Readability
- Descriptive naming conventions
- Organized folder structure
- Comments untuk complex logic

### 5. Maintainability
- Easy to find files
- Easy to update data
- Easy to add new features

## How to Update

### Update Prices
Edit `constants/pricing.ts`

### Update Services
Edit `constants/services.ts`

### Update Portfolio
Edit `constants/portfolio.ts`

### Update Contact Info
Edit `constants/site.ts`

### Add New Component
1. Create file in appropriate folder
2. Import and use in parent component
3. Add types if needed in `/types`

## Best Practices

1. **Component Props**: Always define prop types
2. **File Names**: Use PascalCase for components
3. **Exports**: Use default exports for components
4. **Imports**: Use absolute imports with `@/` prefix
5. **Styling**: Use Tailwind utility classes
6. **State**: Keep state close to where it's used
7. **Types**: Always define TypeScript interfaces

## Testing Strategy

- Test components in isolation
- Test utility functions
- Test data integrity
- Visual regression testing

## Performance

- Code splitting dengan Next.js
- Lazy loading images
- Optimized bundle size
- Minimal re-renders
