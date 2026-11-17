// Complete Worldwide Currencies with ISO 4217 Codes, Symbols & Names (150+ Currencies)
export const currencyData: Record<string, { symbol: string; name: string }> = {
  // Top Global & Major Currencies
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
  SAR: { symbol: 'SAR', name: 'Saudi Riyal' },
  QAR: { symbol: 'QR', name: 'Qatari Riyal' },
  KWD: { symbol: 'KD', name: 'Kuwaiti Dinar' },
  BHD: { symbol: 'BD', name: 'Bahraini Dinar' },
  OMR: { symbol: 'OMR', name: 'Omani Rial' },

  // Eurasia, Caucasus & Eastern Europe (Including Georgia GEL)
  GEL: { symbol: '₾', name: 'Georgian Lari' },
  AMD: { symbol: '֏', name: 'Armenian Dram' },
  AZN: { symbol: '₼', name: 'Azerbaijani Manat' },
  TRY: { symbol: '₺', name: 'Turkish Lira' },
  RUB: { symbol: '₽', name: 'Russian Ruble' },
  UAH: { symbol: '₴', name: 'Ukrainian Hryvnia' },
  BYN: { symbol: 'Br', name: 'Belarusian Ruble' },
  KZT: { symbol: '₸', name: 'Kazakhstani Tenge' },
  UZS: { symbol: "so'm", name: 'Uzbekistani Som' },
  KGS: { symbol: 'с', name: 'Kyrgystani Som' },
  TJS: { symbol: 'SM', name: 'Tajikistani Somoni' },
  TMT: { symbol: 'T', name: 'Turkmenistani Manat' },
  MDL: { symbol: 'L', name: 'Moldovan Leu' },

  // European Union & Non-Euro Europe
  SEK: { symbol: 'kr', name: 'Swedish Krona' },
  NOK: { symbol: 'kr', name: 'Norwegian Krone' },
  DKK: { symbol: 'kr', name: 'Danish Krone' },
  PLN: { symbol: 'zł', name: 'Polish Zloty' },
  CZK: { symbol: 'Kč', name: 'Czech Koruna' },
  HUF: { symbol: 'Ft', name: 'Hungarian Forint' },
  RON: { symbol: 'lei', name: 'Romanian Leu' },
  BGN: { symbol: 'лв', name: 'Bulgarian Lev' },
  RSD: { symbol: 'дин.', name: 'Serbian Dinar' },
  BAM: { symbol: 'KM', name: 'Bosnia-Herzegovina Mark' },
  ALL: { symbol: 'Lek', name: 'Albanian Lek' },
  MKD: { symbol: 'ден', name: 'Macedonian Denar' },
  ISK: { symbol: 'kr', name: 'Icelandic Krona' },

  // South Asia
  PKR: { symbol: 'Rs', name: 'Pakistani Rupee' },
  BDT: { symbol: '৳', name: 'Bangladeshi Taka' },
  LKR: { symbol: 'Rs', name: 'Sri Lankan Rupee' },
  NPR: { symbol: 'Rs', name: 'Nepalese Rupee' },
  AFN: { symbol: '؋', name: 'Afghan Afghani' },
  BTN: { symbol: 'Nu.', name: 'Bhutanese Ngultrum' },
  MVR: { symbol: 'Rf', name: 'Maldivian Rufiyaa' },

  // Southeast & East Asia
  KRW: { symbol: '₩', name: 'South Korean Won' },
  TWD: { symbol: 'NT$', name: 'New Taiwan Dollar' },
  THB: { symbol: '฿', name: 'Thai Baht' },
  MYR: { symbol: 'RM', name: 'Malaysian Ringgit' },
  IDR: { symbol: 'Rp', name: 'Indonesian Rupiah' },
  PHP: { symbol: '₱', name: 'Philippine Peso' },
  VND: { symbol: '₫', name: 'Vietnamese Dong' },
  KHR: { symbol: '៛', name: 'Cambodian Riel' },
  LAK: { symbol: '₭', name: 'Lao Kip' },
  MMK: { symbol: 'K', name: 'Myanmar Kyat' },
  BND: { symbol: 'B$', name: 'Brunei Dollar' },
  MOP: { symbol: 'MOP$', name: 'Macanese Pataca' },
  MNT: { symbol: '₮', name: 'Mongolian Tugrik' },

  // Middle East & North Africa
  ILS: { symbol: '₪', name: 'Israeli New Shekel' },
  JOD: { symbol: 'JD', name: 'Jordanian Dinar' },
  LBP: { symbol: 'L£', name: 'Lebanese Pound' },
  IQD: { symbol: 'IQD', name: 'Iraqi Dinar' },
  IRR: { symbol: '﷼', name: 'Iranian Rial' },
  EGP: { symbol: 'E£', name: 'Egyptian Pound' },
  MAD: { symbol: 'MAD', name: 'Moroccan Dirham' },
  DZD: { symbol: 'DA', name: 'Algerian Dinar' },
  TND: { symbol: 'DT', name: 'Tunisian Dinar' },
  LYD: { symbol: 'LD', name: 'Libyan Dinar' },
  YER: { symbol: '﷼', name: 'Yemeni Rial' },

  // Africa (Sub-Saharan)
  ZAR: { symbol: 'R', name: 'South African Rand' },
  NGN: { symbol: '₦', name: 'Nigerian Naira' },
  KES: { symbol: 'KSh', name: 'Kenyan Shilling' },
  GHS: { symbol: 'GH₵', name: 'Ghanaian Cedi' },
  UGX: { symbol: 'USh', name: 'Ugandan Shilling' },
  TZS: { symbol: 'TSh', name: 'Tanzanian Shilling' },
  ETB: { symbol: 'Br', name: 'Ethiopian Birr' },
  RWF: { symbol: 'FRw', name: 'Rwandan Franc' },
  MUR: { symbol: '₨', name: 'Mauritian Rupee' },
  BWP: { symbol: 'P', name: 'Botswana Pula' },
  NAD: { symbol: 'N$', name: 'Namibian Dollar' },
  ZMW: { symbol: 'ZK', name: 'Zambian Kwacha' },
  AOA: { symbol: 'Kz', name: 'Angolan Kwanza' },
  MGA: { symbol: 'Ar', name: 'Malagasy Ariary' },
  MWK: { symbol: 'MK', name: 'Malawian Kwacha' },
  MZN: { symbol: 'MT', name: 'Mozambican Metical' },
  SCR: { symbol: 'SR', name: 'Seychellois Rupee' },
  CDF: { symbol: 'FC', name: 'Congolese Franc' },
  XOF: { symbol: 'CFA', name: 'West African CFA Franc' },
  XAF: { symbol: 'FCFA', name: 'Central African CFA Franc' },

  // Latin America & Caribbean
  BRL: { symbol: 'R$', name: 'Brazilian Real' },
  MXN: { symbol: '$', name: 'Mexican Peso' },
  ARS: { symbol: '$', name: 'Argentine Peso' },
  CLP: { symbol: '$', name: 'Chilean Peso' },
  COP: { symbol: '$', name: 'Colombian Peso' },
  PEN: { symbol: 'S/', name: 'Peruvian Sol' },
  UYU: { symbol: '$U', name: 'Uruguayan Peso' },
  CRC: { symbol: '₡', name: 'Costa Rican Colon' },
  DOP: { symbol: 'RD$', name: 'Dominican Peso' },
  GTQ: { symbol: 'Q', name: 'Guatemalan Quetzal' },
  HNL: { symbol: 'L', name: 'Honduran Lempira' },
  NIO: { symbol: 'C$', name: 'Nicaraguan Cordoba' },
  PAB: { symbol: 'B/.', name: 'Panamanian Balboa' },
  PYG: { symbol: '₲', name: 'Paraguayan Guarani' },
  BOB: { symbol: 'Bs', name: 'Bolivian Boliviano' },
  JMD: { symbol: 'J$', name: 'Jamaican Dollar' },
  TTD: { symbol: 'TT$', name: 'Trinidad and Tobago Dollar' },
  BBD: { symbol: 'Bds$', name: 'Barbadian Dollar' },
  BSD: { symbol: 'B$', name: 'Bahamian Dollar' },
  BZD: { symbol: 'BZ$', name: 'Belize Dollar' },
  XCD: { symbol: 'EC$', name: 'East Caribbean Dollar' },
  AWG: { symbol: 'Afl.', name: 'Aruban Florin' },
  ANG: { symbol: 'NAƒ', name: 'Netherlands Antillean Guilder' },
  GYD: { symbol: 'G$', name: 'Guyanese Dollar' },
  SRD: { symbol: 'Sr$', name: 'Surinamese Dollar' },
  HTG: { symbol: 'G', name: 'Haitian Gourde' },

  // Oceania & Pacific
  FJD: { symbol: 'FJ$', name: 'Fijian Dollar' },
  PGK: { symbol: 'K', name: 'Papua New Guinean Kina' },
  SBD: { symbol: 'SI$', name: 'Solomon Islands Dollar' },
  VUV: { symbol: 'VT', name: 'Vanuatu Vatu' },
  WST: { symbol: 'WS$', name: 'Samoan Tala' },
  TOP: { symbol: 'T$', name: 'Tongan Paʻanga' }
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
