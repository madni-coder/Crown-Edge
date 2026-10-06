import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SITE_URL, COMPANY, organizationGraph, JsonLd } from "../lib/seo";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    display: "swap",
    variable: "--font-space-grotesk",
});

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default:
            "Website Development Company in India | Crown Edge Technologies",
        template: "%s | Crown Edge Technologies",
    },
    description:
        "Crown Edge Technologies is a website and mobile app development company in India. Custom website development, web apps, ecommerce stores and Android/iOS apps. Websites start at \u20B99,999. Based in Raipur, serving clients across India.",
    keywords: [
        "website development company in India",
        "web development company India",
        "mobile app development company India",
        "custom website development",
        "ecommerce website development India",
        "Android app development company",
        "iOS app development company",
        "web design company India",
        "hire web developers India",
        "website development company in Raipur",
        "software development company Chhattisgarh",
        "affordable website development India",
    ],
    applicationName: COMPANY.name,
    authors: [{ name: COMPANY.name, url: SITE_URL }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    category: "technology",
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: [{ url: "/favicon.png", type: "image/png" }],
        apple: "/apple-icon.png",
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
        title: "Website Development Company in India | Crown Edge Technologies",
        description:
            "Custom website development, web applications and Android/iOS app development for businesses across India. Websites start at \u20B99,999.",
        url: SITE_URL,
        siteName: COMPANY.name,
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Crown Edge Technologies \u2014 website and mobile app development company in India",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Development Company in India | Crown Edge Technologies",
        description:
            "Custom websites, web apps and mobile apps for Indian businesses. Starting at \u20B99,999.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    formatDetection: { telephone: true, address: true, email: true },
    verification: {
        // Set these in your host's env vars once the properties are claimed.
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
            ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
            : undefined,
    },
};

export const viewport = {
    themeColor: "#09090c",
    colorScheme: "dark",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-IN">
            <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
                <JsonLd data={organizationGraph} />
                {children}
                <Script id="responsive-init" strategy="afterInteractive">
                    {`
                        // Initialize responsive utilities after page load
                        window.addEventListener('load', function() {
                            // Add breakpoint detection
                            function updateBreakpoint() {
                                const width = window.innerWidth;
                                let breakpoint = 'xs';
                                if (width >= 1200) breakpoint = 'lg';
                                else if (width >= 1024) breakpoint = 'md';
                                else if (width >= 768) breakpoint = 'sm';

                                document.body.className = document.body.className.replace(/breakpoint-\\w+/g, '');
                                document.body.classList.add('breakpoint-' + breakpoint);
                            }

                            updateBreakpoint();
                            window.addEventListener('resize', updateBreakpoint, { passive: true });

                            // Add touch device detection
                            if ('ontouchstart' in window) {
                                document.body.classList.add('touch-device');
                            }
                        });
                    `}
                </Script>
            </body>
        </html>
    );
}
