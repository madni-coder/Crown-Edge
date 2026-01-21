"use client";

import React from "react";
import "./privacy.css";
import Header from "../Header";
import Footer from "../Footer";

export default function Privacy() {
    return (
        <>
            <Header />
            <main className="privacy-page">
                <div className="privacy-container">
                    <h1 className="privacy-title">Terms &amp; Conditions</h1>

                    <div className="terms-card">
                        <ol className="terms-list">
                            <li>
                                <h3>Advance Payment</h3>
                                <p>
                                    Once the project requirements and deal are finalized, 50% advance
                                    payment is required. Development work will start only after
                                    receiving the advance amount.
                                </p>
                            </li>

                            <li>
                                <h3>Non-Refundable Policy</h3>
                                <p>
                                    After the development work has started, the paid amount is
                                    strictly non-refundable under any circumstances.
                                </p>
                            </li>

                            <li>
                                <h3>Design &amp; Branding Scope</h3>
                                <p>
                                    During the development process, we do not provide logo design,
                                    icon design, branding, or company-related design services. This
                                    also includes services such as creating business emails (e.g.,
                                    Gmail, domain emails).
                                </p>
                            </li>

                            <li>
                                <h3>Final Payment &amp; Deployment</h3>
                                <p>
                                    After project completion, the remaining 50% payment must be
                                    cleared. Only after full payment, the project will be hosted on
                                    the server and linked to the client’s domain name.
                                </p>
                            </li>

                            <li>
                                <h3>Free Testing &amp; Maintenance</h3>
                                <p>
                                    We provide 15 days of free testing and basic maintenance support
                                    after project delivery. Any changes or issues reported within
                                    this period will be handled free of charge.
                                </p>
                            </li>

                            <li>
                                <h3>Scope Changes</h3>
                                <p>
                                    Any new features, changes, or requirements outside the agreed
                                    scope will be considered additional work and may require extra
                                    charges and timeline extension.
                                </p>
                            </li>

                            <li>
                                <h3>Client Responsibilities</h3>
                                <p>
                                    The client must provide all required content, credentials,
                                    approvals, and feedback on time. Delays from the client side
                                    may affect the project timeline.
                                </p>
                            </li>

                            <li>
                                <h3>Project Delivery Timeline</h3>
                                <p>
                                    Estimated timelines are shared based on project scope. Delays
                                    caused by requirement changes, late feedback, or external
                                    factors are not our responsibility.
                                </p>
                            </li>

                            <li>
                                <h3>Ownership &amp; Handover</h3>
                                <p>
                                    After full payment, the client will receive ownership of the
                                    final project code and files as agreed. We reserve the right to
                                    showcase the project in our portfolio unless the client
                                    requests otherwise in writing.
                                </p>
                            </li>

                            <li>
                                <h3>Third-Party Costs &amp; Charges</h3>
                                <p>
                                    Our company will not bear any third-party costs or charges,
                                    including but not limited to:
                                </p>
                                <ul>
                                    <li>Domain name registration</li>
                                    <li>Web hosting or server charges</li>
                                    <li>Payment gateway or payment integration fees</li>
                                    <li>Android Developer Account fees (Google Play Console)</li>
                                    <li>Apple Developer Account fees (App Store)</li>
                                    <li>Any paid plugins, APIs, tools, licenses, or external services</li>
                                </ul>
                                <p>
                                    All such costs must be purchased and paid directly by the
                                    client. We are only responsible for development and technical
                                    implementation, not for third-party expenses.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
