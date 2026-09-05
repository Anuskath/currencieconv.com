// src/i18n/translations.ts
export type Locale = 'en' | 'es' | 'pt' | 'fr' | 'de';

export interface TranslationData {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    converter: string;
    rates: string;
    widget: string;
    about: string;
    contact: string;
    faq: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  converter: {
    from: string;
    to: string;
    swap: string;
    quickAmounts: string;
    copyResult: string;
    copied: string;
    share: string;
    linkCopied: string;
    refreshRates: string;
    fetchingRate: string;
    disclaimer: string;
  };
  popular: {
    title: string;
  };
  features: {
    feat1Title: string;
    feat1Desc: string;
    feat2Title: string;
    feat2Desc: string;
    feat3Title: string;
    feat3Desc: string;
  };
  article: {
    mainTitle: string;
    intro: string;
    sec1Title: string;
    sec1Text: string;
    sec2Title: string;
    sec2Text: string;
    sec3Title: string;
    sec3Points: string[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
}

export const translations: Record<Locale, TranslationData> = {
  en: {
    meta: {
      title: "Currency Converter Online - Free Real-time Exchange Rates | CurrencieConv",
      description: "Free online currency converter with live exchange rates. Convert USD to EUR, USD to INR, dollar to rupee, euro to dollar and 150+ currencies instantly.",
      keywords: "currency converter, currency converter online, usd to inr, usd to eur, euro to dollar, live exchange rates, dollar to rupee"
    },
    nav: {
      converter: "Converter",
      rates: "Live Rates",
      widget: "Widget",
      about: "About",
      contact: "Contact",
      faq: "FAQ"
    },
    hero: {
      badge: "Live Mid-Market Rates Connected",
      title: "Currency Converter",
      subtitle: "Real-time market exchange rates for 150+ world currencies. Fast, reliable, and completely free."
    },
    converter: {
      from: "From",
      to: "To",
      swap: "Swap Currencies",
      quickAmounts: "Quick Amounts:",
      copyResult: "Copy Result",
      copied: "Copied!",
      share: "Share",
      linkCopied: "Link Copied!",
      refreshRates: "Refresh Rates",
      fetchingRate: "Fetching live mid-market rate...",
      disclaimer: "* Rates provided are indicative mid-market rates sourced from interbank forex feeds for informational purposes."
    },
    popular: {
      title: "Popular Conversions"
    },
    features: {
      feat1Title: "Live Market Data",
      feat1Desc: "Real-time forex exchange rates fetched live & auto-updated every 60 seconds",
      feat2Title: "150+ World Currencies",
      feat2Desc: "USD, EUR, GBP, INR, AED, CAD, AUD, JPY, SAR and more with high precision",
      feat3Title: "Always Free",
      feat3Desc: "No hidden service fees, no account required, completely free to use"
    },
    article: {
      mainTitle: "The Best Free Online Currency Converter — Convert Any Currency Instantly",
      intro: "CurrencieConv is a free online currency converter that lets you convert any world currency to another using real-time interbank exchange rates. Whether you need to check USD to EUR, convert USD to INR, or calculate rates for business or travel, get instant accurate answers.",
      sec1Title: "How Our Real-Time Currency Converter Works",
      sec1Text: "Our live currency converter connects directly with trusted interbank forex feeds. Simply enter your amount, choose the currencies, and receive up-to-the-second mid-market conversion rates without hidden spreads.",
      sec2Title: "Why Choose CurrencieConv?",
      sec2Text: "Unlike traditional banks or conversion desks that charge between 2% and 5% in hidden markups, CurrencieConv displays pure mid-market exchange rates completely free.",
      sec3Title: "Key Advantages",
      sec3Points: [
        "100% Free — No account or credit card required",
        "Updated live every minute from global interbank networks",
        "Ultra-fast and mobile friendly on all devices",
        "Free embeddable widget for webmasters and bloggers"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Is this currency converter free to use?", a: "Yes, CurrencieConv is 100% free with unlimited currency conversions." },
        { q: "How frequently are exchange rates refreshed?", a: "Exchange rates are automatically refreshed live every 60 seconds during active global market hours." }
      ]
    }
  },

  es: {
    meta: {
      title: "Conversor de Monedas Online - Tipos de Cambio en Tiempo Real | CurrencieConv",
      description: "Conversor de monedas gratuito con tipos de cambio en vivo. Convierte dólar a euro, dólar a peso mexicano, peso a dólar y más de 150 divisas al instante.",
      keywords: "conversor de monedas, conversor de divisas, cambio de moneda, dolar a euro, dolar a peso mexicano, tipo de cambio hoy, calcular divisas"
    },
    nav: {
      converter: "Conversor",
      rates: "Tasas en Vivo",
      widget: "Widget",
      about: "Nosotros",
      contact: "Contacto",
      faq: "Preguntas"
    },
    hero: {
      badge: "Tasas Interbancarias en Vivo Conectadas",
      title: "Conversor de Monedas",
      subtitle: "Tipos de cambio en tiempo real para más de 150 monedas del mundo. Rápido, preciso y 100% gratuito."
    },
    converter: {
      from: "De",
      to: "A",
      swap: "Cambiar Monedas",
      quickAmounts: "Cantidades Rápidas:",
      copyResult: "Copiar Resultado",
      copied: "¡Copiado!",
      share: "Compartir",
      linkCopied: "¡Enlace Copiado!",
      refreshRates: "Actualizar Tasas",
      fetchingRate: "Obteniendo tasa en tiempo real...",
      disclaimer: "* Las tasas mostradas son indicativas de mercado medio para fines informativos."
    },
    popular: {
      title: "Conversiones Populares"
    },
    features: {
      feat1Title: "Datos en Tiempo Real",
      feat1Desc: "Tasas interbancarias actualizadas en vivo cada 60 segundos",
      feat2Title: "Más de 150 Monedas",
      feat2Desc: "USD, EUR, MXN, COP, ARS, GBP, BRL y muchas más con alta precisión",
      feat3Title: "Totalmente Gratis",
      feat3Desc: "Sin cargos ocultos ni necesidad de registro, libre de costo para siempre"
    },
    article: {
      mainTitle: "El Mejor Conversor de Monedas y Divisas Online Gratis",
      intro: "CurrencieConv es un conversor de divisas gratuito que te permite convertir cualquier moneda del mundo en tiempo real. Ya sea que necesites calcular el cambio de dólar a euro, dólar a peso mexicano, o cotizaciones para viajes y compras por internet, obtén resultados inmediatos y sin comisiones ocultas.",
      sec1Title: "¿Cómo Funciona Nuestro Conversor de Divisas?",
      sec1Text: "Nuestra herramienta se conecta directamente con los mercados de divisas interbancarios globales. Solo ingresa la cantidad, selecciona la moneda de origen y destino, y obtén la cotización exacta en menos de un segundo.",
      sec2Title: "¿Por Qué Usar CurrencieConv?",
      sec2Text: "Los bancos y casas de cambio tradicionales añaden márgenes de entre el 2% y el 5% sobre el tipo de cambio real. CurrencieConv te muestra la tasa interbancaria real para que sepas exactamente cuánto vale tu dinero.",
      sec3Title: "Ventajas Principales",
      sec3Points: [
        "100% Gratuito y sin registro requerido",
        "Actualizaciones automáticas cada minuto en mercados activos",
        "Diseño optimizado y rápido para celulares y computadoras",
        "Widget gratuito para incrustar en sitios web o blogs"
      ],
      faqTitle: "Preguntas Frecuentes sobre el Cambio de Moneda",
      faqs: [
        { q: "¿Es seguro y gratuito este conversor?", a: "Sí, es completamente gratuito y no almacena ningún dato personal ni requiere suscripción." },
        { q: "¿Con qué frecuencia se actualizan las tasas?", a: "Las cotizaciones se actualizan cada 60 segundos con los datos interbancarios más recientes." }
      ]
    }
  },

  pt: {
    meta: {
      title: "Conversor de Moedas Online - Cotações em Tempo Real | CurrencieConv",
      description: "Conversor de moedas gratuito com taxas de câmbio ao vivo. Converta dólar para real, euro para real, dólar para euro e mais de 150 moedas instantaneamente.",
      keywords: "conversor de moedas, conversor de moedas online, dolar para real, euro para real, cotacao do dolar hoje, cambio comercial, calcular moedas"
    },
    nav: {
      converter: "Conversor",
      rates: "Cotações",
      widget: "Widget",
      about: "Sobre",
      contact: "Contato",
      faq: "Dúvidas"
    },
    hero: {
      badge: "Cotações Interbancárias em Tempo Real",
      title: "Conversor de Moedas",
      subtitle: "Taxas de câmbio comerciais em tempo real para mais de 150 moedas mundiais. Rápido, confiável e 100% grátis."
    },
    converter: {
      from: "De",
      to: "Para",
      swap: "Inverter Moedas",
      quickAmounts: "Valores Rápidos:",
      copyResult: "Copiar Resultado",
      copied: "Copiado!",
      share: "Compartilhar",
      linkCopied: "Link Copiado!",
      refreshRates: "Atualizar Taxas",
      fetchingRate: "Buscando cotação em tempo real...",
      disclaimer: "* Cotações comerciais de mercado médio fornecidas para fins informativos."
    },
    popular: {
      title: "Conversões Mais Populares"
    },
    features: {
      feat1Title: "Cotações ao Vivo",
      feat1Desc: "Taxas do mercado forex atualizadas em tempo real a cada 60 segundos",
      feat2Title: "Mais de 150 Moedas",
      feat2Desc: "Dólar, Real, Euro, Libra, Iene, Peso e todas as principais moedas globais",
      feat3Title: "Totalmente Gratuito",
      feat3Desc: "Sem tarifas ocultas, sem necessidade de cadastro, acesso livre para sempre"
    },
    article: {
      mainTitle: "O Melhor Conversor de Moedas Online Grátis — Cotação Comercial Hoje",
      intro: "CurrencieConv é uma ferramenta gratuita de conversão de moedas que permite converter qualquer moeda internacional usando cotações interbancárias em tempo real. Se você precisa converter dólar para real (USD/BRL), euro para real (EUR/BRL), ou calcular câmbio para viagens e compras no exterior, tenha respostas precisas em segundos.",
      sec1Title: "Como Funciona o Conversor de Moedas Comercial?",
      sec1Text: "Nossa plataforma conecta-se diretamente aos provedores de dados financeiros internacionais. Digite o valor que deseja converter, selecione as moedas desejadas e veja o resultado de conversão comercial exato imediatamente.",
      sec2Title: "Por Que Usar o CurrencieConv?",
      sec2Text: "Bancos e corretoras costumam embutir taxas de spread de 2% a 5% sobre a cotação oficial. O CurrencieConv exibe a cotação média de mercado real, garantindo total transparência financeira.",
      sec3Title: "Principais Vantagens",
      sec3Points: [
        "100% Gratuito sem limite de conversões",
        "Atualizado a cada 60 segundos durante o pregão forex",
        "Interface leve, veloz e adaptada para celulares",
        "Widget gratuito disponível para blogs e criadores de conteúdo"
      ],
      faqTitle: "Perguntas Frequentes (FAQ)",
      faqs: [
        { q: "As cotações mostradas são comerciais ou turismo?", a: "Nós mostramos a cotação interbancária comercial em tempo real, sem ágio bancário." },
        { q: "Preciso pagar ou criar conta para usar?", a: "Não, o CurrencieConv é totalmente livre e gratuito para todos os usuários." }
      ]
    }
  },

  fr: {
    meta: {
      title: "Convertisseur de Devises en Ligne - Taux de Change en Direct | CurrencieConv",
      description: "Convertisseur de devises gratuit avec taux de change en direct. Convertissez euro en dollar, dollar en euro, franc suisse et plus de 150 monnaies instantanément.",
      keywords: "convertisseur de devises, taux de change, convertir euro en dollar, dollar en euro, change monnaie, convertisseur euro franc suisse"
    },
    nav: {
      converter: "Convertisseur",
      rates: "Taux en Direct",
      widget: "Widget",
      about: "À propos",
      contact: "Contact",
      faq: "FAQ"
    },
    hero: {
      badge: "Taux Interbancaires en Direct",
      title: "Convertisseur de Devises",
      subtitle: "Taux de change du marché en temps réel pour plus de 150 devises internationales. Rapide, fiable et gratuit."
    },
    converter: {
      from: "De",
      to: "Vers",
      swap: "Inverser Devises",
      quickAmounts: "Montants Rapides:",
      copyResult: "Copier le Résultat",
      copied: "Copié !",
      share: "Partager",
      linkCopied: "Lien Copié !",
      refreshRates: "Actualiser",
      fetchingRate: "Récupération du taux en direct...",
      disclaimer: "* Taux de change moyens indicatifs fournis à titre informatif."
    },
    popular: {
      title: "Conversions Populaires"
    },
    features: {
      feat1Title: "Données en Direct",
      feat1Desc: "Taux de change forex actualisés en direct toutes les 60 secondes",
      feat2Title: "150+ Devises Mondiales",
      feat2Desc: "EUR, USD, GBP, CHF, CAD, JPY et toutes les monnaies mondiales majeures",
      feat3Title: "Toujours Gratuit",
      feat3Desc: "Aucun frais caché, aucune inscription requise, 100% accessible"
    },
    article: {
      mainTitle: "Le Meilleur Convertisseur de Devises en Ligne Gratuit",
      intro: "CurrencieConv est un convertisseur de devises gratuit qui vous permet de convertir n'importe quelle monnaie mondiale en temps réel. Que vous souhaitiez calculer le taux euro-dollar (EUR/USD), préparer un voyage ou vérifier vos transactions commerciales, profitez de taux fiables et précis.",
      sec1Title: "Comment Fonctionne Notre Outil de Change ?",
      sec1Text: "Notre convertisseur interroge les marchés de change internationaux en direct. Entrez le montant, sélectionnez vos devises et visualisez immédiatement la conversion sans marge bancaire ajoutée.",
      sec2Title: "Pourquoi Choisir CurrencieConv ?",
      sec2Text: "Les bureaux de change et banques appliquent généralement des marges cachées allant de 2% à 5%. CurrencieConv affiche le taux moyen du marché réel en toute transparence.",
      sec3Title: "Nos Points Forts",
      sec3Points: [
        "100% Gratuit et sans publicité intrusive",
        "Actualisé chaque minute pour une précision optimale",
        "Parfaitement adapté aux mobiles, tablettes et ordinateurs",
        "Widget personnalisable gratuit pour les sites web"
      ],
      faqTitle: "Questions Fréquemment Posées",
      faqs: [
        { q: "Le convertisseur est-il gratuit ?", a: "Oui, CurrencieConv est entièrement gratuit et sans engagement." },
        { q: "D'où proviennent les taux de change ?", a: "Nos taux proviennent directement des flux interbancaires mondiaux de référence." }
      ]
    }
  },

  de: {
    meta: {
      title: "Währungsrechner Online - Live Wechselkurse in Echtzeit | CurrencieConv",
      description: "Kostenloser Währungsrechner mit aktuellen Wechselkursen. Euro in Dollar, Dollar in Euro, Schweizer Franken und über 150 Weltwährungen sofort umrechnen.",
      keywords: "währungsrechner, wechselkursrechner, euro in dollar, dollar in euro, devisenrechner, chf in eur, währung umrechnen"
    },
    nav: {
      converter: "Währungsrechner",
      rates: "Live-Kurse",
      widget: "Widget",
      about: "Über uns",
      contact: "Kontakt",
      faq: "FAQ"
    },
    hero: {
      badge: "Echte Interbanken-Kurse Verbunden",
      title: "Währungsrechner Online",
      subtitle: "Echtzeit-Wechselkurse für über 150 weltweite Währungen. Schnell, präzise und vollkommen kostenlos."
    },
    converter: {
      from: "Von",
      to: "Nach",
      swap: "Währungen Tauschen",
      quickAmounts: "Schnellauswahl:",
      copyResult: "Ergebnis Kopieren",
      copied: "Kopiert!",
      share: "Teilen",
      linkCopied: "Link Kopiert!",
      refreshRates: "Kurse Aktualisieren",
      fetchingRate: "Live-Marktkurse werden abgerufen...",
      disclaimer: "* Die angegebenen Wechselkurse sind indikative Mittelkurse zu Informationszwecken."
    },
    popular: {
      title: "Beliebte Umrechnungen"
    },
    features: {
      feat1Title: "Echtzeit-Marktdaten",
      feat1Desc: "Live Forex-Wechselkurse, die alle 60 Sekunden automatisch aktualisiert werden",
      feat2Title: "150+ Währungen",
      feat2Desc: "EUR, USD, CHF, GBP, JPY, CAD und alle bedeutenden Weltwährungen",
      feat3Title: "Dauerhaft Kostenlos",
      feat3Desc: "Keine versteckten Gebühren, keine Registrierung, unbegrenzt nutzbar"
    },
    article: {
      mainTitle: "Der Beste Kostenlose Online-Währungsrechner",
      intro: "CurrencieConv ist ein intuitiver und kostenloser Währungsrechner, mit dem Sie jede internationale Währung sekundenschnell umrechnen können. Ob Euro in Dollar (EUR/USD), Schweizer Franken in Euro (CHF/EUR) oder Währungen für Auslandsreisen und Online-Shopping.",
      sec1Title: "Wie Funktioniert der Währungsrechner?",
      sec1Text: "Unser Tool ruft Live-Devisenkurse direkt aus dem Interbankenmarkt ab. Geben Sie den Betrag ein, wählen Sie Ausgangs- und Zielwährung und erhalten Sie den exakten Mittelkurs in Sekundenbruchteilen.",
      sec2Title: "Warum CurrencieConv Wählen?",
      sec2Text: "Herkömmliche Banken erheben oft versteckte Aufschläge zwischen 2% und 5%. CurrencieConv zeigt Ihnen stets den fairen Mittelkurs ohne Zusatzkosten.",
      sec3Title: "Ihre Vorteile",
      sec3Points: [
        "100% Kostenlos und ohne Registrierung",
        "Minütliche Kursaktualisierungen an den Devisenmärkten",
        "Optimiert für alle mobilen Endgeräte und Desktop-PCs",
        "Kostenloses Widget für Webseitenbetreiber und Blogs"
      ],
      faqTitle: "Häufig Gestellte Fragen (FAQ)",
      faqs: [
        { q: "Ist die Nutzung des Währungsrechners kostenfrei?", a: "Ja, CurrencieConv kann uneingeschränkt kostenlos genutzt werden." },
        { q: "Wie oft werden die Wechselkurse aktualisiert?", a: "Die Kurse werden bei aktiven Märkten alle 60 Sekunden aktualisiert." }
      ]
    }
  }
};
