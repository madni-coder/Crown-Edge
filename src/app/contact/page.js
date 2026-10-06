import Link from "next/link";
import PageShell, { PageHero } from "../../components/PageShell";
import Contact from "../../components/Contact";
import { pageMeta, breadcrumbs, absolute, JsonLd, COMPANY } from "../../lib/seo";

export const metadata = pageMeta({
    title: "Contact Us — Hire Web & App Developers in India",
    description:
        "Talk to Crown Edge Technologies about your website or mobile app. Call +91 99934 57671, WhatsApp us, or send your brief by email. We reply to every enquiry within 24 hours.",
    path: "/contact",
    keywords: [
        "hire web developers India",
        "contact website development company",
        "website development company Raipur contact",
        "get website quote India",
        "app development enquiry India",
    ],
});

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absolute("/contact"),
    name: "Contact Crown Edge Technologies",
    description:
        "Contact details and enquiry form for Crown Edge Technologies, a website and mobile app development company in India.",
    mainEntity: { "@id": absolute("/#organization") },
};

export default function ContactPage() {
    return (
        <PageShell>
            <JsonLd data={breadcrumbs([{ name: "Contact", path: "/contact" }])} />
            <JsonLd data={contactSchema} />

            <PageHero
                crumb="Contact"
                eyebrow="Get in touch"
                title="Tell us what you want to build"
                intro="Share a page list, a competitor site, or just a rough idea. We reply to every enquiry within 24 hours with scope, timeline and a fixed price — no sales sequence, no retainer pitch."
            />

            <section className="page-prose">
                <div className="container">
                    <div className="page-grid">
                        <article className="page-card">
                            <h2>Call or WhatsApp</h2>
                            <p>
                                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
                                <br />
                                <a
                                    href={COMPANY.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Message us on WhatsApp
                                </a>
                            </p>
                        </article>
                        <article className="page-card">
                            <h2>Email</h2>
                            <p>
                                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                                <br />
                                Best for detailed briefs and attachments.
                            </p>
                        </article>
                        <article className="page-card">
                            <h2>Office</h2>
                            <p>
                                {COMPANY.street}
                                <br />
                                {COMPANY.city}, {COMPANY.state}, India
                            </p>
                        </article>
                        <article className="page-card">
                            <h2>Hours</h2>
                            <p>
                                Monday to Saturday, 10:00 – 19:00 IST
                                <br />
                                Enquiries answered within 24 hours.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <Contact />

            <section className="page-prose">
                <div className="container">
                    <h2>Before you write in</h2>
                    <p>
                        It speeds things up if you already know roughly what you need.
                        Our <Link href="/services">services page</Link> lists what each
                        type of build includes and what it costs, and the{" "}
                        <Link href="/portfolio">portfolio</Link> shows live examples in
                        several industries. If you are comparing quotes, our{" "}
                        <Link href="/terms">terms</Link> spell out payment stages and
                        revision limits up front.
                    </p>
                </div>
            </section>
        </PageShell>
    );
}
