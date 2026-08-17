# 🚀 CurrencieConv - Quick Reference Card

**Print this out or bookmark it!**

---

## ⚡ Essential Commands

```bash
npm run dev          # Start dev server → http://localhost:4321
npm run build        # Build for production → /dist folder
npm run preview      # Preview production build
npm install          # Install dependencies
npm audit fix        # Fix security issues
```

---

## 📁 Project Structure

```
src/
├── pages/            # 14 pages (router based)
├── components/       # 5 reusable components
├── layouts/          # Base layout template
└── styles/           # Global CSS + Tailwind

public/              # Static files (robots.txt, sitemap.xml)
tailwind.config.ts   # Tailwind customization
postcss.config.mjs   # PostCSS + Tailwind v4 config
```

---

## 🎯 Add New Page

1. Create file in `src/pages/your-page.astro`
2. Import Layout component
3. Add content
4. URL automatically `/your-page`

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Your Title" description="Your description">
  <h1>Your content</h1>
</Layout>
```

---

## 🎨 Add New Component

1. Create file in `src/components/YourComponent.astro`
2. Write HTML + optional JavaScript
3. Import in page or layout
4. Use like HTML: `<YourComponent />`

---

## 🎯 Add New Currency

Edit `src/pages/currencies/[code].astro`:

```typescript
const currencies = [
  { code: 'USD', name: 'US Dollar', ... },
  { code: 'EUR', name: 'Euro', ... },
  // Add new here ↓
  { code: 'BRL', name: 'Brazilian Real', ... },
];
```

This generates page at `/currencies/BRL`

---

## 🔧 Update Styling

Option 1: Use Tailwind classes (in HTML)
```html
<div class="text-blue-500 font-bold text-lg">Text</div>
```

Option 2: Add CSS classes (in `src/styles/global.css`)
```css
.my-class {
  color: #3b82f6;
  font-weight: bold;
}
```

**Don't use @apply** (breaks with Tailwind v4)

---

## 🌐 Deploy

```bash
# Option 1: Vercel (recommended, 30 seconds)
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Connect repo
# 4. Done! Auto-deploys on every push

# Option 2: Netlify (1-2 minutes)
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🔍 Debug

**Check console**: Right-click → Inspect → Console tab
**Check HTML**: Right-click → View Page Source
**Check CSS**: DevTools → Styles tab
**Check performance**: DevTools → Lighthouse tab
**Check mobile**: DevTools → Device emulation (Ctrl+Shift+M)

---

## 📊 SEO Checklist

- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Semantic HTML (h1, h2, h3, etc.)
- [ ] Internal links (proper anchor text)
- [ ] Open Graph tags
- [ ] Canonical URL
- [ ] Mobile responsive
- [ ] Fast loading (<1s LCP)

---

## 🔐 Security Checklist

- [ ] No API keys in code
- [ ] Use `.env` for secrets
- [ ] `.env` in `.gitignore`
- [ ] No sensitive data in HTML
- [ ] HTTPS enabled (automatic)
- [ ] Input validation ready

---

## 📈 Performance Targets

| Metric | Target | How to Check |
|--------|--------|-------------|
| LCP | <2.5s | DevTools → Lighthouse |
| FID | <100ms | DevTools → Lighthouse |
| CLS | <0.1 | DevTools → Lighthouse |
| Page Size | <50KB | Check dist/ folder |
| Load Time | <1s | npm run preview |

---

## 🎯 Most Used Files

| File | Purpose | Edit When |
|------|---------|-----------|
| `src/pages/*.astro` | Page content | Adding pages |
| `src/components/*.astro` | Reusable parts | Modifying UI |
| `src/styles/global.css` | All styles | Styling changes |
| `tailwind.config.ts` | Tailwind config | Custom colors/fonts |
| `public/robots.txt` | SEO robots | Blocking crawlers |

---

## 🚨 Quick Fixes

**Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Dev server won't start?**
```bash
# Port 4321 in use
# On Windows:
netstat -ano | findstr :4321
taskkill /PID <number> /F
```

**Styles not showing?**
```bash
# Clear cache
rm -rf .astro dist

# Rebuild
npm run build
```

---

## 💡 Pro Tips

1. **Use TypeScript** - Catches bugs early
2. **Use semantic HTML** - Better SEO & accessibility
3. **Mobile first** - Start with mobile, scale up
4. **Component reuse** - DRY principle
5. **Cache aggressively** - Better performance
6. **Test locally first** - Before deploying
7. **Monitor production** - Use Analytics & Search Console

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| `PROJECT_DOCS.md` | Project overview & philosophy |
| `DEPLOYMENT.md` | Launch checklist & deployment |
| `API_INTEGRATION.md` | Add real exchange rate API |
| `SPECIFICATION.md` | Complete technical specs |
| `TROUBLESHOOTING.md` | Common issues & solutions |

---

## 🔗 Important Links

**Development**:
- Local: http://localhost:4321
- Astro Docs: https://docs.astro.build
- Tailwind Docs: https://tailwindcss.com

**Hosting**:
- Vercel: https://vercel.com
- Netlify: https://netlify.com

**SEO**:
- Google Search Console: https://search.google.com/search-console
- Lighthouse: https://pagespeed.web.dev

**APIs**:
- ExchangeRate-API: https://exchangerate-api.com
- Fixer.io: https://fixer.io
- Open Exchange Rates: https://openexchangerates.org

---

## 📞 Need Help?

1. **Check** `TROUBLESHOOTING.md` for common issues
2. **Read** error message in console/terminal
3. **Search** GitHub/Stack Overflow for error
4. **Check** official docs (Astro, Tailwind, TypeScript)
5. **Ask** in community forums/Discord

---

## 🏆 Success Checklist (Before Launch)

- [ ] All 14 pages load without errors
- [ ] Mobile responsive (test on phone)
- [ ] All links work (internal & external)
- [ ] Images display correctly
- [ ] Forms functional
- [ ] No console errors
- [ ] No console warnings
- [ ] Lighthouse score >90
- [ ] All text visible (no cutoff)
- [ ] Fonts load correctly
- [ ] Colors look right
- [ ] Navigation clear
- [ ] Page titles correct
- [ ] Meta descriptions present
- [ ] No broken images

---

## 📝 Common Patterns

**Add environment variable**:
```
# .env file
VITE_API_KEY=your_key_here

# In code (Astro)
const key = import.meta.env.VITE_API_KEY;
```

**Create fetch request**:
```typescript
try {
  const response = await fetch(url);
  const data = await response.json();
  // Use data
} catch (error) {
  console.error('Failed:', error);
}
```

**Add styling to element**:
```html
<!-- Tailwind classes -->
<div class="bg-blue-500 text-white p-4 rounded">

<!-- Or CSS class -->
<div class="my-card">
```

---

**Version**: 1.0  
**Updated**: August 16, 2024  
**Status**: Ready for Production ✅

---

*Keep this card handy!*  
*Last resort: Check docs, Google the error, ask community* 🚀
