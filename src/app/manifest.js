import { COMPANY } from "../lib/seo";

export default function manifest() {
    return {
        name: `${COMPANY.name} — Website & App Development`,
        short_name: "Crown Edge",
        description:
            "Website and mobile app development company in India. Custom websites, web apps and Android/iOS apps.",
        start_url: "/",
        display: "standalone",
        background_color: "#09090c",
        theme_color: "#09090c",
        lang: "en-IN",
        icons: [
            { src: "/favicon.png", sizes: "512x512", type: "image/png" },
            { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    };
}
