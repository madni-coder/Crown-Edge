import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AnimationProvider from "../components/AnimationProvider";
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

export const metadata = {
    title: "Crown Edge Technologies",
    description:
        "Web development and mobile app development company in Raipur, Chhattisgarh. Custom website development, web applications, ecommerce solutions, and Android/iOS app development.",
    icons: {
        icon: "/c-favicon.gif",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable}`}>
                <AnimationProvider>{children}</AnimationProvider>
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
