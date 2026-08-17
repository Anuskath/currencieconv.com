# 🔧 CurrencieConv - Troubleshooting Guide

**Last Updated**: August 16, 2024  
**Version**: 1.0

---

## 🚨 Common Issues & Solutions

### Problem 1: Build Fails with "Cannot find module" Error

**Error Message**:
```
Cannot find module '@astrojs/tailwind'
ERR! code ERESOLVE
ERR! ERESOLVE unable to resolve dependency tree
```

**Cause**: Tailwind Astro integration incompatible with Astro v7  
**Solution**:
```bash
# Remove incompatible integration
npm uninstall @astrojs/tailwind

# Ensure Tailwind v4 PostCSS is installed
npm install -D @tailwindcss/postcss

# Verify postcss.config.mjs exists with correct config
# See: postcss.config.mjs

# Rebuild
npm run build
```

---

### Problem 2: Dev Server Won't Start

**Error Message**:
```
Error: listen EADDRINUSE: address already in use :::4321
```

**Cause**: Port 4321 already in use  
**Solution (Windows)**:
```powershell
# Find process using port 4321
netstat -ano | findstr :4321

# Example output:
# TCP    0.0.0.0:4321           LISTENING    12345

# Kill the process (replace PID with actual number)
taskkill /PID 12345 /F

# Try again
npm run dev
```

**Solution (macOS/Linux)**:
```bash
# Find process
lsof -i :4321

# Kill process
kill -9 <PID>

# Try again
npm run dev
```

---

### Problem 3: Tailwind Classes Not Applying

**Symptom**: Classes like `text-blue-500` don't work  
**Causes & Solutions**:

#### Cause A: HTML files not in src/
```
❌ WRONG: components/Header.tsx (outside src/)
✅ RIGHT: src/components/Header.astro (inside src/)
```

#### Cause B: Incorrect file path in tailwind.config.ts
```typescript
// ✅ CORRECT
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // ...
}
```

#### Cause C: Using @apply with v4 (deprecated)
```css
❌ DON'T USE:
.my-class {
  @apply text-blue-500 font-bold;
}

✅ USE INSTEAD:
.my-class {
  color: rgb(59 130 246 / <alpha-value>);
  font-weight: bold;
}
```

**Fix**:
```bash
# Clear build cache
rm -rf .astro dist node_modules/.cache

# Rebuild
npm run build
```

---

### Problem 4: "Peer Dependency" Warnings

**Error Message**:
```
npm warn peer dependencies (use `npm install --legacy-peer-deps`)
```

**Cause**: Package version conflicts  
**Solution**:
```bash
# Install with legacy peer deps (safe, used in this project)
npm install --legacy-peer-deps

# Or for existing install
npm ci --legacy-peer-deps
```

---

### Problem 5: Git Conflicts or Merge Issues

**Error**: Cannot push to GitHub  
**Solution**:
```bash
# Check status
git status

# Stash uncommitted changes if needed
git stash

# Pull latest
git pull

# Create feature branch
git checkout -b feature/name

# Make changes, commit, push
git add .
git commit -m "Description"
git push origin feature/name
```

---

### Problem 6: Node Version Mismatch

**Error**:
```
This project requires Node 22.12.0 but you have 20.10.0
```

**Solution**:
```bash
# Check current version
node --version

# Update Node.js
# Option 1: Download from nodejs.org
# Option 2: Use nvm (Node Version Manager)
nvm install 22.12.0
nvm use 22.12.0
```

---

### Problem 7: Module Not Found Errors

**Error Message**:
```
Error: Cannot find module 'astro'
```

**Cause**: Dependencies not installed  
**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Or
npm ci  # Clean install from lock file
```

---

### Problem 8: Styling Not Appearing on Production

**Cause**: Tailwind not configured for production build  
**Solution**:
```bash
# Verify tailwind.config.ts has correct content paths
cat tailwind.config.ts

# Run production build
npm run build

# Check dist/ folder for styles in HTML
```

---

## ⚡ Performance Issues

### Slow Build Time

**If build takes >5 seconds**:
```bash
# Check what's slow
npm run build -- --verbose

# Clear cache
rm -rf .astro dist

# Rebuild
npm run build
```

---

### Slow Dev Server

**If changes take >2 seconds to appear**:
```bash
# Check for file watcher issues
# Solution: Restart dev server
npm run dev

# If still slow, check disk space
# If still slow, check Node.js version (should be 22+)
```

---

## 🔍 Debugging Tips

### Enable Debug Logging

```bash
# Astro debug mode
DEBUG=astro npm run build

# Verbose output
npm run astro build --verbose

# Check specific module
DEBUG=tailwindcss npm run build
```

### Browser Console Debugging

```javascript
// In browser console, check:
console.log(window.location)        // Current URL
console.log(document.title)         // Page title
console.log(document.doctype)       // HTML doctype
console.log(navigator.userAgent)    // Browser info

// Test currency converter
console.log(exchangeRates)          // Check rates loaded
```

---

### Check Generated HTML

```bash
# After build, check HTML files
# Option 1: Open in browser
# Option 2: View source
# Option 3: Use VS Code preview

# Look for:
# - Meta tags present
# - Styles inline or linked
# - JavaScript minimal
# - Semantic HTML
```

---

## 🧪 Testing & Validation

### Manual Testing Checklist

- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Currency conversion calculates correctly
- [ ] Swap button reverses currencies
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] All pages accessible
- [ ] No console errors
- [ ] External links work

### SEO Validation

```bash
# Check meta tags
curl https://currencieconv.com | grep -i "meta name"

# Validate HTML
# Use: https://validator.w3.org/

# Check Core Web Vitals
# Use: https://pagespeed.web.dev/
```

### Accessibility Validation

```bash
# Use WAVE browser extension
# Use Axe DevTools
# Use Lighthouse (in Chrome DevTools)

# Check:
# - Color contrast (WCAG AA, 4.5:1)
# - Keyboard navigation
# - Screen reader compatibility
```

---

## 🌐 Deployment Issues

### Vercel Deployment Failed

**Check**:
```bash
# 1. Build runs locally?
npm run build

# 2. dist/ folder created?
ls -la dist/

# 3. Check Vercel logs
vercel logs

# 4. Verify env variables in Vercel dashboard
```

**Common Causes**:
- Build script wrong (should be: `npm run build`)
- Output directory wrong (should be: `dist`)
- Node version mismatch (need 22+)
- Environment variables missing

### Domain Not Pointing to Site

**Check DNS**:
```bash
# Check current DNS
nslookup currencieconv.com

# Should show Vercel nameservers:
# ns1.vercel-dns.com
# ns2.vercel-dns.com
```

---

### SSL Certificate Issues

**Issue**: "Not Secure" warning  
**Solution**:
- Vercel auto-generates SSL (should work)
- Wait 24 hours for propagation
- Clear browser cache
- Check domain is added in Vercel settings

---

## 🔐 Security Issues

### API Key Exposed

**If API key leaked**:
1. Stop using old key immediately
2. Regenerate new key in API dashboard
3. Update `.env` file
4. Commit and push (key now rotated)
5. Monitor old key for abuse

### Database Leaked

**Current Status**: No database - static site only  
**When integrating API**:
- Never commit API keys
- Use `.env` and `.gitignore`
- Use Vercel Environment Variables for production
- Rotate keys regularly

---

## 📊 Monitoring & Debugging Production

### Check Site Health

```javascript
// Open browser console and run:
fetch('/').then(r => r.text())
  .then(html => console.log('Site loaded, length:', html.length))
  .catch(e => console.error('Site down:', e))
```

### Monitor Vercel

```bash
# View deployment logs
vercel logs

# View analytics
vercel analytics

# Check status page
# https://www.vercel-status.com
```

### Monitor Search Console

1. Go to Google Search Console
2. Check for:
   - Crawl errors
   - Indexation status
   - Mobile usability issues
   - Core Web Vitals

---

## 🎯 Troubleshooting by Symptom

### "Blank Page Loading"
1. Check browser console for errors
2. Verify HTML generated (right-click → View Source)
3. Check if CSS linked properly
4. Test with different browser

### "Styles Look Wrong"
1. Clear browser cache (Ctrl+Shift+Del)
2. Check DevTools > Styles tab
3. Verify Tailwind config correct
4. Rebuild: `npm run build`

### "Links Not Working"
1. Check URL structure in browser
2. Verify files exist in dist/
3. Check router configuration
4. Test relative vs absolute URLs

### "Mobile Layout Broken"
1. Check meta viewport tag
2. Test with DevTools device emulation
3. Verify media queries correct
4. Check touch target sizes (44x44px)

### "Forms Not Submitting"
1. Check form action attribute
2. Verify input names
3. Check for JavaScript errors
4. Test with form validation

### "API Returning 404"
1. Verify endpoint URL
2. Check API key valid
3. Test with curl/Postman
4. Check CORS headers

---

## 📞 Getting Help

### Before Asking for Help, Check:
1. ✅ Is site running locally? (`npm run dev`)
2. ✅ Does `npm run build` complete successfully?
3. ✅ Are all files in correct locations?
4. ✅ Check console for error messages
5. ✅ Read error message completely
6. ✅ Try clearing cache and rebuilding

### Where to Get Help

**Official Documentation**:
- Astro: https://docs.astro.build
- Tailwind: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs/

**Community Support**:
- Astro Discord: https://astro.build/chat
- Stack Overflow: tag `astro`
- GitHub Issues: project repository

**Error Tools**:
- Google the error message
- Check VS Code problems panel
- Use browser DevTools
- Check terminal output

---

## 🚀 Performance Troubleshooting

### Site Too Slow

**Check Core Web Vitals**:
```bash
# Local testing
npm run build
npm run preview

# Online testing
# https://pagespeed.web.dev/
# https://web.dev/measure/
```

**Common Causes**:
- Large images (optimize to <100KB)
- Too much JavaScript (should be <10KB)
- Unoptimized fonts (use system fonts)
- Missing compression (Vercel handles this)

**Solutions**:
```bash
# Build and check output size
npm run build
du -sh dist/

# Check largest files
find dist -type f -size +100k

# Profile build
npm run astro build -- --profile
```

---

## 🎓 Learning Resources

### Understanding the Tech Stack

1. **Astro**: SSG, static generation, no JavaScript
2. **Tailwind CSS v4**: Utility-first, PostCSS-based
3. **TypeScript**: Type safety, IntelliSense
4. **Vercel**: Deployment, CDN, edge functions

### Recommended Learning Path

1. Understand static site generation (Astro docs)
2. Learn Tailwind CSS utilities (Tailwind docs)
3. Practice TypeScript basics (TS handbook)
4. Deploy to Vercel (Vercel docs)
5. Set up monitoring (Google Search Console)

---

## 📝 Keeping Notes

When you encounter an issue:

1. **Document it**:
   - What was the error?
   - What caused it?
   - How did you fix it?

2. **Share knowledge**:
   - Update this guide
   - Help future developers
   - Build institutional memory

3. **Prevent recurrence**:
   - Add to CI/CD checks
   - Update documentation
   - Add automated tests

---

**Remember**: Most issues have simple solutions. Read error messages carefully, check the docs, and don't hesitate to search for the exact error message online.

**Good luck! 🚀**

---

*Built with patience for Anuska Rani*  
*May this troubleshooting guide save you hours of debugging!*
