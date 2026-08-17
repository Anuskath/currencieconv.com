// Currency data with symbols and full names
export const currencyData: Record<string, { symbol: string; name: string }> = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound' },
  JPY: { symbol: '¥', name: 'Japanese Yen' },
  INR: { symbol: '₹', name: 'Indian Rupee' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', name: 'Australian Dollar' },
  CHF: { symbol: 'CHF', name: 'Swiss Franc' },
  CNY: { symbol: '¥', name: 'Chinese Yuan' },
  MXN: { symbol: '$', name: 'Mexican Peso' },
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
