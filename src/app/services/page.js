import Link from "next/link";
import PageShell, { PageHero, PageCta } from "../../components/PageShell";
import Process from "../../components/Process/Process";
import TechStack from "../../components/TechStack/TechStack";
import {
    pageMeta,
    breadcrumbs,
    absolute,
    JsonLd,
    COMPANY,
} from "../../lib/seo";

export const metadata = pageMeta({
    title: "Web & Mobile App Development Services in India",
    description:
        "Website development, web applications, ecommerce stores, Android and iOS app development for businesses across India. Fixed scope, fixed price, websites from ₹9,999.",
    path: "/services",
    keywords: [
        "web development services India",
        "website development services",
        "ecommerce website development company India",
        "custom web application development",
        "Android app development services India",
        "iOS app development services India",
        "UI UX design services India",
        "website development cost in India",
    ],
});

const services = [
    {
        slug: "website-development",
        title: "Website Development",
        summary:
            "Business websites, corporate sites and landing pages built to load fast, read well on every screen and convert visitors into enquiries. Every site ships with clean semantic markup, metadata and a sitemap so Google can index it from day one.",
        points: [
            "Responsive design tested on mobile, tablet and desktop",
            "On-page SEO, schema markup and Core Web Vitals tuning",
            "Enquiry forms wired to email and WhatsApp",
            "Google Analytics and Search Console setup",
        ],
    },
    {
        slug: "web-application-development",
        title: "Web Application Development",
        summary:
            "Dashboards, admin panels, booking systems, CRMs and internal tools. We build the data model, the API and the interface, then hand over documented code you own outright.",
        points: [
            "Role-based authentication and access control",
            "REST APIs and third-party integrations",
            "Admin dashboards with reporting and exports",
            "Cloud deployment with staging and production environments",
        ],
    },
    {
        slug: "ecommerce-development",
        title: "Ecommerce Website Development",
        summary:
            "Online stores with Indian payment gateways, GST-ready invoicing and shipping integrations. Built for catalogue growth, not just a launch-day demo.",
        points: [
            "Razorpay, PhonePe and UPI payment integration",
            "Product catalogue, variants, coupons and inventory",
            "Order management and shipping partner integration",
            "Abandoned cart recovery and WhatsApp order updates",
        ],
    },
    {
        slug: "android-app-development",
        title: "Android App Development",
        summary:
            "Android apps for businesses that need their service in a customer's pocket — ordering, booking, tracking or field-staff tooling — published to the Google Play Store under your own developer account.",
        points: [
            "Native-feel performance on low-end Android devices",
            "Push notifications and offline-first data handling",
            "Play Store listing, assets and release management",
            "Post-launch crash monitoring and updates",
        ],
    },
    {
        slug: "ios-app-development",
        title: "iOS App Development",
        summary:
            "iPhone and iPad apps that pass App Store review the first time, with the same codebase discipline we apply to Android so your two platforms never drift apart.",
        points: [
            "iPhone and iPad layouts with full accessibility support",
            "Apple App Store submission and review handling",
            "Secure keychain storage and biometric login",
            "Shared API layer with your Android app and website",
        ],
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        summary:
            "Interface design grounded in how your customers actually move through a page. We design the flow first, then the pixels, so the build has nothing left to guess.",
        points: [
            "User flows, wireframes and clickable prototypes",
            "Design system with reusable components",
            "Accessibility and contrast checks before handoff",
            "Developer-ready specs, no redesign mid-build",
        ],
    },
];

const faqs = [
    {
        q: "How much does website development cost in India?",
        a: "A business website with us starts at ₹9,999. Ecommerce stores and custom web applications are quoted on scope — typically ₹35,000 to ₹2,00,000 depending on features, integrations and the number of screens. You get a written, itemised quote before any payment.",
    },
    {
        q: "How long does it take to build a website?",
        a: "A standard business website takes 7 to 14 working days from the day we receive your content. Ecommerce stores take 3 to 5 weeks, and custom web or mobile applications usually run 6 to 12 weeks. Timelines slip only when content or approvals are delayed.",
    },
    {
        q: "Do you work with clients outside Raipur and Chhattisgarh?",
        a: "Yes. We are based in Raipur, Chhattisgarh and work remotely with clients across India — Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Ahmedabad, Kolkata and beyond. Everything runs over call, WhatsApp and email, and we have shipped projects without ever meeting in person.",
    },
    {
        q: "Will my website rank on Google?",
        a: "Every site we build ships SEO-ready: semantic HTML, titles and meta descriptions, structured data, an XML sitemap, canonical URLs, compressed images and fast Core Web Vitals. Rankings themselves depend on your content and competition over time, which is why we also set up Google Search Console and Analytics so you can measure it.",
    },
    {
        q: "Do I own the code and the website?",
        a: "Yes. Once the final payment clears, the design, the code and all accounts are yours. We hand over the repository, the hosting access and the domain settings. No lock-in and no licence fees.",
    },
    {
        q: "Do you provide support after launch?",
        a: "Yes. Every project includes a free testing and bug-fix window after launch. Beyond that we offer optional monthly maintenance covering updates, backups, security patches and small content changes.",
    },
    {
        q: "What technologies do you build with?",
        a: "Mostly React and Next.js on the front end, Node.js with MongoDB or PostgreSQL on the back end, and React Native or native Kotlin/Swift for mobile. We pick the stack to fit the project rather than forcing every build through one framework.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web and mobile app development services",
    itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            description: s.summary,
            provider: { "@id": absolute("/#organization") },
            areaServed: { "@type": "Country", name: "India" },
            url: `${absolute("/services")}#${s.slug}`,
        },
    })),
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
    })),
};

export default function ServicesPage() {
    return (
        <PageShell>
            <JsonLd data={breadcrumbs([{ name: "Services", path: "/services" }])} />
            <JsonLd data={serviceSchema} />
            <JsonLd data={faqSchema} />

            <PageHero
                crumb="Services"
                eyebrow="What we build"
                title="Web & mobile app development services in India"
                intro="Crown Edge Technologies builds websites, web applications and mobile apps for businesses across India. Fixed scope, fixed price, documented code you own. Websites start at ₹9,999 and every build ships SEO-ready and performance-tested."
            />

            <section className="page-prose">
                <div className="container">
                    <h2>Our development services</h2>
                    <p>
                        We take on the whole build — design, development, deployment and
                        the launch checks — so you have one team accountable for the
                        result instead of three vendors pointing at each other.
                    </p>
                    <div className="page-grid">
                        {services.map((s) => (
                            <article id={s.slug} key={s.slug} className="page-card">
                                <h3>{s.title}</h3>
                                <p>{s.summary}</p>
                                <ul>
                                    {s.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-prose">
                <div className="container">
                    <h2>Industries we build for</h2>
                    <p>
                        Most of our work sits in real estate, education, healthcare,
                        retail and food &amp; hospitality. You can see live examples of
                        each in our{" "}
                        <Link href="/portfolio">website and app development portfolio</Link>
                        , including property listing platforms, admissions funnels,
                        hospital appointment sites and online food ordering.
                    </p>
                </div>
            </section>

            <Process />
            <TechStack />

            <section className="page-prose">
                <div className="container">
                    <h2>Frequently asked questions</h2>
                    <div className="page-faq">
                        {faqs.map(({ q, a }) => (
                            <details key={q}>
                                <summary>
                                    <h3>{q}</h3>
                                </summary>
                                <p>{a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <PageCta
                title="Get a quote for your project"
                body={`Share your requirement and we will come back within 24 hours with scope, timeline and a fixed price. Call ${COMPANY.phoneDisplay} or send the brief over email.`}
            />
        </PageShell>
    );
}
