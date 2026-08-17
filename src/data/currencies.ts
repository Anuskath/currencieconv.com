// Currency data with symbols and full names for major world currencies
export const currencyData: Record<string, { symbol: string; name: string }> = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound' },
  INR: { symbol: '₹', name: 'Indian Rupee' },
  AED: { symbol: 'AED', name: 'UAE Dirham' },
  JPY: { symbol: '¥', name: 'Japanese Yen' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', name: 'Australian Dollar' },
  CHF: { symbol: 'CHF', name: 'Swiss Franc' },
  CNY: { symbol: '¥', name: 'Chinese Yuan' },
  SGD: { symbol: 'S$', name: 'Singapore Dollar' },
  NZD: { symbol: 'NZ$', name: 'New Zealand Dollar' },
  HKD: { symbol: 'HK$', name: 'Hong Kong Dollar' },
  SEK: { symbol: 'kr', name: 'Swedish Krona' },
  NOK: { symbol: 'kr', name: 'Norwegian Krone' },
  MXN: { symbol: '$', name: 'Mexican Peso' },
  BRL: { symbol: 'R$', name: 'Brazilian Real' },
  ZAR: { symbol: 'R', name: 'South African Rand' },
  KRW: { symbol: '₩', name: 'South Korean Won' },
  THB: { symbol: '฿', name: 'Thai Baht' },
  IDR: { symbol: 'Rp', name: 'Indonesian Rupiah' },
  MYR: { symbol: 'RM', name: 'Malaysian Ringgit' },
  TRY: { symbol: '₺', name: 'Turkish Lira' },
  SAR: { symbol: 'SAR', name: 'Saudi Riyal' },
  EGP: { symbol: 'E£', name: 'Egyptian Pound' },
  RUB: { symbol: '₽', name: 'Russian Ruble' },
  PKR: { symbol: 'Rs', name: 'Pakistani Rupee' },
  BDT: { symbol: '৳', name: 'Bangladeshi Taka' },
  PHP: { symbol: '₱', name: 'Philippine Peso' },
  VND: { symbol: '₫', name: 'Vietnamese Dong' }
};

export function getCurrencySymbol(code: string): string {
  return currencyData[code]?.symbol || code;
}

export function getCurrencyName(code: string): string {
  return currencyData[code]?.name || code;
}

export function getCurrencyDisplay(code: string): string {
  const data = currencyData[code];
  return data ? `${data.symbol} ${code}` : code;
}
