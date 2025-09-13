import { Inter } from "next/font/google";
import "./globals.css";
import AnimationProvider from "../components/AnimationProvider";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Crown Edge Technologies",
    description:
        "Professional agency website showcasing modern design and digital solutions",
    icons: {
        icon: "/c-favicon.gif",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
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
