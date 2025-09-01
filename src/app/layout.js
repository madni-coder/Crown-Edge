import { Inter } from "next/font/google";
import "./globals.css";
import AnimationProvider from "../components/AnimationProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Nexa Agency - Modern Digital Solutions",
    description:
        "Professional agency website showcasing modern design and digital solutions",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AnimationProvider>{children}</AnimationProvider>
            </body>
        </html>
    );
}
