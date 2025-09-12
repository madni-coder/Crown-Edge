"use client";

import { useState, useEffect } from "react";

export function useResponsive() {
    const [breakpoint, setBreakpoint] = useState("xs");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const getBreakpoint = () => {
            if (typeof window === "undefined") return "xs";

            const width = window.innerWidth;
            if (width >= 1200) return "lg";
            if (width >= 1024) return "md";
            if (width >= 768) return "sm";
            return "xs";
        };

        const updateBreakpoint = () => {
            setBreakpoint(getBreakpoint());
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

    const isMobile = breakpoint === "xs";
    const isTablet = breakpoint === "sm";
    const isDesktop = breakpoint === "md" || breakpoint === "lg";

    return {
        breakpoint,
        isMobile,
        isTablet,
        isDesktop,
        isMounted,
    };
}

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handleChange = (event) => {
            setMatches(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [query]);

    return isMounted ? matches : false;
}
