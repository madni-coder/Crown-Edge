import Link from "next/link";
import { FiCheckCircle, FiArrowLeft, FiPhone } from "react-icons/fi";
import CallUsBtn from "./CallUsBtn";
import { MdOutlineRocketLaunch, MdOutlineDesignServices } from "react-icons/md";
import { BsStars, BsLightningChargeFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./thank-you.css";

export const metadata = {
    title: "Thank You — Crown Edge Technologies",
    description:
        "Thank you for your enquiry. We will revert to you within 24 hours.",
};

export default function ThankYouPage() {
    return (
        <div className="ty-page">
            {/* Background blobs */}
            <div className="ty-blob ty-blob--1" aria-hidden="true" />
            <div className="ty-blob ty-blob--2" aria-hidden="true" />
            <div className="ty-blob ty-blob--3" aria-hidden="true" />

            {/* Floating particles */}
            <div className="ty-particles" aria-hidden="true">
                <span className="ty-particle ty-particle--1" />
                <span className="ty-particle ty-particle--2" />
                <span className="ty-particle ty-particle--3" />
                <span className="ty-particle ty-particle--4" />
                <span className="ty-particle ty-particle--5" />
                <span className="ty-particle ty-particle--6" />
                <span className="ty-particle ty-particle--7" />
            </div>

            {/* Top bar */}
            <header className="ty-topbar">
                <Link href="/" className="ty-topbar__logo" aria-label="Crown Edge Technologies — Home">
                    <span className="ty-topbar__logo-icon" aria-hidden="true">
                        <MdOutlineRocketLaunch />
                    </span>
                    <span className="ty-topbar__name">Crown Edge Technologies</span>
                </Link>
            </header>

            {/* Main content */}
            <main className="ty-main">
                {/* Success icon with concentric rings */}
                <div className="ty-icon-outer" aria-hidden="true">
                    <span className="ty-ring ty-ring--1" />
                    <span className="ty-ring ty-ring--2" />
                    <span className="ty-ring ty-ring--3" />
                    <div className="ty-icon-circle">
                        <FiCheckCircle />
                    </div>
                </div>

                {/* Badge */}
                <div className="ty-badge">
                    <BsStars aria-hidden="true" /> Enquiry Received
                </div>

                {/* Heading */}
                <h1 className="ty-heading">
                    Thank You!
                    <span className="ty-heading-sub">We&apos;ve got your message.</span>
                </h1>

                {/* Body */}
                <p className="ty-body">
                    Your enquiry has landed safely with our team. We&apos;ll review your
                    requirements and reach out with a{" "}
                    <strong>personalised proposal within 24 working hours</strong>.
                    Sit tight — great things are in the making.
                </p>

                {/* Steps */}
                <div className="ty-steps" role="list" aria-label="What happens next">
                    <div className="ty-step" role="listitem">
                        <div className="ty-step__num" aria-hidden="true">
                            <BsLightningChargeFill />
                        </div>
                        <div>
                            <p className="ty-step__title">We Review</p>
                            <p className="ty-step__desc">
                                Our team analyses your requirements right away.
                            </p>
                        </div>
                    </div>
                    <div className="ty-step" role="listitem">
                        <div className="ty-step__num" aria-hidden="true">
                            <MdOutlineDesignServices />
                        </div>
                        <div>
                            <p className="ty-step__title">We Plan</p>
                            <p className="ty-step__desc">
                                A tailored roadmap and quote is crafted for you.
                            </p>
                        </div>
                    </div>
                    <div className="ty-step" role="listitem">
                        <div className="ty-step__num" aria-hidden="true">
                            <FiPhone />
                        </div>
                        <div>
                            <p className="ty-step__title">We Connect</p>
                            <p className="ty-step__desc">
                                Our expert reaches out within 24 working hours.
                            </p>
                        </div>
                    </div>
                    <div className="ty-step" role="listitem">
                        <div className="ty-step__num" aria-hidden="true">
                            <MdOutlineRocketLaunch />
                        </div>
                        <div>
                            <p className="ty-step__title">We Build</p>
                            <p className="ty-step__desc">
                                Your vision comes to life with our skilled team.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}


                {/* CTAs */}
                <div className="ty-cta-row">
                    <Link href="/" className="ty-btn ty-btn--primary">
                        <FiArrowLeft aria-hidden="true" />
                        Back to Home
                    </Link>
                    <CallUsBtn />
                </div>
            </main>

            {/* Footer strip */}
            <footer className="ty-footer">
                &copy; {new Date().getFullYear()} Crown Edge Technologies &mdash; Empowering You with a Royal Edge
            </footer>
        </div>
    );
}

