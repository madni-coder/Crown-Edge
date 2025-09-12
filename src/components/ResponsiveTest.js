"use client";

import { useResponsive } from "../hooks/useResponsive";

export default function ResponsiveTest() {
    const { breakpoint, isMobile, isTablet, isDesktop, isMounted } =
        useResponsive();

    if (!isMounted) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: "10px",
                right: "10px",
                background: "rgba(0,0,0,0.8)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "12px",
                zIndex: 9999,
                fontFamily: "monospace",
            }}
        >
            <div>Breakpoint: {breakpoint}</div>
            <div>Mobile: {isMobile ? "Yes" : "No"}</div>
            <div>Tablet: {isTablet ? "Yes" : "No"}</div>
            <div>Desktop: {isDesktop ? "Yes" : "No"}</div>
            <div>
                Width:{" "}
                {typeof window !== "undefined" ? window.innerWidth : "N/A"}px
            </div>
        </div>
    );
}
