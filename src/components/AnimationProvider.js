"use client";

import { useEffect } from "react";
import { initAllAnimations } from "../utils/animations";
import { initResponsiveUtils } from "../utils/responsive";

/**
 * Animation Provider Component
 * Initializes all animations and responsive utilities when mounted
 */
export default function AnimationProvider({ children }) {
    useEffect(() => {
        // Initialize animations and responsive utilities
        initAllAnimations();
        initResponsiveUtils();

        // Cleanup function (if needed)
        return () => {
            // Any cleanup code would go here
        };
    }, []);

    return <>{children}</>;
}
