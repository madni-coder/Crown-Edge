import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    title: "Crown Edge Technologies — Web & Mobile App Development",
    description:
        "Web development and mobile app development company in Raipur, Chhattisgarh. Custom website development, web applications, ecommerce solutions, and Android/iOS app development.",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "Crown Edge Technologies",
        description:
            "Web development and mobile app development company in Raipur, Chhattisgarh. Website development starts at ₹9,999.",
        siteName: "Crown Edge Technologies",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Crown Edge Technologies",
        description:
            "Web development and mobile app development company in Raipur, Chhattisgarh.",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
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
