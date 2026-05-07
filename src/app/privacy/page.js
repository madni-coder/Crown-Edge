import Link from "next/link";
import "../../app/terms/terms.css";

export const metadata = {
    title: "Privacy Policy | Crown Edge Technologies",
    description:
        "Learn how Crown Edge Technologies collects, uses, and protects your personal data. Our Privacy Policy follows industry standards for software development companies.",
};

export default function PrivacyPage() {
    const sections = [
        {
            title: "Introduction",
            body: "Crown Edge Technologies ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our software development services. Please read this policy carefully. If you disagree with its terms, please discontinue your use of our site and services.",
        },
        {
            title: "Information We Collect",
            body: "We may collect personal information you provide directly to us, such as your name, email address, phone number, company name, and project details when you contact us, request a quote, or engage our services. We also automatically collect certain technical data when you visit our website, including your IP address, browser type, operating system, referring URLs, device information, and pages visited.",
        },
        {
            title: "How We Use Your Information",
            body: "We use the information we collect to: respond to your inquiries and provide customer support; deliver, operate, and improve our software development services; send project-related communications and updates; send promotional communications (only with your consent); analyze website usage and performance; comply with legal obligations; and prevent fraudulent or unauthorized activity.",
        },
        {
            title: "Legal Basis for Processing (GDPR)",
            body: "For users in the European Economic Area (EEA) or other regions with equivalent laws, we process personal data under the following legal bases: (a) contractual necessity — to fulfill service agreements; (b) legitimate interests — to improve our services and communicate with clients; (c) legal compliance — to meet applicable regulatory requirements; and (d) consent — for marketing communications, which you may withdraw at any time.",
        },
        {
            title: "Cookies & Tracking Technologies",
            body: "We use cookies, web beacons, and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences, analyze traffic, and improve functionality. You may configure your browser to reject cookies; however, some features of our site may not function correctly without them. By using our website, you consent to the use of cookies as described in this policy.",
        },
        {
            title: "Data Sharing & Third-Party Disclosure",
            body: "We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website or delivering services (e.g., cloud hosting providers, analytics platforms, payment processors), provided they agree to keep your information confidential. We may also disclose information if required by law, court order, or to protect our legal rights.",
        },
        {
            title: "Third-Party Services & Integrations",
            body: "Our website or client projects may include links to or integrations with third-party services (e.g., Google Analytics, payment gateways, social media platforms). These third parties operate under their own privacy policies, and we encourage you to review them. Crown Edge Technologies is not responsible for the data practices of any third-party service.",
        },
        {
            title: "Data Security",
            body: "We implement industry-standard technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include SSL/TLS encryption, secure server infrastructure, access controls, and regular security reviews. Despite our efforts, no data transmission over the internet or electronic storage system is 100% secure, and we cannot guarantee absolute security.",
        },
        {
            title: "Data Retention",
            body: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related data may be retained for a period of up to 5 years after project completion for audit, legal, and portfolio reference purposes, unless you request earlier deletion.",
        },
        {
            title: "Client & Project Data",
            body: "As a software development company, we may access, process, or store data provided by clients as part of project delivery (e.g., business data, database schemas, user records). We act as a data processor for such information, and the client remains the data controller. We handle client project data strictly in accordance with the agreed project scope and applicable data protection laws.",
        },
        {
            title: "Intellectual Property & Source Code",
            body: "Any source code, designs, databases, or technical assets developed by Crown Edge Technologies for a client remain confidential during and after the engagement. We do not share, reuse, or distribute client-specific codebases without explicit written permission. Generic code libraries, frameworks, and tools developed independently by Crown Edge Technologies may be reused across projects.",
        },
        {
            title: "Your Rights",
            body: "Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate or incomplete data; request deletion of your personal data ('right to be forgotten'); object to or restrict our processing of your data; request data portability in a machine-readable format; and withdraw consent at any time. To exercise any of these rights, contact us at info.crownedge@gmail.com.",
        },
        {
            title: "Children's Privacy",
            body: "Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us immediately, and we will take steps to delete that information promptly.",
        },
        {
            title: "International Data Transfers",
            body: "Your information may be transferred to and processed in countries other than your own, including countries that may not have the same data protection laws as your jurisdiction. By using our services, you consent to this transfer. We take appropriate safeguards to ensure your data is protected in accordance with this policy and applicable law.",
        },
        {
            title: "Employees & Team Members",
            body: "Personal data of our employees and contractors is collected and processed solely for employment, project assignment, and operational purposes. This data is handled with the same level of security and confidentiality applied to client data. We do not share employee information with unauthorized third parties.",
        },
        {
            title: "Communication Preferences",
            body: "If you have opted in to receive marketing communications from us, you may unsubscribe at any time by clicking the unsubscribe link in our emails or by contacting us directly at info.crownedge@gmail.com. Please note that transactional and project-related communications are not subject to opt-out and will continue for the duration of the active engagement.",
        },
        {
            title: "Changes to This Privacy Policy",
            body: "We reserve the right to update this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or business operations. When we make material changes, we will update the 'Effective Date' at the top of this page. We encourage you to review this policy periodically. Your continued use of our services following any changes constitutes acceptance of the updated policy.",
        },
        {
            title: "Contact Us",
            body: "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us at: Crown Edge Technologies | Email: info.crownedge@gmail.com | Phone: 9993457671 | Address: Office No 357, Sanjay Nagar, Raipur, Chhattisgarh. We aim to respond to all privacy-related inquiries within 5 business days.",
        },
    ];

    const effectiveDate = "May 7, 2026";

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
                        Privacy Policy
                    </h1>
                    <p className="terms-subtitle">
                        Your privacy matters to us. Read how we collect, use, and protect your information.
                    </p>
                    <p className="terms-effective">Effective Date: {effectiveDate}</p>
                </section>

                {/* Intro */}
                <p className="terms-intro">
                    At Crown Edge Technologies, we take your privacy seriously. This
                    Privacy Policy describes how we handle personal information in
                    connection with our website and software development services.
                    We adhere to industry standards and applicable data protection
                    regulations to ensure your information is always safe with us.
                </p>

                {/* Policy List */}
                <ol className="terms-list">
                    {sections.map((section, index) => (
                        <li key={index} className="terms-item">
                            <div className="terms-item-number">{String(index + 1).padStart(2, "0")}</div>
                            <div className="terms-item-content">
                                <h2 className="terms-item-title">{section.title}</h2>
                                <p className="terms-item-body">{section.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Contact CTA */}
                <div className="terms-contact-box">
                    <h3 className="terms-contact-title">Privacy Concerns?</h3>
                    <p className="terms-contact-text">
                        If you have any questions about how we handle your data or wish
                        to exercise your privacy rights, our team is ready to help.
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
