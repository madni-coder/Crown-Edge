"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { smoothScrollTo } from "../utils/animations";

function SectionScrollerInner() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const section = searchParams.get("section");
        if (section) {
            // Small delay to ensure the page has rendered
            const timer = setTimeout(() => {
                smoothScrollTo(section, 80); // 80px offset for fixed header

                // Clean up the URL without the query parameter
                window.history.replaceState({}, "", "/");
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [searchParams]);

    return null;
}

export default function SectionScroller() {
    return (
        <Suspense fallback={null}>
            <SectionScrollerInner />
        </Suspense>
    );
}
