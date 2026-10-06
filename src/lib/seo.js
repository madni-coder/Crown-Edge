// Single source of truth for everything SEO needs: canonical host, NAP
// (name/address/phone) and the JSON-LD graph. Sitemap, robots, layout and
// every page read from here so the data can never drift apart.

export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://crownedgetechnologies.com"
).replace(/\/$/, "");

export const COMPANY = {
    name: "Crown Edge Technologies",
    legalName: "Crown Edge Technologies",
    tagline: "Empowering You with a Royal Edge",
    email: "info.crownedge@gmail.com",
    phone: "+919993457671",
    phoneDisplay: "+91 99934 57671",
    whatsapp: "https://wa.me/message/K2MCIN3YCBWFA1",
    street: "Office No 357, Sanjay Nagar",
    city: "Raipur",
    state: "Chhattisgarh",
    country: "IN",
    founded: "2024",
};

export const absolute = (path = "/") => `${SITE_URL}${path}`;

/** Per-page metadata helper — keeps canonical + OG in sync with the route. */
export const pageMeta = ({ title, description, path, keywords }) => ({
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
        title,
        description,
        url: absolute(path),
        siteName: COMPANY.name,
        locale: "en_IN",
        type: "website",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/og-image.png"],
    },
});

/** Renders a JSON-LD block. Server-rendered, so crawlers see it in the HTML. */
export function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

const ORG_ID = absolute("/#organization");

/** Organization + LocalBusiness + WebSite — emitted once, in the root layout. */
export const organizationGraph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": ["Organization", "ProfessionalService"],
            "@id": ORG_ID,
            name: COMPANY.name,
            legalName: COMPANY.legalName,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: absolute("/companyLogo.png"),
                width: 1004,
                height: 392,
            },
            image: absolute("/companyLogo.png"),
            description:
                "Crown Edge Technologies is a website and mobile app development company in India, building custom websites, web applications, ecommerce stores and Android/iOS apps for businesses across the country.",
            slogan: COMPANY.tagline,
            foundingDate: COMPANY.founded,
            email: COMPANY.email,
            telephone: COMPANY.phone,
            priceRange: "₹₹",
            currenciesAccepted: "INR",
            address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY.street,
                addressLocality: COMPANY.city,
                addressRegion: COMPANY.state,
                addressCountry: COMPANY.country,
            },
            areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "State", name: "Chhattisgarh" },
                { "@type": "City", name: "Raipur" },
            ],
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: COMPANY.phone,
                    email: COMPANY.email,
                    contactType: "sales",
                    areaServed: "IN",
                    availableLanguage: ["en", "hi"],
                },
            ],
            knowsAbout: [
                "Website Development",
                "Web Application Development",
                "Ecommerce Development",
                "Android App Development",
                "iOS App Development",
                "UI/UX Design",
                "Next.js",
                "React",
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web & Mobile Development Services",
                itemListElement: [
                    "Website Development",
                    "Web Application Development",
                    "Ecommerce Website Development",
                    "Android App Development",
                    "iOS App Development",
                    "UI/UX Design",
                ].map((n) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: n, serviceType: n },
                })),
            },
        },
        {
            "@type": "WebSite",
            "@id": absolute("/#website"),
            url: SITE_URL,
            name: COMPANY.name,
            publisher: { "@id": ORG_ID },
            inLanguage: "en-IN",
        },
    ],
};

/** BreadcrumbList for a subpage. Home is always the first crumb. */
export const breadcrumbs = (trail) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: absolute(c.path),
    })),
});
