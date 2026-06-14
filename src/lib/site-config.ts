// ═══════════════════════════════════════════════════════════════════
// Site Configuration — Location Voitures Tunisie
// Domain: locationvoitures-tunisie.com | FR | National
// ═══════════════════════════════════════════════════════════════════

export const siteConfig = {
    lang: "fr",

    brand: {
        name: "Location Voitures Tunisie",
        nameShort: "LVT",
        nameUpper: "LOCATION VOITURES TUNISIE",
        slug: "location-voitures-tunisie",
        foundingYear: 2009,
        description: "Location voitures Tunisie au meilleur prix. Louer une voiture en Tunisie sans carte bancaire, livraison aéroport gratuite, assurance tous risques incluse.",
    },

    contact: {
        phone: {
            display: "+216 97 955 896",
            link: "+21697955896",
            whatsapp: "21697955896",
        },
        email: "nhrentcar.tn@gmail.com",
        address: {
            street: "Aeroport Tunis-Carthage",
            city: "Tunis",
            region: "Tunis",
            postalCode: "2035",
            country: "TN",
            displayShort: "Tunis, Tunisie",
        },
        geo: {
            latitude: 36.8510,
            longitude: 10.2272,
        },
    },

    url: {
        domain: "locationvoitures-tunisie.com",
        baseUrl: "https://locationvoitures-tunisie.com",
        googleReview: "",
    },

    social: {
        facebook: "",
        instagram: "",
    },

    logo: {
        main: "/images/logo/logo.png",
        white: "/images/logo/logo-wh.png",
        external: "",
        ogImage: "/images/og-image.jpg",
    },

    rating: {
        value: 4.9,
        reviewCount: 180,
        bestRating: 5,
        worstRating: 1,
    },

    pricing: {
        currency: "TND",
        currencyDisplay: "DT",
        eurRate: 3.3,
        minPrice3Days: 324,
        minPrice3DaysEur: 98,
        maxPrice3Days: 1521,
        priceRange3Days: "324 DT - 1521 DT",
        priceRange3DaysEur: "98€ - 461€",
        pricingLabel: "Prix pour 3 jours",
    },

    seo: {
        titleDefault: "Location Voitures Tunisie – Louer Voiture Pas Cher Sans CB",
        titleTemplate: "%s | Location Voitures Tunisie",
        description: "Location voitures Tunisie pas cher. Louer une voiture en Tunisie avec livraison gratuite à l'aéroport. Sans carte bancaire, kilométrage illimité, assurance incluse. Dès 324 DT/3j.",
        keywords: [
            "location voitures tunisie",
            "louer une voiture en tunisie",
            "location auto tunisie",
            "voiture de location tunisie",
            "louer voiture tunisie pas cher",
            "location voiture tunisie sans carte bancaire",
            "location voiture tunisie aeroport",
            "location voiture tunis carthage",
            "location voiture tunisie pas cher",
            "location voiture tunisie livraison gratuite",
            "location voiture tunisie kilométrage illimité",
            "location voiture tunisie assurance incluse",
        ],
        locale: "fr_TN",
        language: "fr",
        googleVerification: "",
    },

    booking: {
        storageKey: "lvt-booking-storage",
        reviewStorageKey: "lvt_reviewed",
        defaultLocation: "Tunis, Tunisie",
    },

    telegram: {
        botToken: "",
        chatId: "",
    },

    email: {
        to: "nhrentcar.tn@gmail.com",
    },

    content: {
        hero: {
            h1: "Location Voitures Tunisie",
            subtitle: "Louez une voiture en Tunisie avec livraison gratuite dans toutes les villes et aéroports. Sans carte bancaire, kilométrage illimité, assurance tous risques incluse. Dès 324 DT pour 3 jours.",
            badge: "Service 24h / 7j",
        },
        nav: {
            links: [
                { href: "/", label: "Accueil" },
                { href: "/nos-voitures", label: "Nos Voitures" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/contact", label: "Contact" },
            ],
            mobileAvailability: "Disponible 24h/24, 7j/7",
            currencyLabel: "Devise :",
        },
        trust: {
            badges: [
                {
                    icon: "credit_card_off",
                    title: "Sans Carte Bancaire",
                    desc: "Payez en espèces à la livraison. Réservation 100% gratuite et sans engagement.",
                },
                {
                    icon: "local_shipping",
                    title: "Livraison Gratuite",
                    desc: "Livraison à l'aéroport, hôtel ou domicile dans toute la Tunisie. Gratuit.",
                },
                {
                    icon: "verified_user",
                    title: "Assurance Tous Risques",
                    desc: "Tous nos véhicules sont assurés tous risques. Conduisez l'esprit tranquille.",
                },
            ],
        },
        footer: {
            tagline: "Location de voitures en Tunisie avec livraison gratuite à l'aéroport et aux hôtels. Sans carte bancaire, paiement à l'arrivée.",
            cityLinksHeading: "Location par Ville",
            servicesHeading: "Nos Services",
            serviceLinks: [
                { name: "Nos Voitures", href: "/nos-voitures" },
                { name: "Tarifs", href: "/tarifs" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
            ],
            allRightsReserved: "Tous droits réservés.",
        },
        promo: {
            badge: "Offre Spéciale",
            h2: "Explorez la Tunisie en toute liberté",
            subtitle: "Profitez de nos tarifs imbattables pour découvrir chaque recoin du pays. Livraison gratuite partout en Tunisie.",
            priceLabel: "À partir de",
            priceSuffix: "/ 3 jours",
            cta: "Voir les offres",
        },
        home: {
            fleetLabel: "Notre Flotte",
            fleetTitle: "Nos Véhicules",
            viewAll: "Voir tout",
            viewAllMobile: "Voir tous les véhicules",
            faqLabel: "Questions Fréquentes",
            faqTitle: "Tout savoir sur la location de voitures en Tunisie",
        },
        meta: {
            ogTitle: "Location Voitures Tunisie – dès 324 DT/3 jours | Sans CB",
            ogDesc: "Louez une voiture en Tunisie dès 324 DT pour 3 jours. Sans carte bancaire, livraison gratuite aéroport, kilométrage illimité.",
            ogImageAlt: "Location Voitures Tunisie – Meilleur Prix Garanti",
        },
    },

    theme: {
        heroVariant: "overlay",   // "overlay" | "split"
        cardVariant: "default",   // "default" | "outlined"
        primary: "#00256f",
        primaryContainer: "#1a3c8f",
        primaryFixed: "#dbe1ff",
        onPrimary: "#ffffff",
        onPrimaryContainer: "#92abff",
        accent: "#00256f",
        accentDark: "#1a3c8f",
        background: "#f7f9fc",
        surface: "#f7f9fc",
        surfaceContainerLow: "#f2f4f7",
        surfaceContainerLowest: "#ffffff",
        surfaceContainerHighest: "#e0e3e6",
        onSurface: "#191c1e",
        onSurfaceVariant: "#444651",
        outlineVariant: "#c4c6d3",
        footerBg: "#172554",
    },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.whatsapp}`;
export const telUrl = `tel:${siteConfig.contact.phone.link}`;
export const mailtoUrl = `mailto:${siteConfig.contact.email}`;
export const ogImageUrl = `${siteConfig.url.baseUrl}${siteConfig.logo.ogImage}`;
export const logoFullUrl = `${siteConfig.url.baseUrl}/images/logo/logo.png`;
export const copyrightLine = (year: number) =>
    `© ${siteConfig.brand.foundingYear} - ${year} ${siteConfig.brand.name}. ${siteConfig.content.footer.allRightsReserved}`;

export type SiteConfig = typeof siteConfig;
