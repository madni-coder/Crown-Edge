"use client";

import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";

const PHONE = "9993457671";

export default function CallUsBtn() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [copyTooltip, setCopyTooltip] = useState(false);

    const handleClick = () => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            window.location.href = `tel:${PHONE}`;
            return;
        }
        setIsFlipped((prev) => !prev);
    };

    const handleCopy = async (e) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(PHONE);
            setCopyTooltip(true);
            setTimeout(() => setCopyTooltip(false), 2000);
        } catch {
            // clipboard not available
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="ty-call-btn"
            aria-label={isFlipped ? `Phone number: ${PHONE}` : "Call us now"}
        >
            <div className={`ty-call-btn__content${isFlipped ? " flipped" : ""}`}>
                {/* Front face — Call Us Now */}
                <div className="ty-call-btn__front">
                    <FiPhone aria-hidden="true" />
                    Call Us Now
                </div>

                {/* Back face — phone number + copy */}
                <div className="ty-call-btn__back" aria-hidden={!isFlipped}>
                    <span className="ty-call-btn__back-text">
                        <span>{PHONE}</span>
                        <button
                            type="button"
                            className="ty-call-btn__copy"
                            onClick={handleCopy}
                            aria-label="Copy phone number"
                        >
                            <IoCopyOutline />
                        </button>
                        {copyTooltip && (
                            <span className="ty-call-btn__tooltip" role="status">
                                Copied!
                            </span>
                        )}
                    </span>
                </div>
            </div>
        </button>
    );
}
