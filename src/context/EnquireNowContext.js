"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const EnquireNowContext = createContext(null);

/**
 * Lets any CTA on the homepage (Hero, Services cards, Contact, Footer) open the
 * single EnquireNow modal, optionally pre-selecting a service.
 */
export function EnquireNowProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [presetService, setPresetService] = useState("");

    const openEnquiry = useCallback((service = "") => {
        setPresetService(service);
        setOpen(true);
    }, []);

    const closeEnquiry = useCallback(() => setOpen(false), []);

    const value = useMemo(
        () => ({ open, presetService, openEnquiry, closeEnquiry }),
        [open, presetService, openEnquiry, closeEnquiry]
    );

    return (
        <EnquireNowContext.Provider value={value}>
            {children}
        </EnquireNowContext.Provider>
    );
}

export function useEnquireNow() {
    const ctx = useContext(EnquireNowContext);
    if (!ctx) {
        throw new Error("useEnquireNow must be used within EnquireNowProvider");
    }
    return ctx;
}
