import Link from "next/link";
import PageShell, { PageHero, PageCta } from "../../components/PageShell";
import About from "../../components/About";
import Process from "../../components/Process/Process";
import { pageMeta, breadcrumbs, absolute, JsonLd, COMPANY } from "../../lib/seo";

export const metadata = pageMeta({
    title: "About Us — Website Development Company in Raipur, India",
    description:
        "Crown Edge Technologies is a website and mobile app development company based in Raipur, Chhattisgarh, serving clients across India. Meet the team, our process and how we work.",
    path: "/about",
    keywords: [
        "website development company in Raipur",
        "software development company Chhattisgarh",
        "IT company in Raipur",
        "web development agency India",
        "about Crown Edge Technologies",
    ],
});

const stats = [
    { value: "8+", label: "Websites and apps shipped" },
    { value: "7–14 days", label: "Typical website turnaround" },
    { value: "₹9,999", label: "Starting price for a business website" },
    { value: "24 hrs", label: "Average enquiry response time" },
];

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absolute("/about"),
    name: "About Crown Edge Technologies",
    description:
        "Website and mobile app development company based in Raipur, Chhattisgarh, serving clients across India.",
    mainEntity: { "@id": absolute("/#organization") },
};

export default function AboutPage() {
    return (
        <PageShell>
            <JsonLd data={breadcrumbs([{ name: "About", path: "/about" }])} />
            <JsonLd data={aboutSchema} />

            <PageHero
                crumb="About"
                eyebrow="Who we are"
                title="A website and app development company built on follow-through"
                intro={`${COMPANY.name} is a web and mobile app development company based in ${COMPANY.city}, ${COMPANY.state}, working with businesses across India. We take a project from first call to live site — design, development, deployment and the unglamorous launch checks most agencies skip.`}
            />

            <section className="page-prose">
                <div className="container">
                    <h2>Why clients pick us</h2>
                    <p>
                        Most of our clients come to us after a bad first experience: a
                        site that was never finished, a developer who went quiet, or a
                        template that looked nothing like the preview. We fixed that by
                        being boring about the things that matter — written scope, staged
                        payments tied to real milestones, and a single point of contact
                        who answers.
                    </p>
                    <div className="page-grid">
                        <article className="page-card">
                            <h3>Fixed scope, fixed price</h3>
                            <p>
                                You get an itemised quote before work starts. Anything
                                outside it is quoted separately rather than silently
                                dropped or silently billed.
                            </p>
                        </article>
                        <article className="page-card">
                            <h3>You own everything</h3>
                            <p>
                                On final payment the design, the source code, the hosting
                                and the domain are yours. No licences, no lock-in, no
                                hostage situation if you move on.
                            </p>
                        </article>
                        <article className="page-card">
                            <h3>Built to be found</h3>
                            <p>
                                Every build ships with semantic markup, structured data,
                                a sitemap, compressed images and Search Console wired up —
                                not bolted on months later.
                            </p>
                        </article>
                        <article className="page-card">
                            <h3>Remote-first across India</h3>
                            <p>
                                We are in Raipur and work with clients in Delhi NCR,
                                Mumbai, Bengaluru, Hyderabad, Pune and smaller cities over
                                call, WhatsApp and email.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="page-prose">
                <div className="container">
                    <h2>Crown Edge at a glance</h2>
                    <div className="page-grid">
                        {stats.map((s) => (
                            <article className="page-card" key={s.label}>
                                <h3 className="gradient-text">{s.value}</h3>
                                <p>{s.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <About />
            <Process />

            <section className="page-prose">
                <div className="container">
                    <h2>Where we are</h2>
                    <p>
                        {COMPANY.street}, {COMPANY.city}, {COMPANY.state}, India.
                        You can reach us on{" "}
                        <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a> or at{" "}
                        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Have a
                        look at{" "}
                        <Link href="/services">what we build</Link> and{" "}
                        <Link href="/portfolio">the work we have shipped</Link> before you
                        get in touch.
                    </p>
                </div>
            </section>

            <PageCta />
        </PageShell>
    );
}
