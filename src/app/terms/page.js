import Link from "next/link";
import "./terms.css";

export const metadata = {
    title: "Terms & Conditions | Crown Edge Technologies",
    description:
        "Read the Terms & Conditions for web development services provided by Crown Edge Technologies.",
};

export default function TermsPage() {
    const terms = [
        {
            title: "Agreement to Terms",
            body: "By hiring Crown Edge Technologies or using our services, you agree to all Terms & Conditions. If you do not agree with any part of these terms, please do not proceed with our services.",
        },
        {
            title: "Project Scope",
            body: "Every project starts with an agreed scope of work. Any features, pages, or changes outside the original scope are considered additional work and will be quoted and billed separately.",
        },
        {
            title: "Project Timeline",
            body: "We provide estimated timelines at the start of every project. Timelines may shift if the client delays in providing content, feedback, or approvals. We will always keep you informed of any changes.",
        },
        {
            title: "Client Responsibilities",
            body: "The client is responsible for providing all required content — including images, logos, and brand assets — in a timely manner. Company will not design/create nor it is responsible in any type of Graphic Designing works.",
        },
        {
            title: "Payments & Fees",
            body: "Projects require a deposit of 50% before work begins. 30 %  after the project is partially completed and rest of the 20 % will be taken before the final website is handed over or made live. All fees are non-refundable .",
        },
        {
            title: "Revision Policy",
            body: "Each project includes a set number of revisions as agreed in the project proposal. Revisions beyond the included limit will be charged at our standard hourly rate. A 'revision' means adjusting existing elements — not adding new features.",
        },
        {
            title: "Intellectual Property & Ownership",
            body: "Once full payment is received, the client owns the final website design and code. Crown Edge Technologies retains the right to showcase the project in our portfolio unless the client requests otherwise in writing.",
        },
        {
            title: "Third-Party Tools & Licenses",
            body: "Some projects use third-party tools, plugins, themes, or stock images that carry their own licenses. The client is responsible for purchasing or maintaining the licenses for such tools after project handover.",
        },
        {
            title: "Hosting & Domain",
            body: "We can help set up hosting and domains, but these are registered in the client's name and billed to the client directly. We are not responsible for hosting downtime, renewal lapses, or data loss caused by third-party hosting providers.",
        },
        {
            title: "Website Maintenance",
            body: "After project delivery, ongoing maintenance (updates, bug fixes, content changes) is not included unless a separate maintenance plan is purchased. We offer monthly maintenance packages — as per our plan",
        },
        {
            title: "Confidentiality",
            body: "We treat all client business information, data, and project details as confidential. We will not share your information with any third party without your written consent, except as required by law.",
        },
        {
            title: "Data & Privacy",
            body: "Any data collected through your website (e.g., contact forms, user sign-ups) is owned by you, the client. We build websites in compliance with applicable data privacy laws, but it is the client's responsibility to maintain ongoing compliance.",
        },
        {
            title: "Website Security",
            body: "We follow best practices for secure web development. However, no website can be guaranteed 100% secure. We recommend the client use a reputable hosting provider and keep all software, plugins, and passwords updated.",
        },
        {
            title: "Content Accuracy",
            body: "The client is fully responsible for the accuracy and legality of all content published on their website, including text, images, pricing, and claims. Crown Edge Technologies is not liable for any inaccuracies or legal issues arising from client-provided content.",
        },
        {
            title: "Legal Compliance",
            body: "The client is responsible for ensuring their website complies with all applicable laws, including copyright, consumer protection, and industry-specific regulations. We will advise where we can, but legal compliance is ultimately the client's responsibility.",
        },
        {
            title: "Cancellation Policy",
            body: "Once the project is approved and the 50% deposit is received, clients may cancel within 3 days. In such cases, 10%  cost will be deducted as a cancellation fee, and the remaining 40% will be refunded. Cancellations made after this 3-day period are non-refundable — no amount will be returned."
        },
        {
            title: "Limitation of Liability",
            body: "Crown Edge Technologies is not liable for any loss of business, loss of revenue, or indirect damages resulting from the use or unavailability of your website. Our total liability is limited to the amount paid for the specific service in question.",
        },
        {
            title: "Warranty & Bug Fixes",
            body: "We provide a 15-day post-launch warranty covering bugs and technical issues caused by our code. This does not cover issues caused by client modifications, third-party plugins, or hosting problems.",
        },
        {
            title: "Communication & Approvals",
            body: "All major decisions, approvals, and scope changes must be confirmed in writing (email or messaging platform). Verbal agreements are not binding. This protects both parties and keeps the project on track.",
        },
        {
            title: "Use of Work for Portfolio",
            body: "Unless explicitly requested otherwise in writing, we reserve the right to display completed projects in our portfolio and use them for promotional purposes, including on our website and social media.",
        },
        {
            title: "Scope of Work Disclaimer",
            body: "Our responsibility is limited to the design, development, and delivery of the website as per agreed specifications. We are not responsible for any aspects related to marketing, sales, advertising, SEO, content creation, user acquisition, or business growth post-launch.",
        },
        {
            title: "Changes to These Terms",
            body: "Crown Edge Technologies may update these Terms & Conditions from time to time. Changes will be posted on this page with an updated date. Continuing to use our services after changes are posted means you accept the new terms.",
        },

    ];

    return (
        <main className="terms-page">
            {/* Back Navigation */}
            <div className="terms-nav">
                <div className="container">
                    <Link href="/" className="terms-back-link">
                        ← Back to Home
                    </Link>
                </div>
            </div>

            <div className="container">
                {/* Header */}
                <section className="terms-header">
                    <span className="terms-badge">Legal</span>
                    <h1 className="terms-title gradient-text">
                        Terms &amp; Conditions
                    </h1>

                </section>

                {/* Intro */}
                <p className="terms-intro">
                    These Terms &amp; Conditions explain how Crown Edge Technologies
                    works with clients and what both sides are responsible for. We
                    believe in being transparent and keeping things simple. Please
                    read through all the points before hiring us.
                </p>

                {/* Terms List */}
                <ol className="terms-list">
                    {terms.map((term, index) => (
                        <li key={index} className="terms-item">
                            <div className="terms-item-number">{String(index + 1).padStart(2, "0")}</div>
                            <div className="terms-item-content">
                                <h2 className="terms-item-title">{term.title}</h2>
                                <p className="terms-item-body">{term.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Contact CTA */}
                <div className="terms-contact-box">
                    <h3 className="terms-contact-title">Have Questions?</h3>
                    <p className="terms-contact-text">
                        If anything here is unclear or you&apos;d like to discuss any
                        of these terms before hiring us, we&apos;re happy to chat.
                    </p>
                    <a href="mailto:info.crownedge@gmail.com" className="terms-contact-btn">
                        Contact Us
                    </a>
                </div>

                {/* Footer note */}
                <p className="terms-footer-note">
                    © 2026 Crown Edge Technologies. All rights reserved.
                </p>
            </div>
        </main>
    );
}
