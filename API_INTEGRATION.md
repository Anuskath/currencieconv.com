# 🔌 API Integration Guide

**How to Replace Mock Exchange Rates with Real API Data**

---

## 📌 Overview

Currently, CurrencieConv uses **mock exchange rates** for demonstration. This guide explains how to integrate a real exchange rate API.

### Current Setup
```typescript
// In src/components/CurrencyConverter.astro
const exchangeRates: Record<string, Record<string, number>> = {
  USD: { EUR: 0.92, GBP: 0.78, ... },
  EUR: { USD: 1.09, GBP: 0.85, ... },
  // ... more rates
}
```

---

## 🎯 Recommended APIs

### 1. **ExchangeRate-API** ⭐ (Recommended)
**Features**:
- ✅ Free tier: 1,500 requests/month
- ✅ 160+ currencies
- ✅ Real-time rates
- ✅ Historical data
- ✅ Easy to use

**Pricing**:
- Free: $0/month (1,500 req/mo)
- Premium: $4-20/month

**Sign Up**: https://www.exchangerate-api.com

**API Example**:
```bash
GET https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{CODE}
```

Response:
```json
{
  "result": "success",
  "time_last_updated_utc": "2024-08-16T12:00:00Z",
  "base_code": "USD",
  "conversion_rates": {
    "EUR": 0.92,
    "GBP": 0.78,
    "JPY": 149.5
  }
}
```

---

### 2. **Fixer.io**
**Features**:
- Free tier: 100 requests/month
- 170+ currencies
- Real-time rates
- Simple REST API

**Pricing**:
- Free: $0/month (100 req/mo)
- Basic: $10/month

**Sign Up**: https://fixer.io

---

### 3. **Open Exchange Rates**
**Features**:
- Free tier: 1,000 requests/month
- 200+ currencies
- Real-time rates
- Volume discounts

**Pricing**:
- Free: $0/month
- Paid: $9-99/month

**Sign Up**: https://openexchangerates.org

---

### 4. **OANDA Rates API**
**Features**:
- Designed for forex traders
- Real-time market data
- Historical rates

**Pricing**:
- Premium only ($$$$)

**Sign Up**: https://www.oanda.com/forex-api/

---

## 🔧 Implementation Steps

### Step 1: Get API Key

Choose one API from above and sign up. You'll get an API key:

```
Example: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### Step 2: Add Environment Variable

Create `.env` file in project root:

```env
VITE_EXCHANGERATE_API_KEY=your_api_key_here
VITE_EXCHANGERATE_API_URL=https://v6.exchangerate-api.com/v6
```

> **Security**: Never commit `.env` to Git. Add to `.gitignore`

### Step 3: Update CurrencyConverter Component

Edit `src/components/CurrencyConverter.astro`:

**Before** (Mock data):
```typescript
const exchangeRates: Record<string, Record<string, number>> = {
  USD: { EUR: 0.92, GBP: 0.78, JPY: 149.5, ... },
  // ... more hardcoded rates
}
```

**After** (Real API):
```typescript
interface ExchangeRatesResponse {
  result: string;
  base_code: string;
  conversion_rates: Record<string, number>;
}

async function getExchangeRates(code: string): Promise<Record<string, number>> {
  const apiKey = import.meta.env.VITE_EXCHANGERATE_API_KEY;
  const apiUrl = import.meta.env.VITE_EXCHANGERATE_API_URL;
  
  try {
    const response = await fetch(
      `${apiUrl}/${apiKey}/latest/${code}`
    );
    const data: ExchangeRatesResponse = await response.json();
    
    if (data.result === 'success') {
      return data.conversion_rates;
    } else {
      throw new Error('API error');
    }
  } catch (error) {
    console.error('Exchange rate fetch failed:', error);
    // Fallback to cached data or error state
    return {};
  }
}

let exchangeRates: Record<string, Record<string, number>> = {};

// Load rates on component mount
(async () => {
  for (const code of ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'CAD', 'AUD', 'CHF', 'CNY', 'MXN']) {
    exchangeRates[code] = await getExchangeRates(code);
  }
})();
```

### Step 4: Client-Side Implementation

Add this to the script section of `CurrencyConverter.astro`:

```typescript
// Fetch rates when user changes currency
async function updateExchangeRate() {
  const fromCurrency = (document.querySelector('#from-currency') as HTMLSelectElement).value;
  const fromAmount = parseFloat((document.querySelector('#from-amount') as HTMLInputElement).value);
  
  try {
    const apiKey = import.meta.env.PUBLIC_EXCHANGERATE_API_KEY;
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
    );
    const data = await response.json();
    const rates = data.conversion_rates;
    
    // Update rates and recalculate
    exchangeRates[fromCurrency] = rates;
    // ... rest of calculation
  } catch (error) {
    console.error('Failed to fetch rates:', error);
  }
}
```

---

## 📦 Caching Strategy

### Server-Side Caching (Recommended)

```typescript
// Cache rates for 1 hour
const CACHE_DURATION = 3600000; // 1 hour in ms
let cachedRates: Record<string, { data: Record<string, number>, timestamp: number }> = {};

async function getCachedRates(code: string): Promise<Record<string, number>> {
  const now = Date.now();
  
  // Return cached data if fresh
  if (cachedRates[code] && (now - cachedRates[code].timestamp) < CACHE_DURATION) {
    return cachedRates[code].data;
  }
  
  // Fetch fresh data
  const rates = await getExchangeRates(code);
  
  // Update cache
  cachedRates[code] = {
    data: rates,
    timestamp: now
  };
  
  return rates;
}
```

### Client-Side Caching

```typescript
// Store rates in localStorage for offline access
function saveRatesToCache(rates: Record<string, Record<string, number>>) {
  localStorage.setItem('exchangeRates', JSON.stringify(rates));
  localStorage.setItem('ratesTimestamp', Date.now().toString());
}

function getCachedRates(): Record<string, Record<string, number>> | null {
  const cached = localStorage.getItem('exchangeRates');
  const timestamp = localStorage.getItem('ratesTimestamp');
  
  // Return if cached within last 24 hours
  if (cached && timestamp) {
    const age = Date.now() - parseInt(timestamp);
    if (age < 86400000) { // 24 hours
      return JSON.parse(cached);
    }
  }
  
  return null;
}
```

---

## ⚡ Performance Optimization

### 1. **Lazy Loading**
Only fetch rates when user actually needs them:

```typescript
let ratesLoaded = false;

function showConverter() {
  if (!ratesLoaded) {
    loadAllRates(); // Fetch rates only when converter is shown
    ratesLoaded = true;
  }
}
```

### 2. **Request Deduplication**
Prevent duplicate API calls:

```typescript
let ratesFetchPromise: Promise<void> | null = null;

async function ensureRatesLoaded() {
  // If already loading, return existing promise
  if (ratesFetchPromise) {
    return ratesFetchPromise;
  }
  
  // Start loading and cache the promise
  ratesFetchPromise = loadAllRates();
  return ratesFetchPromise;
}
```

### 3. **Rate Limiting**
Prevent too many API calls from single user:

```typescript
const lastRequestTime: Record<string, number> = {};
const REQUEST_COOLDOWN = 1000; // 1 second between requests

async function fetchWithCooldown(code: string) {
  const now = Date.now();
  const lastTime = lastRequestTime[code] || 0;
  
  // If requested recently, use cached data
  if (now - lastTime < REQUEST_COOLDOWN) {
    return getCachedRates()[code];
  }
  
  // Fetch new data
  lastRequestTime[code] = now;
  return getExchangeRates(code);
}
```

---

## 🔐 Security Best Practices

### 1. **API Key Protection**

**❌ DON'T:**
```typescript
// Never hardcode or expose API key in client code
const API_KEY = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";
```

**✅ DO:**
```typescript
// Use environment variables
const apiKey = import.meta.env.VITE_EXCHANGERATE_API_KEY;
// Only exposed to client if needed (prefixed with VITE_)
```

### 2. **Server-Side Proxy**

For sensitive APIs, create a backend proxy:

```typescript
// Create /src/pages/api/rates.ts
export async function POST({ request }) {
  const { code } = await request.json();
  
  // API call happens server-side, key stays secret
  const apiKey = process.env.EXCHANGERATE_API_KEY;
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`
  );
  
  return response;
}
```

### 3. **Rate Limiting**

Prevent abuse of your API endpoint:

```typescript
// Simple rate limiter
const requests: Record<string, number[]> = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = 10; // 10 requests
  const window = 60000; // per minute
  
  if (!requests[ip]) {
    requests[ip] = [];
  }
  
  // Remove old requests
  requests[ip] = requests[ip].filter(time => now - time < window);
  
  // Check limit
  if (requests[ip].length >= limit) {
    return true;
  }
  
  // Add current request
  requests[ip].push(now);
  return false;
}
```

---

## 📝 Error Handling

```typescript
async function getExchangeRates(code: string): Promise<Record<string, number>> {
  try {
    // Validate input
    if (!code || code.length !== 3) {
      throw new Error('Invalid currency code');
    }
    
    // Set timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    
    // Fetch data
    const response = await fetch(url, { signal: controller.signal });
    
    // Handle HTTP errors
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    // Parse and validate response
    const data = await response.json();
    if (data.result !== 'success') {
      throw new Error(data.error?.info || 'Unknown error');
    }
    
    // Validate data structure
    if (!data.conversion_rates || typeof data.conversion_rates !== 'object') {
      throw new Error('Invalid response structure');
    }
    
    clearTimeout(timeout);
    return data.conversion_rates;
    
  } catch (error) {
    // Log error for debugging
    console.error(`Exchange rate fetch failed for ${code}:`, error);
    
    // Return fallback data or empty object
    return getCachedFallback(code) || {};
  }
}
```

---

## 🧪 Testing

### Test Different Currencies

```typescript
async function testRates() {
  const testCodes = ['USD', 'EUR', 'GBP'];
  
  for (const code of testCodes) {
    const rates = await getExchangeRates(code);
    console.log(`${code}:`, rates);
    
    // Verify rates are numbers
    Object.values(rates).forEach(rate => {
      if (typeof rate !== 'number' || rate <= 0) {
        console.error(`Invalid rate for ${code}`);
      }
    });
  }
}
```

### Test Error Handling

```typescript
// Test with invalid API key
// Test with network disconnect
// Test with API rate limit (too many requests)
// Test with invalid currency code
// Test with slow API response
```

---

## 📊 Monitoring

### Add Logging

```typescript
function logRateFetch(code: string, success: boolean, duration: number) {
  console.log({
    timestamp: new Date().toISOString(),
    currency: code,
    success,
    duration_ms: duration,
    status: 'api_request'
  });
}
```

### Track Errors

```typescript
function reportError(error: Error, code: string) {
  // Send to error tracking service (Sentry, LogRocket, etc.)
  if (window.errorTracker) {
    window.errorTracker.captureException(error, {
      tags: { currency: code }
    });
  }
}
```

---

## 💰 Cost Optimization

| API | Free Tier | Best For |
|-----|-----------|----------|
| ExchangeRate-API | 1,500/mo | Small projects |
| Fixer | 100/mo | Testing |
| Open Exchange | 1,000/mo | Medium sites |
| OANDA | None | Enterprise |

**Optimization Tips**:
1. Cache aggressively (1 hour minimum)
2. Fetch all currencies at once
3. Use webhooks for updates (if available)
4. Upgrade before hitting limits

---

## 🎯 Next Steps

1. **Choose API** → Pick from recommended options
2. **Sign Up** → Get free API key
3. **Set Environment Variable** → Add to `.env`
4. **Update Component** → Replace mock data
5. **Test Thoroughly** → Verify all conversions
6. **Monitor Performance** → Check API usage
7. **Deploy** → Push to production

---

## 📞 Support

**Troubleshooting**:
- API returns 401? → Check API key
- API returns 429? → You've hit rate limit
- API returns 404? → Invalid currency code
- No data showing? → Check browser console
- Slow loading? → Implement caching

**Additional Resources**:
- [ExchangeRate-API Docs](https://www.exchangerate-api.com/docs)
- [Fixer Docs](https://fixer.io/documentation)
- [Open Exchange Rates Docs](https://openexchangerates.org/docs)

---

**Last Updated**: August 16, 2024  
**Status**: Ready for Implementation ✅
