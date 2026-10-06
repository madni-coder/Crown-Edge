import Link from "next/link";
import PageShell, { PageHero, PageCta } from "../../components/PageShell";
import Portfolio from "../../components/Portfolio";
import { portfolioData } from "../../data/portfolio";
import { pageMeta, breadcrumbs, absolute, JsonLd } from "../../lib/seo";

export const metadata = pageMeta({
    title: "Portfolio — Website & Mobile App Development Projects",
    description:
        "Live websites and mobile apps built by Crown Edge Technologies for real estate, education, healthcare, retail and food businesses across India. Browse the work and visit each site.",
    path: "/portfolio",
    keywords: [
        "web development portfolio India",
        "website design examples India",
        "mobile app development portfolio",
        "real estate website development India",
        "education website development",
        "hospital website development India",
    ],
});

const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absolute("/portfolio"),
    name: "Crown Edge Technologies portfolio",
    description:
        "Websites and mobile apps built by Crown Edge Technologies for clients across India.",
    mainEntity: {
        "@type": "ItemList",
        numberOfItems: portfolioData.length,
        itemListElement: portfolioData.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "CreativeWork",
                name: p.title,
                description: p.description,
                url: p.link,
                image: absolute(p.image),
                genre: p.category,
                creator: { "@id": absolute("/#organization") },
            },
        })),
    },
};

export default function PortfolioPage() {
    return (
        <PageShell>
            <JsonLd data={breadcrumbs([{ name: "Portfolio", path: "/portfolio" }])} />
            <JsonLd data={portfolioSchema} />

            <PageHero
                crumb="Portfolio"
                eyebrow="Our work"
                title="Websites and apps we have shipped"
                intro="Every project below is live — click through and judge the load speed, the mobile layout and the enquiry flow yourself. We build for real estate, education, healthcare, retail, hospitality and religious organisations across India."
            />

            <Portfolio />

            <section className="page-prose">
                <div className="container">
                    <h2>What these projects have in common</h2>
                    <ul>
                        <li>
                            Mobile-first layouts, because most Indian traffic arrives on a
                            phone over a patchy connection
                        </li>
                        <li>
                            Compressed images and lean JavaScript, so Core Web Vitals pass
                            rather than scrape by
                        </li>
                        <li>
                            An enquiry path that reaches the owner on email and WhatsApp
                            within seconds
                        </li>
                        <li>
                            Titles, meta descriptions, structured data and a sitemap in
                            place at launch
                        </li>
                    </ul>
                    <p style={{ marginTop: "1.5rem" }}>
                        Want something similar? See{" "}
                        <Link href="/services">our development services</Link> or{" "}
                        <Link href="/contact">tell us about your project</Link>.
                    </p>
                </div>
            </section>

            <PageCta
                title="Your project could be next on this page"
                body="Send us the brief — a page list, a competitor site, even a rough idea. We will reply within 24 hours with scope, timeline and a fixed price."
            />
        </PageShell>
    );
}
