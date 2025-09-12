"use client";

import { useEffect, useState } from "react";
import {
    isMobile,
    isTablet,
    isDesktop,
    getCurrentBreakpoint,
} from "../utils/responsive";

export default function ResponsiveWrapper({ children }) {
    const [breakpoint, setBreakpoint] = useState("xs");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const updateBreakpoint = () => {
            if (typeof window !== "undefined") {
                setBreakpoint(getCurrentBreakpoint());
            }
        };

        updateBreakpoint();

        const handleResize = () => {
            updateBreakpoint();
        };

        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Don't render until mounted to avoid hydration mismatch
    if (!isMounted) {
        return <div className="responsive-loading">{children}</div>;
    }

    return (
        <div
            className={`responsive-wrapper breakpoint-${breakpoint}`}
            data-breakpoint={breakpoint}
        >
            {children}
        </div>
    );
}
